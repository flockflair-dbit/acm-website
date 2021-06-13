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


url="https://api-eu-central-1.graphcms.com/v2/ckpuxxcyxahs501wk7lu1epam/master?query=%7B%0A%20%20events%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20blog%20%7B%0A%20%20%20%20%20%20raw%0A%20%20%20%20%20%20html%0A%20%20%20%20%20%20markdown%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%20%20images%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20height%0A%20%20%20%20%20%20width%0A%20%20%20%20%20%20size%0A%20%20%20%20%20%20mimeType%0A%20%20%20%20%7D%0A%20%20%20%20slug%0A%20%20%20%20thumbnail%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%20%20height%0A%20%20%20%20%20%20width%0A%20%20%20%20%20%20size%0A%20%20%20%20%20%20mimeType%0A%20%20%20%20%7D%0A%20%20%20%20date%20%0A%20%20%20%20month_name%0A%20%20%20%20date_number%0A%20%20%7D%0A%7D"

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
           title:curr.title,
           imgSrc:"assets/images/event/flashposter.jpg",
           slug:curr.slug,
           fullDate:curr.date,
           date:curr.date_number,
           month:curr.month_name
        
        }
        eventData.push(temp)
        // console.log(curr,temp)
    }
   

    console.log(eventData,curr)
}
getEventDataFromServer()