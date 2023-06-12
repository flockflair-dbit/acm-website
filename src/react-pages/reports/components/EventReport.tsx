import type { report } from '../types'
import FileBox from "./FileBox"

interface EventReportProps {
    report: report,
    active: boolean
}

const EventReport: React.FC<EventReportProps> = ({ active, report }) => {
    return (
        <div className={"tab-pane fade" + (active ? " show active" : "")} id={`pills-${report.year}`}>
            <div className="row">
                {report.files.map((file, index) => {
                    return (
                        <div className="col-lg-4 col-xl-4 col-6" key={index}>
                            <FileBox file={file} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EventReport