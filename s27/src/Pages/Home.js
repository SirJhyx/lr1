import React from 'react';

/*components*/
import Banner from '../Components/Banner'
import Highlights from '../Components/Highlights'
// import CourseCard from '../Components/CourseCard'

export default function Home(){
    const data = {
        title: "Coding Bootcamp",
        content: "Opportunities for everyone remotely",
        destination:"/courses",
        label: "Enroll now!"
    }
    return (
        <React.Fragment>
            <Banner />
            <Highlights />
        </React.Fragment>
    )
}