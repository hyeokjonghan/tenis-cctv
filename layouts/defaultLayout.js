import MenuList from "@/components/menu";
import { useEffect } from "react";
import { useRouter } from "next/router"
import style from "@/styles/defaultLayout.module.scss"

export default function DefaultLayout({children}) {
    const router = useRouter()
    useEffect(() => {
        // login health check, false시 login 페이지로 이동
    },[])
    return <>
        <div className={style.pageWrap}>
            <div className={style.menuWrap}>
                <MenuList></MenuList>
            </div>
            <div className={style.contentWrap}>
                <div className={style.conetntHeader}>헤더라네</div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    </>
}