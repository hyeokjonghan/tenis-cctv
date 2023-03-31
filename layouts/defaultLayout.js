import MenuList from "@/components/menu";
import { useEffect } from "react";
import { useRouter } from "next/router"
import style from "@/styles/defaultLayout.module.scss"
import axiosInstance from "@/lib/axiosInstance";

export default function DefaultLayout({children}) {
    const router = useRouter()
    useEffect(() => {
        axiosInstance.post('api/health').catch((error) => {
            alert('로그인을 먼저 진행해 주세요.')
            router.push('/')
        })
    },[])

    const logoutEvent = () => {
        localStorage.removeItem('accessToken')
        router.push('/')
    }

    return <>
        <div className={style.pageWrap}>
            <div className={style.menuWrap}>
                <MenuList></MenuList>
            </div>
            <div className={style.contentWrap}>
                <div className={style.conetntHeader}>
                    <div className={`container-xl ${style.conetntHeaderItem}`}>
                        <i className="bi bi-door-open" onClick={logoutEvent}></i>
                    </div>
                </div>
                <div className={`${style.content} container-xl`}>
                    {children}
                </div>
            </div>
        </div>
    </>
}