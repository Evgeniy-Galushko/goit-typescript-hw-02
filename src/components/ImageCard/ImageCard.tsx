import s from "./ImageCard.module.css";

interface ImageCardProps {
  id: string;
  src: string;
  alt: string;
  handleChange: () => void;
  likes: number;
  user: string;
  location: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  src,
  alt,
  handleChange,
  likes,
  user,
  location,
}) => {
  if (location === null) {
    location = "Earth";
  }

  return (
    <div>
      <img
        id={id}
        src={src}
        alt={alt}
        onClick={handleChange}
        className={s.img}
      />
      <ul className={s.galleryCardSignature}>
        <li>
          <p className={s.galleryCardSignatureP}>Likes</p>
          <p className={s.galleryCardSignatureNumber}>{likes}</p>
        </li>
        <li>
          <p className={s.galleryCardSignatureP}>Photographer</p>
          <p className={s.galleryCardSignatureNumber}>{user}</p>
        </li>
        <li>
          <p className={s.galleryCardSignatureP}>Location</p>
          <p className={s.galleryCardSignatureNumber}>
            {location.length > 14
              ? `${location.slice(0, 14)}...`
              : location.slice()}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
