import type { report } from '../types'
import FileBox from "./FileBox"

interface AnnualReportProps {
    report: report,
    title: string
}

const AnnualReport: React.FC<AnnualReportProps> = ({ report, title }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card-box">
                        <div className="row">
                            <div className="col-md-12 heading-bx left">
                                <h2 className="title-head text-uppercase">{title}<span> Reports</span>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            {report.files.map((file, index) => {
                                return (
                                    <div className="col-lg-3 col-xl-2 col-6" key={index} >
                                        <FileBox file={file} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnualReport