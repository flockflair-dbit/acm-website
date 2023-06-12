import type { CourseData } from "../components/course/type"
import type { report } from "../react-pages/reports/types"
import type { projectData } from "../react-pages/e-xhibition/types"

// This function fetches the courses from GraphCMS
export const getCourses = async (): Promise<CourseData[]> => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20courses(orderBy%3AeventDate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20youtubeID%0A%20%20%20%20taughtBy%0A%20%20%20%20eventDate%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%7D%0A%7D"
    const res = await (await fetch(url)).json()
    let courses: CourseData[] = res.data.courses
    courses.forEach(course => course.eventDate = course.eventDate.replaceAll("-", "/"))
    return courses
}

export const getReports = async () => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20reports(orderBy%3Ayear_DESC)%7B%0A%20%20%20%20%0A%20%20%09year%0A%20%20%20%20files%7B%0AfileName%0A%20%20%20%20size%0A%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
    const res = await fetch(url)
    const json = await res.json()
    const data: report[] = json.data.reports
    return data
}

export const getProjects = async () => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20projects(orderBy%3ApublishedAt_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20developerName%0A%20%20%20%20videoLink%0A%20%20%20%20projectLink%0A%20%20%20%20publishedAt%0A%20%20%20%20slug%0A%20%20%7D%0A%7D"
    const res = await fetch(url)
    const json = await res.json()
    const data: projectData[] = json.data.projects
    return data
}