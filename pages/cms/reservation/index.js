import DefaultPager from "@/components/pager"
import DefaultLayout from "@/layouts/defaultLayout"
import style from '@/styles/cms/reservation/list.module.scss'
import { useRouter } from "next/router"
import { useState } from "react"
import DatePicker from "react-datepicker"

export default function ReservationListPage() {
    const router = useRouter();
    const [reservationdate, setReservationDate] = useState(new Date())
    const [name, setName] = useState("")
    const [reservationList, setReservationList] = useState([])
    const [page, setReservationPage] = useState(1)
    
    const setNameEvent = (e) => {
        setName(e.target.value)
    }

    const setReservationDateEvent = (date) => {
        setReservationDate(date)
    }

    const setReservationPageEvent = (page) => {
        setReservationPage(page)
    }

    const searchReservation = () => {
        // axios 검색, 날짜, 이름, page로.. Store까지는 아직..
    }

    return <>
    <div>
        <DefaultLayout>
            <div className={style.searchWrap}>
                <table className={`table`}>
                    <tbody>
                    <tr>
                        <th className="table-dark">예약일자</th>
                        <td className="table-light">
                            <DatePicker dateFormat="yyyy-MM-dd" className="form-control" selected={reservationdate} onChange={date => setReservationDateEvent(date)}></DatePicker>
                        </td>
                    </tr>
                    <tr>
                        <th className="table-dark">예약자명</th>
                        <td  className="table-light">
                            <input type="text" className="form-control" onChange={setNameEvent}></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="table-light">
                            <button className="btn btn-success">검색</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={style.listWrap}>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th>예약일자</th>
                            <th>예약자명</th>
                            <th>예약 인원수</th>
                            <th>시작시간</th>
                            <th>종료시간</th>
                            <th>영상 관리 상태</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-secondary">
                            <td>2023.03.29</td>
                            <td>한혁종</td>
                            <td>4</td>
                            <td>14:00:00</td>
                            <td>14:30:00</td>
                            <td></td>
                            <td>
                                {/* <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal">영상요청</button> */}
                                <button className="btn btn-danger">영상요청</button>
                                <button className="btn btn-warning">영상요청 실패 - 재요청</button>
                                <button className="btn btn-secondary">영상요청중</button>
                                <button className="btn btn-success">영상다운</button>
                                <button className="btn btn-success">영상다운</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={style.pagerWrap}>
                <DefaultPager></DefaultPager>
            </div>
        </DefaultLayout>
        
    </div>
    </>
    
}