import axios from "axios";


const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2MxZGZlMGIwNWI2OGI0MzczMTZhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk5ODI5NCwiZXhwIjoxNjQ5MjU3NDk0fQ.i2Xkp4HHS97fwZyIyQ2x_ldiUZJA9gFF48iP6lcWezc"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:TOKEN}
});
