import * as C from './styles';

interface IPhotoProps {
  url: string;
  name: string;
}

export const PhotoCard = ({ url, name }: IPhotoProps) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <h5>{name}</h5>
    </C.Container>
  );
};
