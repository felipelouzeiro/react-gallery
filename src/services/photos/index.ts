import { Photo } from '../types/Photo';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { uuidv4 } from '@firebase/util';

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

export const insert = async (file: File) => {
  if (
    ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)
  ) {
    // substituindo o nome por um uuid
    let newFileName = `${file.name.replace(
      /.jpg|.png|.gif|.jpeg/gi,
      uuidv4()
    )}`;

    let newFile = ref(storage, `images/${newFileName}`);

    let upload = await uploadBytes(newFile, file);

    let photoURL = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoURL } as Photo;
  } else {
    return new Error('Tipo de arquivo não permitido.');
  }
};
