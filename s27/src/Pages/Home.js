import {Fragment} from 'react';

/*components*/
import Banner from '../Components/Banner'
import Highlights from '../Components/Highlights'
import CourseCard from '../Components/CourseCard'

export default function Home(){
    return (
        <Fragment>
            <Banner />
            <Highlights />
            <CourseCard />
        </Fragment>
    )
}