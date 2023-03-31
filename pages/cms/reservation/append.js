import DefaultLayout from "@/layouts/defaultLayout";
import { useState } from "react";
import DatePicker from "react-datepicker"
import style from "@/styles/cms/reservation/append.module.scss"
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/router";

export default function VideoListPage() {
    const router = useRouter()
    const [reservationdate, setReservationDate] = useState(new Date())
    const reservationName = document.getElementById('inputReservationName')
    const reservationStartTime = document.getElementById('inputReservationStartTime')
    const reservationEndTime = document.getElementById('inputReservationEndTime')
    let checkEndAxios = false
    const setReservationDateEvent = (date) => {
        setReservationDate(date)
    }
    const appendReservation = () => {
        if(reservationName.value === '') {
            alert('예약자 명을 입력해 주세요.')
            reservationName.focus()
        } else if(reservationStartTime.value === '') {
            alert('시작시간을 입력해 주세요.')
            reservationStartTime.focus()
        } else if(reservationEndTime.value === '') {
            alert('종료시간을 입력해 주세요.')
            reservationEndTime.focus()
        } else {
            checkEndAxios = false
            if(!checkEndAxios) {
                axiosInstance.post('/api/reservation/append', {
                    reservation_date: reservationdate.toJSON().slice(0,10),
                    reservation_start_time: reservationStartTime.value+":00",
                    reservation_end_time: reservationEndTime.value+":00",
                    reservation_name:reservationName.value
                }).then((result) => {
                    checkEndAxios = true
                    alert('등록이 완료 되었습니다.')
                    router.push('/cms/reservation')
                }).catch((error) => {
                    checkEndAxios = true
                    if(error.response.data) {
                        alert(error.response.data)
                    } else {
                        alert('오류가 발생하였습니다. 관리자에게 문의해 주세요.')
                    }
                })
            }
        }
    }
    return <>
    <div>
        <DefaultLayout>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="table-dark">예약자명</th>
                            <td className="table-light"><input type="text" className="form-control" id="inputReservationName"></input></td>
                        </tr>
                        <tr>
                            <th className="table-dark">예약일자</th>
                            <td className="table-light">
                                <DatePicker dateFormat="yyyy-MM-dd" className="form-control" selected={reservationdate} onChange={date => setReservationDateEvent(date)}></DatePicker>
                            </td>
                        </tr>
                        <tr>
                            <th className="table-dark">시작시간</th>
                            <td className="table-light"><input type="time" className="form-control" id="inputReservationStartTime"></input></td>
                        </tr>
                        <tr>
                            <th className="table-dark">종료시간</th>
                            <td className="table-light"><input type="time" className="form-control" id="inputReservationEndTime"></input></td>
                        </tr>
                    </tbody>
                </table>
                
                <div className={style.btnWrap}>
                    <button className="btn btn-primary" onClick={appendReservation}>등록</button>
                </div>
            </div>
        </DefaultLayout>
    </div>
    </>
    
}