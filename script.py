import os


def create_gallery_images_js():
  # creates js file which has an array of all images in the images/gallery folder used in the gallery page
  
  
  
  fileList = []
  for subdir, dirs, files in os.walk('./assets/images/gallery'):
      for file in files:
        fileList.append(file)

  file1 = open("./assets/js/galleryData.js","w+")
  file1.write("var galleryList = [")
  for i in fileList:
    file1.write('"'+i+'",')
  file1.write("]")
  file1.close()




create_gallery_images_js()