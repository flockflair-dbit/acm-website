reportData = [

]

url="https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20reports(orderBy%3Ayear_DESC)%7B%0A%20%20%20%20%0A%20%20%09year%0A%20%20%20%20files%7B%0AfileName%0A%20%20%20%20size%0A%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
async function getEventDataFromServer(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.reports);
   
    for(var i=0;i<data.length;i++){
        reportData.push(data[i])
    }
    // reportData.reverse();
    // console.log(reportData)
}
getEventDataFromServer()


