courseData=[

]
url="https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20courses(orderBy%3AeventDate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20youtubeID%0A%20%20%20%20taughtBy%0A%20%20%20%20eventDate%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%7D%0A%7D"
async function getEventDataFromServer(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.courses);
    // console.log(data);
   
    for(var i=0;i<data.length;i++){
        courseData.push(data[i])

      

        courseData[i]["eventDate"]=(courseData[i]["eventDate"].replaceAll("-", "/"));

    }
    // courseData.reverse();
    // console.log(courseData)
}
getEventDataFromServer()


