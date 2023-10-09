
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function FeedIndexItem({ dog }) {
  const [like, setLike] = useState(false);
  const favs = JSON.parse(localStorage.getItem('myObject') || '{}');

  useEffect(() => {
    const myObject = JSON.parse(localStorage.getItem('myObject') || '{}');
    setLike(myObject[dog.id] === true);
  }, [dog.id]);

  useEffect(()=>{
    

  },[Object.values(favs).length])

  const handleLike = (dogId) => {

    const myObject = JSON.parse(localStorage.getItem('myObject') || '{}');

    if (myObject[dogId]) {
      delete myObject[dogId];
    } else {
      myObject[dogId] = true;
    }

    localStorage.setItem('myObject', JSON.stringify(myObject));

    setLike(myObject[dogId] === true);
  }

  const toggleHeart = (dogId) => {
    return like ? (
      <AiFillHeart id="heart-icon" onClick={() => handleLike(dogId)} />
    ) : (
      <AiOutlineHeart id="heart-icon" onClick={() => handleLike(dogId)} />
    );
  }

  return (
    <div className="card">
      <img src={dog.img} alt="" className="card__image" />
   
      <div className="card__dog-info">
        <h1 className="card__dog-name"> {dog.name}</h1>
        <h2 className="card__dog-breed"><span className="label">Breed:</span> {dog.breed}</h2>
        <h2 className="card__dog-age"><span className="label">Age:</span> {dog.age}</h2>
        <h2 className="card__dog-zip-code"><span className="label">zipcode:</span> {dog.zip_code}</h2>
      </div>

      {toggleHeart(dog.id)}
    </div>
  )
}
