import Axios from "axios";

export default function HttpService() {
    // const token = 'fake.ass.token'

    const headers = {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${ token }`
    };

    return {
        GET: function (url: string) {
            return Axios.get(url, {
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
