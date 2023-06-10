import { PageBanner, BreadCrumb } from "../components/page"

interface course {
    id: string,
    title: string,
    youtubeID: string,
    taughtBy: string,
    eventDate: string
}

// This function fetches the courses from GraphCMS
const getCourses = async (): Promise<course[]> => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20courses(orderBy%3AeventDate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20youtubeID%0A%20%20%20%20taughtBy%0A%20%20%20%20eventDate%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%7D%0A%7D"
    const res = await (await fetch(url)).json()
    let courses: course[] = res.data.courses
    courses.forEach(course => course.eventDate = course.eventDate.replaceAll("-", "/"))
    return courses
}

// This component is used to display a course
const Course: React.FC<{ course: course }> = ({ course }) => {
    return (
        <div className="col-md-6 col-lg-4 col-sm-6 m-b30">
            <div className="cours-bx">
                <a href={`https://www.youtube.com/watch?v=${course.youtubeID}`} target="_blank">
                    <div className="action-box">
                        <img src={`https://img.youtube.com/vi/${course.youtubeID}/mqdefault.jpg`} alt="Course Image" />
                        <button className="btn">{course.eventDate}</button>
                    </div>
                </a>
                <div className="info-bx text-center">
                    <h5><a href={`https://www.youtube.com/watch?v=${course.youtubeID}`} target="_blank">{course.title}</a></h5>
                    <span>{course.taughtBy}</span>
                </div>
            </div>
        </div>
    )
}

// This function maps the courses to the Course component
const courseBuilder = (courses: course[]) => {
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
        return courses.map((course, index) => <Course key={index} course={course} />)
}

const courses = await getCourses()

const Courses: React.FC<{}> = () => {
    return (
        < div className="page-content bg-white" >
            {/* inner page banner  */}
            < PageBanner title="Our Courses" background="/assets/images/banner/banner3.jpg" />
            {/* Breadcrumb row  */}
            < BreadCrumb >
                <li><a href="/">Home</a></li>
                <li>Our Courses</li>
            </BreadCrumb >
            {/* Breadcrumb row END  */}
            {/* inner page banner END  */}
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
        </div >
    )
}

export default Courses