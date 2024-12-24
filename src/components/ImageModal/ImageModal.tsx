import s from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
import React from "react";

interface ImageModalProps {
  photo: { src: string; alt: string };
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  photo,
  isOpen,
  onRequestClose,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "",
      transform: "translate(-50%, -50%)",
    },
  };

  if (!photo) return;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={photo.src} alt={photo.alt} className={s.imgMod} />
    </Modal>
  );
};

export default ImageModal;
