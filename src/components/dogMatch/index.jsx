import userEvent from "@testing-library/user-event";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDogs } from "../../dogApiUtil";
import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai";

export default function DogMatchPage(props) {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };



  useEffect(() => {
    const fetchSingleDog = async () => {
      if (!sessionStorage.currentUser) {
        navigate("/")
      } else {

        const dogMatch = await fetchDogs([dogId])
        setDog(dogMatch[0])
      }
    }
    fetchSingleDog();
  }, [dogId])



  return (
    <div className="dog-details">

      <AiFillHeart id="heart-id" />
      <div className="container">
        <AiOutlineArrowLeft onClick={handleGoBack} className="back-button" />
        <h1 className="title">Your Perfect Match!</h1>
      </div>

      {dog ? (
        <div className="dog-details-inner">
          <img src={dog.img} alt={dog.name} className="dog-image" />
          <div className="dog-info">
            <h1 className="dog-name title">{dog.name}</h1>
            <p className="dog-breed">
              <strong>Breed:</strong> {dog.breed}
            </p>
            <p className="dog-age">
              <strong>Age:</strong> {dog.age}
            </p>
            <p className="dog-zip-code">
              <strong>Zip Code:</strong> {dog.zip_code}
            </p>

          </div>
        </div>
      ) : (
        <div className="loading-container">
          <img src="./dog-image.png" alt="" className="loading-container__image" />

        </div>
      )}

    </div>
  )
}
