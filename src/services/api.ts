import axios from "axios";

const api = axios.create({
    baseURL: "https://ethiopian-names-explorer-backend.vercel.app",
    // baseURL: "http://localhost:4000", // Use this for local development
    timeout: 10000, // Set a timeout of 10 seconds
    headers: {
        "Content-Type": "application/json"
    },
})

// Name API
export const getTopCityNames = async (location: string, limit: number) =>
    await api.get(`/api/public_name/top-names-cities?location=${location}&limit=${limit}`).then(response => response.data); // It returns the frequency of top names in a given location
export const getTopNames = async () => await api.get('/api/public_name/top-names').then(response => response.data); // Gets the top 10 names nationwide
export const searchName = async (name: string, page: Number, city: string) =>
    await api.get(`/api/public_name/search-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a name and returns its frequency in diiferent locations
export const countUniqueNames = async () =>
    await api.get('/api/public_name/unique-names').then(response => response.data); // Returns the total number of unique names in the database
export const countNamesByLocation = async (location: string) =>
    await api.get(`/api/public_name/count-names?location=${location}`).then(response => response.data); // Returns the total number of unique names in a given location
export const rareName = async (page: Number, city: string) =>
    await api.get(`/api/public_name/rare-names?page=${page}&city=${city}`).then(response => response.data)

// City Names API
export const getRegionsFrequency = async () =>
    await api.get(`/api/public_city/region-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide
export const getCityFrequency = async () =>
    await api.get(`/api/public_city/city-frequency`).then(response => response.data); // Returns the frequency of top cities nationwide

// Father Names API
export const searchFName = async (name: string, page: Number, city: string) =>
    await api.get(`/api/public_fname/search-father-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a father name and returns its frequency in diiferent locations
export const getTopCityFatherNames = async (location: string, limit: number) =>
    await api.get(`/api/public_fname/top-father-names-cities?location=${location}&limit=${limit}`).then(response => response.data);
export const getTopFNames = async () => await api.get('/api/public_fname/top-names').then(response => response.data); // Gets the top 10 first names nationwide
export const rareFatherName = async (page: Number, city: string) =>
    await api.get(`/api/public_fname/rare-names?page=${page}&city=${city}`).then(response => response.data)

//Grand Father Names API
export const searchGFName = async (name: string, page: Number, city: string) =>
    await api.get(`/api/public_gfname/search-grandfather-name?name=${name}&page=${page}&city=${city}`).then(response => response.data); // Searches for a grandfather name and returns its frequency in diiferent locations
export const getTopCityGrandFatherNames = async (location: string, limit: number) =>
    await api.get(`/api/public_gfname/top-grand-father-names-cities?location=${location}&limit=${limit}`).then(response => response.data);
export const getTopGFNames = async () => await api.get('/api/public_gfname/top-names').then(response => response.data);
export const rareGrandFatherName = async (page: Number, city: string) =>
    await api.get(`/api/public_gfname/rare-names?page=${page}&city=${city}`).then(response => response.data)