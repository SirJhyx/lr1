import React, {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import UserContext from '../UserContext';

export default function Logout() {
    const {unsetUser, setUser} = useContext(UserContext)

    //Clear the localStorage of the user's info
    unsetUser();

    useEffect(() => {
        //set the user state back to its original value

        setUser({id:null, isAdmin:null})
    },[])

    return (
        <Navigate to = "/login/" />
    )
}