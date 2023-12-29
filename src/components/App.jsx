import { useState, useEffect } from 'react';
import fetchImages from './API/PixabayAPI';
import Loader from './Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Buttom';
import Modal from './Modal/Modal';

export default function App(params) {
  const [itemImg, setItemImg] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchNameImg, setSearchNameImg] = useState('');
  const [isLoading, setIsLoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgData, setImgData] = useState('');

  const addStateImg = async searchName => {
    try {
      if (searchName === '') {
        return;
      }

      if (searchName === searchNameImg) {
        return;
      }
      // Сброс currentPage перед новым поиском
      setIsLoding(true);
      setCurrentPage(1);

      const getImages = await fetchImages(searchName);

      setItemImg(getImages.hits);
      setSearchNameImg(searchName);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  const toggaleModal = e => {
    setShowModal(!showModal);

    getImgDate(e);
  };

  const getImgDate = data => {
    setImgData(data);
  };

  const loadMore = async () => {
    setCurrentPage(prevState => prevState + 1);
    // setIsLoding(true); // Устанавливаем isLoading в true перед загрузкой следующей страницы
  };

  return (
    <>
      <Searchbar addStateImg={addStateImg} />
      {showModal && <Modal imgData={imgData} onClose={toggaleModal} />}
      <ImageGalleryItems onOpenModalImg={toggaleModal} queryImg={itemImg} />
      {isLoading && <Loader />}
      {itemImg.length > 0 && (
        <Button loadMore={loadMore} isLoading={isLoading} />
      )}
    </>
  );
}

//   async componentDidUpdate(prevProps, prevState) {
//     const { searchNameImg, currentPage, isLoading } = this.state;

//     if (isLoading && prevState.currentPage !== currentPage) {
//       try {
//         const getImages = await fetchImages(searchNameImg, currentPage);

//         this.setState(prevState => ({
//           itemImg: [...prevState.itemImg, ...getImages.hits],
//           isLoading: false, // Устанавливаем isLoading в false после успешной загрузки
//         }));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
