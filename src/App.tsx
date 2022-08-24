import { useEffect, useState, FormEvent } from 'react';
import * as C from './App.styles';
import { PhotoCard } from './components/PhotoCard';
import * as ServicesPhotos from './services/photos';
import { Photo } from './services/types/Photo';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);

      setPhotos(await ServicesPhotos.getAll());

      setLoading(false);
    };

    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    console.log('AQ', file);
    if (file && file.size > 0) {
      setUploading(true);

      let result = await ServicesPhotos.insert(file);

      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - $${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Upload Gallery</C.Header>
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type={'file'} name="image" />
          <input type={'submit'} value="Enviar" />
          {uploading && <span>enviando..</span>}
        </C.UploadForm>

        {loading && (
          <C.ScreenMessage>
            <div className="emoji">🕵️</div>
            <div>Procurando fotos..</div>
          </C.ScreenMessage>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((photo, index) => (
              <PhotoCard key={index} name={photo.name} url={photo.url} />
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenMessage>
            <div className="emoji">🤦‍♂️</div>
            <div>Você não possui fotos cadastradas!</div>
          </C.ScreenMessage>
        )}
      </C.Area>
    </C.Container>
  );
};
