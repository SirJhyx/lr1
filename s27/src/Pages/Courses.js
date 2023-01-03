// import courseData from '../Data/courseData'

import {Fragment, useEffect, useState, useContext} from 'react';

import UserContext from '../UserContext';

/*components*/
import CourseCard from '../Components/CourseCard';
//CourseCard is the template for courses

import AdminView from '../Components/AdminView';
import UserView from '../Components/UserView';

export default function Courses(){
    
    const [courses, setCourses] = useState([]);

    const{user} = useContext(UserContext)

    const fetchData = () => {
        fetch("http://localhost:4000/api/courses/")
        .then (response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        }).catch(err => {
            console.log(err)
        })
        .then(data => {
            setCourses(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>
            {
                (user.isAdmin === true)?

                <AdminView courseData = {courses} fetchData={fetchData} />

                :

                <UserView courseData={courses}/>
            }
        </Fragment>
    )

    // const courses = courseData.map (course => {
    //     return (
    //         <CourseCard key={course.id} courseProp={course} />
    //     )
    // })

    // return (
    //     <>
    //         {courses}
    //     </>
    // )
}