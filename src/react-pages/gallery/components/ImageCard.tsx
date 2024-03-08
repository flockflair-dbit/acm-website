
const ImageCard: React.FC<{ image: string, key:number }> = ({image, key }) => {

    return (
<div className="action-card col-lg-3 col-md-4 col-sm-6 book">
    <div className="ttr-box portfolio-bx">
        <div className="ttr-media media-ov2 media-effect">
            <a href="javascript:void(0);">
                {
                    key < 10? <img src={image} alt="" loading="lazy" decoding="async"/>:
                    <img src={image} alt=""/>
                }
                
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
