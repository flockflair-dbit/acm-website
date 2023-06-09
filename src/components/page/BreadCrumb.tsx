interface BreadCrumbProps {
    children: React.ReactNode;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ children }) => {
    return (
        <div className="breadcrumb-row">
            <div className="container">
                <ul className="list-inline">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb