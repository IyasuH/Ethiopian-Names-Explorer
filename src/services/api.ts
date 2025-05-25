import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:4000",
})

export const getNameFrequency = (location: string) =>
    api.get(`/api/public_name/name-frequency?location=${location}`); // It returns the frequency of top names in a given location
export const getTopNames = () => api.get('/api/public_name/top-names'); // Gets the top 10 names nationwide
export const searchName = (name: string) =>
    api.get(`/api/public_name/search-name?name=${name}`); // Searches for a name and returns its frequency in diiferent locations
export const countUniqueNames = () =>
    api.get('/api/public_name/unique-names').then(response => response.data); // Returns the total number of unique names in the database
export const countNamesByLocation = (location: string) =>
    api.get(`/api/public_name/count-names?location=${location}`); // Returns the total number of unique names in a given location


export const getRegionsFrequency = () =>
    api.get(`/api/public_city/region-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide

export const getCityFrequency = () =>
    api.get(`/api/public_city/city-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide

export const getFNameFrequency = (location: string) =>
    api.get(`/api/public_fname/name-frequency?location=${location}`); // Returns the frequency of top first names in a given location
export const getTopFNames = () =>
    api.get('/api/public_fname/top-names'); // Gets the top 10 first names nationwide