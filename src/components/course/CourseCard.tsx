// This component is used to display a course

import type { CourseData } from "./type"

const CourseCard: React.FC<{ course: CourseData }> = ({ course }) => {
    return (
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
    )
}

export default CourseCard