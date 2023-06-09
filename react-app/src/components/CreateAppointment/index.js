import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../../store/appointment";
import "./createAppointment.css"



const CreateAppointments = () => {
    const dispatch = useDispatch();
    const appointmentReducer = useSelector((state) => state.appointmentReducer)
    // const allAppointments = Object.values(appointmentReducer);

    console.log("<-------createAppopintment------->", appointmentReducer)


    useEffect(() => {
        dispatch(fetchAppointments())
    }, [dispatch])

    // const userTransactions = Object.values(allTransactions).filter(
    //     (transaction) => transaction.user_id === userId
    // );

    return (
        <>
            <h1>CreateAppointments</h1>
        </>
    )

}

export default CreateAppointments