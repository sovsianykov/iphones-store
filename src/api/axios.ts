import Axios from "axios";

export default function HttpService() {
    // const token = 'fake.ass.token'

    const headers = {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${ token }`
    };

    return {
        GET: function (page: string) {
            console.log(page)
            return Axios.get(`${process.env.REACT_APP_BASE_URL}brands/apple-phones-48?page=${page}`, {
                headers,
            })
                .then((response) => {
                    return response;
                })
                .catch((err) => {
                    console.log(err)
                    throw err;
                });
        },
        POST: function (url: string, data: any) {
            return Axios.post(url, data, { headers })
                .then((response) => {
                    return response;
                })
                .catch((err) => {
                    throw err;
                });
        },
    };
}
