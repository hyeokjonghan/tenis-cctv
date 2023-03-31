import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    reservationList: {
        data:[]
    },
    page:1,
    reservationDate:new Date(),
    reservationName:"",
    state:null
}

const reservationSlice = createSlice({
    name:"reservationList",
    initialState,
    reducers: {
        setReservationList: (state, action) => {
            state.reservationList = action.payload
        },
        setReservationSearchOption: (state, action) => {
            if(action.payload.reservationName) {
                state.reservationName = action.payload.reservationName
            }
            
            if(action.payload.reservationDate) {
                state.reservationDate = action.payload.reservationDate
            }

            if(action.payload.page) {
                state.page = action.payload.page
            }

            if(action.payload.state) {
                state.state = action.payload.state
            } else {
                state.state = null
            }

        }
    }
})

// 안해도 되나 ?
export const {setReservationList, setReservationSearchOption} = reservationSlice.actions
export default reservationSlice.reducer