import DefaultPager from "@/components/pager"
import DefaultLayout from "@/layouts/defaultLayout"
import style from '@/styles/cms/reservation/list.module.scss'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import axiosInstance from "@/lib/axiosInstance"
import { useDispatch, useSelector } from "react-redux"
import reservationList, * as reservationAction from '@/store/modules/reservationList'

export default function ReservationListPage() {
    const router = useRouter();
    const dispatch = useDispatch()
    const reservationList = useSelector(({ reservationList }) => reservationList)
    const [reservationDate, setReservationDate] = useState(reservationList.reservationDate)
    const [searchReservationName, setSearchReservationName] = useState(reservationList.reservationName)
    const [searchState, setSearchState] = useState(reservationList.state?reservationList.state:3)

    const handleSearchReservationName = (event) => {
        setSearchReservationName(event.target.value)
    }

    const handleSearchState = (event) => {
        setSearchState(event.target.value)
    }

    useEffect(() => {
        searchReservation()
    }, [reservationList.page, reservationList.reservationName, reservationList.reservationDate, reservationList.state])

    const searchReservation = () => {
        axiosInstance.get('/api/reservation/list', { params: {
            page:reservationList.page,
            reservation_name:reservationList.reservationName,
            state:reservationList.state,
            reservation_date:reservationList.reservationDate.toJSON().slice(0, 10)
        } }).then((result) => {
            dispatch(reservationAction.setReservationList(result.data))
        })
    }

    const setReservationDateEvent = (date) => {
        setReservationDate(date)
    }

    const movePage = (page) => {
        dispatch(reservationAction.setReservationSearchOption({ page: page }))
    }

    const clickSearchBtn = () => {
        const searchOption = { reservationName: document.getElementById('inputReservationName').value, reservationDate: reservationDate, page:1 }
        if (document.getElementById('inputReservationState').value !== '3') {
            searchOption.state = document.getElementById('inputReservationState').value
        } else {
            searchOption.state = null
        }
        
        dispatch(reservationAction.setReservationSearchOption(searchOption))
    }

    const searchEnter = (e) => {
        if (e.keyCode === 13) {
            clickSearchBtn()
        }
    }

    const swithReservationState = (state) => {
        switch(state) {
            case '0':
                return '영상 요청 대기'
                break;
            case '1':
                return '영상 요청 완료'
                break;
            case '2':
                return '영상 다운 완료'
                break;
            default:
                return ''
                break;
        }
    }

    const switchReservationBtn = (state) => {
        switch(state) {
            case '0':
                return <>
                    <button className="btn btn-warning">영상요청</button>
                </>
                break;
            case '1':
                return <>
                    <button className="btn btn-success">영상다운</button>
                </>
                break;
            case '2':
                return <>
                    <button className="btn btn-success">영상다운</button>
                </>
                break;
            default:
                return ''
                break;
        }
    }

    const deleteReservation = (reservationNo) => {
        if(confirm('정말 삭제 하시겠습니까?')) {
            axiosInstance.delete(`/api/reservation/delete/${reservationNo}`).then((response) => {
                alert('삭제 되었습니다.')
                searchReservation()
            }).catch((error) => {
                alert('오류가 발생하였습니다.')
            })
        }
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
                                    <DatePicker dateFormat="yyyy-MM-dd" className="form-control" selected={reservationDate} onChange={date => setReservationDateEvent(date)}></DatePicker>
                                </td>
                            </tr>
                            <tr>
                                <th className="table-dark">예약자명</th>
                                <td className="table-light">
                                    <input type="text" className="form-control" id="inputReservationName" value={searchReservationName} onKeyUp={searchEnter} onChange={handleSearchReservationName}></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="table-dark">상태</th>
                                <td className="table-light">
                                    <select className="form-control" id="inputReservationState" value={searchState} onChange={handleSearchState}>
                                        <option value={3}>전체</option>
                                        <option value={0}>영상요청대기</option>
                                        <option value={1}>영상요청완료</option>
                                        <option value={2}>영상다운완료</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="table-light">
                                    <button className="btn btn-success" onClick={clickSearchBtn}>검색</button>
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
                                <th>시작시간</th>
                                <th>종료시간</th>
                                <th>영상 상태</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            
                            reservationList.reservationList.data.length > 0 ? reservationList.reservationList.data.map((item) => {
                                return <>
                                    <tr className="table-secondary" key={item.reservation_no}>
                                        <td>{item.reservation_date}</td>
                                        <td>{item.reservation_name}</td>
                                        <td>{item.reservation_start_time}</td>
                                        <td>{item.reservation_end_time}</td>
                                        <td>{swithReservationState(item.state)}</td>
                                        <td>
                                            <div className={style.tableBtnWrap}>
                                                {switchReservationBtn(item.state)}
                                                <button className="btn btn-danger" onClick={() => deleteReservation(item.reservation_no)}>삭제</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            }):<>
                                <tr className="table-secondary">
                                    <td colSpan={6}>검색 결과가 없습니다.</td>
                                </tr>
                            </>
                            }

                        </tbody>
                    </table>
                </div>
                <div className={style.pagerWrap}>
                    <DefaultPager pagerInfo={reservationList.reservationList} clickEvent={movePage}></DefaultPager>
                </div>
            </DefaultLayout>

        </div>
    </>

}