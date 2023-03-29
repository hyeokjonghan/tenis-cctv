import { useRouter } from "next/router"
import style from "@/styles/cms/menu.module.scss"
import Link from "next/link";
export default function MenuList() {
    const router = useRouter()
    const menuList = [
        {
            name:"관리자 관리",
            icon:'',
            key:1,
            menu:[
                {
                    name:"관리자 관리",
                    path:"/cms/user",
                    icon:""
                }
            ]
        },
        {
            name:"예약 내역",
            icon:'',
            key:2,
            menu: [
                {
                    name:"예약 내역 관리",
                    path:"/cms/reservation",
                    icon:""
                },
                {
                    name:"예약 내역 등록",
                    path:"/cms/reservation/append",
                    icon:""
                }
            ]
        }
    ]

    const printMenuJsx = menuList.map((group) => {
        return <>
            <div key={group.key}>
                <h4 className={style.menuGroupTitle}>{group.name}</h4>
                <ul>
                    {group.menu.map((menu) => {
                        return <>
                            <li key={menu.path}><Link href={menu.path}>{menu.name}</Link></li>
                        </>
                    })}
                </ul>
            </div>
            
        </>
    })
    return <>
        <div className={style.menuWrap}>
            <div className={style.menuListWrap}>
                {printMenuJsx}
            </div>
        </div>
    </>
}