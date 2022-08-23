import { Photo } from '../types/Photo';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getAll = async () => {
  let list: Photo[] = [];

  // Cria referencia da pasta
  const imagesFolder = ref(storage, 'images');

  // Ler os arquivos da pasta
  const photoList = await listAll(imagesFolder);

  for (let index in photoList.items) {
    // Gera url do arquivo
    let photoURL = await getDownloadURL(photoList.items[index]);

    list.push({
      name: photoList.items[index].name,
      url: photoURL,
    });
  }

  return list;
};
