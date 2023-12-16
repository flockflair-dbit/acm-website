import type { file } from "../types"

const FileBox: React.FC<{ file: file }> = ({ file }) => {
    return (
        <div className="file-man-box">
            <div className="file-img-box">
                <img
                    src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg"
                    alt="icon" />
            </div>
            <a href={`${file.url}`} target="_blank" className="file-download">
                <i className="fa fa-eye"></i>
            </a>
            <div className="file-man-title">
                <h5 className="mb-0 text-overflow">{file.fileName}</h5>
                <p className="mb-0"><small>{file.size / 1000} KB</small></p>
            </div>
        </div >
    )
}

export default FileBox