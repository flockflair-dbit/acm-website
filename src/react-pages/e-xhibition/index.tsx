import type { projectData, project } from "./types"
import { getProjects } from "../../utils/cmsData"

// Fn to copy link to clipboard
const Copy = (text: string) => { }

const buildProjects = (data: projectData[]) => {
    const projects = []
    for (const curr of data) {
        let temp: project = {
            id: curr.id,
            title: curr.title,
            developerName: curr.developerName,
            videoLink: curr.videoLink,
            projectLink: curr.projectLink,
            publishedAt: curr.publishedAt,
            date: "",
            month: "MON",
            year: "",
            slug: curr.slug,
            share: ""
        }
        temp.year = curr.publishedAt.slice(0, 4)
        temp.date = curr.publishedAt.slice(8, 10)
        const m = parseInt(curr.publishedAt.slice(6, 8))
        // temp.share = `${window.location.href}#${curr.slug}`
        switch (m) {
            case 1:
                temp.month = "Jan"
                break;

            case 2:
                temp.month = "Feb"
                break;

            case 3:
                temp.month = "Mar"
                break;

            case 4:
                temp.month = "Apr"
                break;

            case 5:
                temp.month = "May"
                break;

            case 6:
                temp.month = "Jun"
                break;

            case 7:
                temp.month = "Jul"
                break;

            case 8:
                temp.month = "Aug"
                break;

            case 9:
                temp.month = "Sep"
                break;

            case 10:
                temp.month = "Oct"
                break;

            case 11:
                temp.month = "Nov"
                break;

            case 12:
                temp.month = "Dec"
                break;

            default:
                break;
        }
        projects.push(<Project project={temp} />)
    }
    return projects
}

const Project: React.FC<{ project: project }> = ({ project }) => {
    return (
        <div className="col-md-6 col-lg-6 col-xl-6" id={project.slug}>
            <div className="recent-news blog-lg m-b40">
                <div className="action-box blog-lg">
                    <iframe style={{ width: "100%", height: "300px" }} src={project.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="info-bx">
                    <ul className="media-post">
                        <li><a href="#"><i className="fa fa-calendar"></i>{project.month} {project.date} {project.year}</a></li>
                        <li><a href="#"><i className="fa fa-user"></i>{project.developerName}</a></li>
                    </ul>
                    <h5 className="post-title"><a href="${project.projectLink}">{project.title}</a></h5>
                    <p className="post-desc">Developer: <a className="post-developer" href="#">{project.developerName}</a></p>
                    <a href={project.projectLink} target="_blank"><button className="btn btn-primary"><b>View Project</b></button></a>
                    <a href={project.share} className="share-button ml-1"><button className="btn btn-primary" onClick={() => Copy(project.share)}><b>Share</b></button></a>
                    <div className="post-extra">
                    </div>
                </div>
            </div>
        </div >
    )
}

const projects: projectData[] = await getProjects()

const EXhibition: React.FC<{}> = () => {
    return (
        <div className="content-block">
            <div className="section-area section-sp1">
                <div className="container">
                    <div className="row">
                        {buildProjects(projects)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EXhibition