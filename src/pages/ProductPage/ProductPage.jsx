import { useEffect, useState } from "react";
import {
  HeaderAndFooter,
  HeaderAndFooterContainer,
} from "../../components/Layouts/HeaderAndFooter.jsx";
import { RelatedProducts } from "./Components/RelatedProducts.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  getDonationById,
} from "../../services/donationServices.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useUser } from "../../hooks/useUser.js";
import { useFavorites } from "../../contexts/FavoritesContext.jsx";
import RequestDonationModal from "./RequestDonationModal .jsx";

export function ProductPage() {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { data } = useUser();
  const idUser = data?.user?._id;

  const { toggleFavorite, isFavorite} = useFavorites();
  const [isFavorited, setIsFavorited] = useState(isFavorite(id));

  //Modal de Eu quero!!
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  // Função para atualizar a imagem principal ao clicar em uma miniatura
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
 

  function changeFavorite(){
    toggleFavorite(isFavorited, idUser,id); 
    setIsFavorited(!isFavorited);
  }


  useEffect(() => {
    const fetchDonationsIdData = async () => {
      try {
        const data = await getDonationById(id);
        setProduct(data?.donations);
        setImages(data?.donations?.image);
        setMainImage(data?.donations?.image[0]);
      } catch (error) {
        console.error("Erro ao buscar doações:", error);
      }
    };

    fetchDonationsIdData();
  }, []);

  useEffect(() => {
    setIsFavorited(isFavorite(id));
  }, [product]);

  if (!product) {
    return (
      <HeaderAndFooter>
        <HeaderAndFooterContainer>
          <div className="flex flex-col items-center  w-screen h-screen contrast:bg-custom-black">
            <img
              src="/error404.svg"
              alt="Error"
              className="w-[400px] h-[400px]"
            />
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <span className="font-poppins text-3xl font-semibold">404</span>
                <span className="font-poppins text-2xl text-texto-infor">
                  Produto não encontrado!
                </span>
              </div>

              <Link to="/">
                <button className="bg-white text-azul-claro flex items-center justify-center px-4 gap-2 py-2 rounded-md shadow-md tracking-wide border  border-gray-300 cursor-pointer hover:bg-azul-claro hover:text-white contrast:bg-custom-yellow contrast:text-custom-black contrast:hover:bg-white">
                  <BsFillHouseDoorFill /> IR PARA PÁGINA INICIAL
                </button>
              </Link>
            </div>
          </div>
        </HeaderAndFooterContainer>
      </HeaderAndFooter>
    );
  }

  return (
    <HeaderAndFooter>
      <HeaderAndFooterContainer className="contrast:bg-custom-black">
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 bg-white shadow-lg">
          {/* Título do Produto */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center">
            {product?.productName || "Não definido"}
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Imagens do Produto */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
              {/* Imagem Principal */}
              <img
                src={mainImage}
                alt="Produto principal"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />

              {/* Miniaturas */}
              <div className="flex gap-2 mt-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className={`w-12 h-12 md:w-16 md:h-16 object-cover cursor-pointer border-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 ${
                      mainImage === image
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleThumbnailClick(image)} // Atualiza a imagem principal
                  />
                ))}
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-sm md:text-base text-gray-600 mb-8">
                {product?.description || "Não definido"}
              </p>

              {/* <a href="#" className="text-sm text-teal-600 underline mb-6">Saber mais sobre o produto</a> */}

              {/* Estado do Produto e Favoritar */}
              <div className="flex items-center mb-6">
                <p className="text-sm font-medium text-gray-800 mr-4">
                  Condição:
                </p>
                <div className="flex items-center gap-4 md:gap-8">
                  <label className="flex items-center gap-2">
                  <div className=" flex items-center justify-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          product?.condition === "novo"
                            ? "bg-red-600 contrast:border contrast:border-custom-black contrast:bg-custom-yellow"
                            : "bg-gray-300"
                        }`}
                      ></div> 
                      <span className="text-nowrap">Novo</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2">
                  <div className=" flex items-center justify-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          product?.condition === "usado"
                            ? "bg-red-600 contrast:border contrast:border-custom-black contrast:bg-custom-yellow"
                            : "bg-gray-300"
                        }`}
                      ></div> 
                      <span className="text-nowrap">Usado</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2">
                    <div className="flex items-center justify-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          product?.condition === "precisa de reparos"
                            ? "bg-red-600 contrast:border contrast:border-custom-black contrast:bg-custom-yellow"
                            : "bg-gray-300"
                        }`}
                      ></div> 
                      <span className="text-nowrap">Com Defeito</span>
                    </div>
                    
                  </label>

                  {/* Ícone de Favoritar */}
                  <button
                    className="ml-4 focus:outline-none"
                    onClick={changeFavorite}
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`text-2xl md:text-3xl ${
                        isFavorited ? "text-red-500 contrast:text-custom-yellow" : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col gap-4 mt-8">
                <button onClick={handleOpenModal} className="w-full py-2 md:py-3 bg-red-600 hover:bg-red-500 text-white rounded-md text-sm md:text-lg transition-colors duration-300 contrast:bg-custom-yellow contrast:text-custom-black contrast:border contrast:border-custom-black contrast:hover:bg-white">
                  EU QUERO!
                </button>
                {/* Chamada do modal com o ID do produto e o estado de abertura */}
                  <RequestDonationModal 
                    productId={id} 
                    open={isModalOpen} 
                    productName={product?.productName}
                    idUserLogado={data?.user?.ID}
                    idUserDonor={product?.donor?.ID}
                    onClose={handleCloseModal} 
                  />
              </div>
            </div>
          </div>

          {/* Produtos Relacionados */}
          <div className="mt-12">
            <RelatedProducts />
          </div>
        </div>
      </HeaderAndFooterContainer>
    </HeaderAndFooter>
  );
}
