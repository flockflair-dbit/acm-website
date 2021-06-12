eventData=[

    {
        id:"1",
        imgSrc:"assets/images/event/pic1.jpg",
        title:"Education Autumn Tour 2019",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thn",
        fullDate:"20/06/2021",
        date:"26",
        month:"20/06/2021"
    },
    {
        id:"3",
        imgSrc:"assets/images/event/pic2.jpg",
        title:"Education Autumn Tour 2019",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thn",
        fullDate:"20/06/2021",
        date:"26",
        month:"20/06/2021"
    },
    {
        id:"4",
        imgSrc:"assets/images/event/pic3.jpg",
        title:"Education Autumn Tour 2019",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thn",
        fullDate:"20/06/2021",
        date:"26",
        month:"20/06/2021"
    },
    {
        id:"2",
        imgSrc:"assets/images/event/pic4.jpg",
        title:"Education Autumn Tour 2019",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thn",
        fullDate:"20/06/2021",
        date:"26",
        month:"20/06/2021"
    }
]


var allEvents=""

function generateEventBlock({date,month,fullDate,content,title,imgSrc}){
    return  `

    <li class="action-card col-lg-6 col-md-6 col-sm-12 happening">
                                    <div class="event-bx m-b30">
                                        <div class="action-box">
                                            <img src="${imgSrc}" alt="">
                                        </div>
                                        <div class="info-bx d-flex">
                                            <div>
                                                <div class="event-time">
                                                    <div class="event-date">${date}</div>
                                                    <div class="event-month">${month}</div>
                                                </div>
                                            </div>
                                            <div class="event-info">
                                                <h4 class="event-title"><a href="#">${title}</a></h4>
                                                <ul class="media-post">
                                                    <li><a href="#"><i class="fa fa-clock-o"></i> ${fullDate}</a></li>
                                                   
                                                </ul>
                                                <p>${content.substring(0,145)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
    `
}

for(var i=0;i<eventData.length;i++){

    allEvents+=generateEventBlock(eventData[i])
}




document.getElementById("masonry").innerHTML=allEvents