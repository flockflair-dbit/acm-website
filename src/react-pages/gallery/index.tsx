import fs from "node:fs/promises"
import { getImages } from "./utils"
import ImageCard from "./components/ImageCard";

const images = await getImages();

const Gallery: React.FC<{}> = () => {

    return (
        <div className="content-block">
        <div className="section-area section-sp1 gallery-bx">
            <div className="container">
                <div className="clearfix">
                    <div
                        id="masonry"
                        className="ttr-gallery-listing magnific-image row"
                        style={{listStyle: 'none'}}
                    >
                        {images.map((image, key) => <ImageCard image={image} key={key}/>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gallery
