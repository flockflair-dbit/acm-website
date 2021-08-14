courseData=[

]

url="https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=query%7B%0A%20%20courses%7B%0A%20%20%20%20title%2C%0A%20%20%20%20taughtBy%2C%0A%20%20%20%20date%2C%0A%20%20%20%20youtubeID%0A%20%20%7D%0A%7D"
async function getEventDataFromServer(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.courses);
    // console.log(data);
   
    for(var i=0;i<data.length;i++){
        courseData.push(data[i])
    }
    // reportData.reverse();
    console.log(courseData)
}
getEventDataFromServer()


