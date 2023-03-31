import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/common.scss'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
import {wrapper} from '../store'

function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
    },[]);
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)