import { useState, useEffect } from 'react';
import { dogBreeds } from '../../dogBreeds';
import { filterDogs } from '../../dogApiUtil';
import FeedIndex from '../feedIndex';
import Select from 'react-select';


export default function SearchBar(props) {

  const [selectedDogBreeds, setSelectedDogBreeds] = useState([]);
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [resultIds, setResultIds] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



  const handleSortChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
  };

  const options = dogBreeds.map((breed) => ({
    label: breed,
    value: breed,
  }));
  const parseSelections = (arrayOfObjects) => {
    const selections = [];
    for (const obj of arrayOfObjects) {
      selections.push(obj.value)
    }
    return selections;
  }

  const handleSelectChange = (selectedOptions) => {

    setSelectedDogBreeds(selectedOptions);
  };

  const handleMinAgeChange = (event) => {
    setMinAge(event.target.value);
  };

  const handleMaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };

  const handleSubmit = async (e, next = "", prev = "") => {
    e.preventDefault();
  

    try {
      const parsedBreeds = parseSelections(selectedDogBreeds)

      const res = await filterDogs(parsedBreeds, minAge, maxAge, sortOrder, next, prev);
      
      setResultIds(res.resultIds)
      setTotalResults(parseInt(res.total))
      if (res.next) {
        setNextPage(res.next)
      }
      if (res.prev) {
        setPrevPage(res.prev)
      }


    } catch (error) {
      alert(error)
    }

  }



  return (
    <div>

      <nav className="search-bar">
        <form action="" className="search-bar__form" onSubmit={handleSubmit}>
          <h1 id="search-bar__title">Tell Us About Your Ideal Pup!</h1>
          <Select
            isMulti
            options={options}
            value={selectedDogBreeds}
            onChange={handleSelectChange}
            placeholder="Select dog breeds or start typing..."
          />
          <div className="age-range">
            <label>Min Age:
              <input
                type="number"
                value={minAge}
                onChange={handleMinAgeChange}
                placeholder="Min Age"
                min="0"
              />
            </label>
            <label>Max Age:
              <input
                type="number"
                value={maxAge}
                onChange={handleMaxAgeChange}
                placeholder="Max Age"
              />
            </label>
            <div className="order">

              <h2>Order results by Breed:</h2>
              <label>
                <input
                  type="radio"
                  value="asc"
                  checked={sortOrder === 'asc'}
                  onChange={handleSortChange}
                />
                Ascending
              </label>
              <label>
                <input
                  type="radio"
                  value="desc"
                  checked={sortOrder === 'desc'}
                  onChange={handleSortChange}
                />
                Descending
              </label>
            </div>
          </div>
          <div>
          </div>
          <button className="submit">submit!</button>
        </form>
      </nav>
      <FeedIndex totalResults={totalResults} resultIds={resultIds} nextPage={nextPage} prevPage={prevPage} handleSubmit={handleSubmit} selectedDogBreeds={selectedDogBreeds} setPageCount={setPageCount} pageCount={pageCount} />
    </div>
  )
}
