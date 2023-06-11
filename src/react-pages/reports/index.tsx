import './styles.css'
import type { report } from './types'
import { NavPill, EventReport, AnnualReport } from './components'
import { useEffect, useState } from 'react'

const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20reports(orderBy%3Ayear_DESC)%7B%0A%20%20%20%20%0A%20%20%09year%0A%20%20%20%20files%7B%0AfileName%0A%20%20%20%20size%0A%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"

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

const fetchReports = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data.data.reports
}

const Reports = () => {
    const [reports, setReports] = useState<report[]>([])

    useEffect(() => { fetchReports().then(reports => setReports(reports)) }, [])

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