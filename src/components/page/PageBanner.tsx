interface PageBannerProps {
    title: string;
    background: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, background }) => {
    return (
        <div className="page-banner ovbl-dark" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default PageBanner