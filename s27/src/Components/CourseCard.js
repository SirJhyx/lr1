import {useState, useEffect} from 'react';
import {Container, Row, Col, Card, button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}){
    //courseProp - is an object 

    //destructure an object
    const {name, desscription, price} = courseProp
    
    /*
        Syntax: 
        const [getter,setter] = useState(initialGetterValue)
    */

    const [count,setCount] = useState(0); //this is the initial value for the number of seats in the booking system.
    const [seats,setSeats] = useState(0); //this is the inital value on the number of seats left
}