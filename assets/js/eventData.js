eventData=[

    // {
    //     id:"0",
    //     imgSrc:"assets/images/event/flashposter.jpg",
    //     title:"Flash Workshop",
    //     slug:"1",
    //     content:``,
    //     fullDate:"20/06/2021",
    //     date:"26",
    //     month:"20/06/2021"
    // },
 

]


url="https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20events(orderBy%3Adate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20blog%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20date%0A%20%20%20%20month_name%20%0A%20%20%20%20thumbnail%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%7D%0A%20%20%20%20images%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
async function getEventDataFromServer(){
    const reps = await fetch(url);
    var data = await reps.json();
    data= (data.data.events);
    var curr=""
    for(i=0;i<data.length;i++){
        curr=data[i]
       temp={
           
           blogid:curr.id,
           content:curr.blog.html,
           contentRaw:curr.blog.text,
           title:curr.title,
           imgSrc:curr.thumbnail.url,
           slug:curr.slug,
           fullDate:curr.date,
           date:curr.date.slice(-2),
           month:curr.month_name ,
           footerImages:curr.images,
        
        }
        eventData.push(temp)
        // console.log(curr,temp)
    }
 

    // console.log(eventData,curr)
}
getEventDataFromServer()