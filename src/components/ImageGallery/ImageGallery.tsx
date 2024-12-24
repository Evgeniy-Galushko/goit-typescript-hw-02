import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { CartImg } from "../App/App.types";
import { ModalData } from "../App/App.types";

interface ImageGalleryProps {
  fotos: CartImg[];
  handleChange: ({}: ModalData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ fotos, handleChange }) => {
  return (
    <ul className={s.ul}>
      {fotos.map(({ id, urls, asset_type, likes, user }) => {
        return (
          <li key={id} className={s.galleryCard}>
            <ImageCard
              id={id}
              likes={likes}
              user={user.name}
              location={user.location}
              src={urls.small}
              alt={asset_type}
              handleChange={() =>
                handleChange({ src: urls.regular, alt: asset_type })
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
