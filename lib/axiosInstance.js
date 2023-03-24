import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.get('accessToken'),
    // 추가적인 header 값들을 넣을 수 있습니다.
  },
});

export default axiosInstance;