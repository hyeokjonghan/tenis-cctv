import DefaultLayout from "@/layouts/defaultLayout";
import { useState } from "react";
import DatePicker from "react-datepicker"
import style from "@/styles/cms/reservation/append.module.scss"

export default function VideoListPage() {

    const [reservationdate, setReservationDate] = useState(new Date())
    
    return <>
    <div>
        <DefaultLayout>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light"><input type="text" className="form-control"></input></td>
                        </tr>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light">
                                <DatePicker dateFormat="yyyy-MM-dd" className="form-control" selected={reservationdate} onChange={date => setReservationDateEvent(date)}></DatePicker>
                            </td>
                        </tr>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light"><input type="text" className="form-control"></input></td>
                        </tr>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light"><input type="text" className="form-control"></input></td>
                        </tr>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light"><input type="text" className="form-control"></input></td>
                        </tr>
                    </tbody>
                </table>
                
                <div className={style.btnWrap}>
                    <button className="btn btn-primary">등록</button>
                </div>
            </div>
        </DefaultLayout>
    </div>
    </>
    
}