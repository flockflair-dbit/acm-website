import type { CourseData } from "../components/course/type"


// This function fetches the courses from GraphCMS
export const getCourses = async (): Promise<CourseData[]> => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20courses(orderBy%3AeventDate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20youtubeID%0A%20%20%20%20taughtBy%0A%20%20%20%20eventDate%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%7D%0A%7D"
    const res = await (await fetch(url)).json()
    let courses: CourseData[] = res.data.courses
    courses.forEach(course => course.eventDate = course.eventDate.replaceAll("-", "/"))
    return courses
}