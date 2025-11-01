import axios from "axios";

export function getDemoData() {
    return axios.get("/api/info.0.json").then((response) => ({
        date: `${response.data.year}/${response.data.month}/${response.data.day}`,
        title: response.data.safe_title,
        img: response.data.img,
        alt: response.data,
    }));
}
