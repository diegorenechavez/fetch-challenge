import { useEffect, useState } from "react";
import { fetchDogs } from "../../dogApiUtil";
import FeedIndexItem from "../feedIndexItem";
import { useNavigate } from "react-router-dom";
import MatchButton from "../matchButton";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"


export default function FeedIndex({ resultIds, nextPage, prevPage, handleSubmit, setPageCount, pageCount, totalResults }) {
    // const [dogIds, setDogIds] = useState(resultIds)
    const [dogs, setDogs] = useState([]);
    const navigate = useNavigate()



    useEffect(() => {
        const fetchMyDogs = async () => {
            if (!sessionStorage.currentUser) {
                navigate("/")
            } else {

                const res = await fetchDogs(resultIds);
                setDogs(res)
            }
        }
        fetchMyDogs()

    }, [resultIds])


    const toggleLoading = () => {
        if (dogs.length) {
            return (
                <div className="main-feed">
                    {dogs.map((dog) => <FeedIndexItem dog={dog} key={dog.id} />)}
                </div>
            )
        } else {
            return (
                <div className="loading-container">
                    <img src="/fetch-challenge/dog-image.png" alt="" className="loading-container__image" />
                    <h1 className="loading-container__title title">Dont Worry, once You tell us more, we will fill this area with pups!</h1>
                </div>
            )
        }
    }

    const numPages = () => {
        const numOfPages = Math.ceil(totalResults / 25)
        return numOfPages
    }

    const handlePagination = (e, nextString, prevString) => {
        if (nextString) {
            setPageCount(pageCount + 1)
            handleSubmit(e, nextPage, null)
        } else if (prevString || pageCount < 1) {


            setPageCount(pageCount - 1)

            handleSubmit(e, null, prevPage)
        }
        window.scrollTo(0, 300);
    }

    const toggleButtons = () => {
       
        if (totalResults > 25) {

            if (pageCount < numPages() && !(pageCount > 1)) {
                return (
                    <div className="browse-buttons">
                        < BsFillArrowRightCircleFill onClick={(e) => { handlePagination(e, nextPage, "") }} />
                    </div>
                )


            }


            else if (pageCount === numPages()) {
                return (
                    <div className="browse-buttons">
                        < BsFillArrowLeftCircleFill onClick={(e) => { handlePagination(e, "", prevPage) }} />
                    </div>
                )
            }
            else if (pageCount > 1 && pageCount !== numPages()) {
                return (
                    <div className="browse-buttons">
                        < BsFillArrowLeftCircleFill onClick={(e) => { handlePagination(e, "", prevPage) }} />
                        < BsFillArrowRightCircleFill onClick={(e) => { handlePagination(e, nextPage, "") }} />
                    </div>
                )
            }
        }
        return null
    }


    return (
        <section className="dog-index">
            <MatchButton />
        
            {toggleLoading()}
            {dogs.length &&
                toggleButtons()}


        </section>
    )
}
