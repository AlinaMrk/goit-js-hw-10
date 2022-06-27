const BASE_URL = 'https://restcountries.com/v3.1/name'
const searchParams = 'capital,flags,languages,name,population';
function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?fields=${searchParams}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};
export { fetchCountries };
