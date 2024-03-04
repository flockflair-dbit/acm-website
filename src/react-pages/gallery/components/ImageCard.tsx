
const ImageCard: React.FC<{ image: string }> = ({image }) => {

    return (
<div className="action-card col-lg-3 col-md-4 col-sm-6 book">
    <div className="ttr-box portfolio-bx">
        <div className="ttr-media media-ov2 media-effect">
            <a href="javascript:void(0);">
                <img src={image} alt="" loading="lazy" decoding="async"/>
            </a>
            <div className="ov-box">
                <div className="overlay-icon align-m">
                    <a href={image} className="magnific-anchor" title="">
                        <i className="ti-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default ImageCard