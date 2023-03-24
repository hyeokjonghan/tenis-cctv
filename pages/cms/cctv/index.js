import DefaultLayout from "@/layouts/defaultLayout";
import style from '@/styles/cms/cctv/list.module.scss'
export default function CCTVListPage() {
    return <>
    <div>
        <DefaultLayout>
            <div className={style.listWrap}>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th>CCTV 위치</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <td>1</td>
                            <td><button className="btn btn-secondary">영상요청</button></td>
                        </tr>
                        <tr className="table-light">
                            <td>2</td>
                            <td><button className="btn btn-secondary">영상요청</button></td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </DefaultLayout>
    </div>
    </>
    
}