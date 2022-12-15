import React from 'react';

/*components*/
import Banner from '../Components/Banner'
import Highlights from '../Components/Highlights'
import CourseCard from '../Components/CourseCard'

export default function Home(){
    return (
        <React.Fragment>
            <Banner />
            <Highlights />
            <CourseCard />
        </React.Fragment>
    )
}