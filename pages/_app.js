import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/common.scss'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);
  return <Component {...pageProps} />
}
