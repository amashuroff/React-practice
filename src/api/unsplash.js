import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID oXVU16odb6dqRBP4m1xeImRQKgLmrJw_AUDL3Wd8U1E",
    }
});