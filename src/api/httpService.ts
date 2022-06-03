import Axios from 'axios';

export default function HttpService() {
  const headers = {
    'Content-Type': 'application/json',
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
          console.log(err);
          throw err;
        });
    },
  };
}
