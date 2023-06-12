import './styles.css'
import type { report } from './types'
import { NavPill, EventReport, AnnualReport } from './components'
import { getReports } from '../../utils/cmsData'


const reports = await getReports()

const buildYears = (reports: report[]) => {
    let years = []
    for (let i = 0; i < reports.length; i++) {
        if (reports[i].year == 999 || reports[i].year == 888)
            continue
        else
            years.push(<NavPill year={reports[i].year} active={i == 0 ? true : false} key={i} />)
    }
    return years
}

const buildEventReports = (reports: report[]) => {
    return reports.map((report, index) => {
        return <EventReport report={report} active={index == 0 ? true : false} key={index} />
    })
}

const buildAnnualReports = (reports: report[]) => {
    return reports.filter(report => report.year == 999 || report.year == 888).map((report, index) => {
        return <AnnualReport report={report} title={report.year == 999 ? "ACM Annual" : "Teknack"} key={index} />
    })
}

const Reports = () => {

    return (
        <div className="content-block">
            <div className="section-area section-sp1">
                {/* Import Font Awesome */}
                <div className="content">
                    {/* Event Reports */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <div className="row">
                                        <div className="col-md-12 heading-bx left">
                                            <h2 className="title-head text-uppercase">ACM<span> Event Reports</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mb-5">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ justifyContent: "space-evenly" }}>
                                            {buildYears(reports)}
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="tab-content w-100" id="pills-tabContent">
                                            {buildEventReports(reports)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Annual & Teknack Reports */}
                    {buildAnnualReports(reports)}
                </div>
            </div>
        </div>
    )
}

export default Reports