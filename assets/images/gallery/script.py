import os

fileList = []
for subdir, dirs, files in os.walk('./'):
    for file in files:
      fileList.append(file)

fileList.sort(key=os.path.getctime, reverse=True)
fileList.remove('script.py')
print(fileList)