import os

fileList = []
for subdir, dirs, files in os.walk('./'):
    for file in files:
      fileList.append(file)
fileList.remove('script.py')
print(fileList)