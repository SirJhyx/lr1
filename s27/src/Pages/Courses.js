import courseData from '../Data/courseData'

/*components*/
import CourseCard from '../Components/CourseCard'

export default function Courses(){
    console.log(courseData);

    const courses = courseData.map (course => {
        return (
            <CourseCard key={course.id} courseProp={course} />
        )
    })

    return (
        <>
            {courses}
        </>
    )
}