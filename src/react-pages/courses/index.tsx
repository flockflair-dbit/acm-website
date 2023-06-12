import type { CourseData } from "../../components/course/type"
import { getCourses } from "../../utils/cmsData"
import CourseCard from "../../components/course/CourseCard"


const courses = await getCourses()

// This function maps the courses to the Course component
const courseBuilder = (courses: CourseData[]) => {
    if (courses.length == 0) {
        return (
            <div className="col-12 m-b30">
                <div className="cours-bx">
                    <div className="info-bx text-center">
                        <h5>Courses Coming Soon</h5>
                    </div>
                </div>
            </div>
        )
    }
    else
        return courses.map((course, index) =>
            <div className="col-md-6 col-lg-4 col-sm-6 m-b30">
                <CourseCard key={index} course={course} />
            </div>)
}


// This component is used to display all the courses
const Courses: React.FC<{}> = () => {

    return (
        <div className="content-block">
            <div className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-12">
                            <div className="row">
                                {courseBuilder(courses)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses