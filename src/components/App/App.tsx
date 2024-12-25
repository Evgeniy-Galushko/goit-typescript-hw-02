import { useState, useEffect } from "react";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import requestApi from "../../request-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import BtnUp from "../BtnUp/BtnUp";
import BtnDown from "../BtnDown/BtnDown";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { CartImg } from "./App.types";
import { ModalData } from "./App.types";

export default function App() {
  const [textMessage, setTextMessage] = useState<string>("");
  const [photoCollection, setPhotoCollection] = useState<CartImg[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [totalNumberOfPages, setTotalNumberOfPages] = useState<number>(0);
  const [modalPhoto, setModalPhoto] = useState<ModalData | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleSubmit = (requestText: string) => {
    setPhotoCollection([]);
    setPage(1);
    setTextMessage(requestText);
  };

  useEffect(() => {
    async function request() {
      try {
        if (textMessage === "") {
          return;
        }
        setLoading(true);
        if (!textMessage) return;
        const response = await requestApi(textMessage, page);
        setTotalNumberOfPages(response.total_pages);
        setPhotoCollection((prevImages) => [
          ...prevImages,
          ...response.results,
        ]);
      } catch (error) {
        console.log(error);
        setErrorMessage(true);
      } finally {
        setLoading(false);
      }
    }
    request();
  }, [textMessage, page]);

  const handleClick = (): void => {
    setPage(page + 1);
  };

  const handleChange = (modalData: ModalData | null) => {
    setModalIsOpen(true);
    setModalPhoto(modalData);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <ImageModal
        photo={modalPhoto}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <SearchBar handleSubmit={handleSubmit} />
      {errorMessage ? (
        <ErrorMessage />
      ) : (
        <ImageGallery fotos={photoCollection} handleChange={handleChange} />
      )}
      {loading && <Loader />}
      {page < totalNumberOfPages && (
        <LoadMoreBtn onClick={handleClick}>Load more</LoadMoreBtn>
      )}
      {page >= 2 && (
        <BtnUp>
          <GoChevronUp size={20} />
        </BtnUp>
      )}
      {page >= 2 && (
        <BtnDown>
          <GoChevronDown size={20} />
        </BtnDown>
      )}
    </>
  );
}
