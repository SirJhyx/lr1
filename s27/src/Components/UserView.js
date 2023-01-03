import {useState,useEffect,Fragment} from 'react';

import CourseCard from './CourseCard'

export default function UserView({courseData}){
    const [courses, setCourses] = useState({})

    useEffect(() => {
        const courseArr = courseData.map (course => {
            //check if the course is active
            if(course.isActive === true)
            {
                return (
                    //pass each element of the array to CourseCard

                    <CourseCard
                        courseProp={course}
                        key={course._id}
                    />

                )
            } else {
                return null
            }
        })

        setCourses(courseArr)
    }, [courseData])

    return (
        <Fragment>
            {courses}
        </Fragment>
    )
}