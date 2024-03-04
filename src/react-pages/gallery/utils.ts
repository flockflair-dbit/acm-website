import fs from "node:fs/promises"

const getImages = async () => {
    const galleryDir = `./public/assets/images/gallery/`;
    const subDirs = await fs.readdir(galleryDir);
    subDirs.reverse();
    let images: string[] = [];
    for (const subDir of subDirs) {
        const files = await fs.readdir(galleryDir + subDir);
        files.reverse();
        images = images.concat(
            files.map((file) => `/assets/images/gallery/${subDir}/${file}`)
        );
    }
    return images;
};

export { getImages }
