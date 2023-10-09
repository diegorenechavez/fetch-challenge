


export const fetchDogs = async (preferencesArray) => {
    //   debugger
    try {
        const response = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preferencesArray)
        });

        if (!response.ok) {

            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const filterDogs = async (breeds, ageMin, ageMax, sortDirection = 'asc', nextPage = "", prevPage = "", sortField = 'breed', from = '0') => {
    // debugger
    let queryParams = new URLSearchParams();


    queryParams.append('size', "25");
    queryParams.append('from', `${from}`)

    if (breeds && breeds.length > 0) {
        breeds.forEach(breed => queryParams.append('breeds', breed));
    }

    if (ageMin) {
        queryParams.append('ageMin', ageMin.toString());
    }

    if (ageMax) {
        queryParams.append('ageMax', ageMax.toString());
    }

    if (sortField) {
        const sortParam = `${sortField}:${sortDirection}`;
        queryParams.append('sort', sortParam);
    }

    const toggle = nextPage ? nextPage : queryParams

    const apiUrl = `https://frontend-take-home-service.fetch.com/dogs/search?${toggle.toString()}`;

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {

            throw Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const fetchMatch = async (arrayOfIds) => {

    try {
        const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/match", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arrayOfIds)
        });

        if (!response.ok) {

            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}


