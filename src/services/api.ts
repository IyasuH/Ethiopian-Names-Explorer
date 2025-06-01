import axios from "axios";

const api = axios.create({
    baseURL: "https://ethiopian-names-explorer-backend.onrender.com",
    // baseURL: "http://localhost:4000", // Use this for local development
})

// Name API
export const getTopCityNames = (location: string) =>
    api.get(`/api/public_name/top-names-cities?location=${location}`).then(response => response.data); // It returns the frequency of top names in a given location
export const getTopNames = () => api.get('/api/public_name/top-names').then(response => response.data); // Gets the top 10 names nationwide
export const searchName = (name: string, page: Number, city: string) =>
    api.get(`/api/public_name/search-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a name and returns its frequency in diiferent locations
export const countUniqueNames = () =>
    api.get('/api/public_name/unique-names').then(response => response.data); // Returns the total number of unique names in the database
export const countNamesByLocation = (location: string) =>
    api.get(`/api/public_name/count-names?location=${location}`); // Returns the total number of unique names in a given location

// City Names API
export const getRegionsFrequency = () =>
    api.get(`/api/public_city/region-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide

export const getCityFrequency = () =>
    api.get(`/api/public_city/city-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide

// Father Names API
export const searchFName = (name: string, page: Number, city: string) =>
    api.get(`/api/public_fname/search-father-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a father name and returns its frequency in diiferent locations

export const getFNameFrequency = (location: string) =>
    api.get(`/api/public_fname/top-father-names-cities?location=${location}`); // Returns the frequency of top first names in a given location
export const getTopFNames = () => api.get('/api/public_fname/top-names').then(response => response.data); // Gets the top 10 first names nationwide

//Grand Father Names API
export const searchGFName = (name: string, page: Number, city: string) => {
    api.get(`/api/public_gfname/search-grandfather-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a grandfather name and returns its frequency in diiferent locations
}

export const getTopGFNames = () => api.get('/api/public_gfname/top-names').then(response => response.data); // Returns the frequency of top first names in a given location