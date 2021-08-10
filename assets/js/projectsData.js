projectsData = [

    // {
    //     "id": "cks64kvnsj0oo0b53l32e7gai",
    //     "title": "E-xhibition #1 | Google Map Automation",
    //     "developerName": [
    //       "Hariharan Iyer"
    //     ],
    //     "videoLink": "https://www.youtube.com/embed/oz-lFDS5rUQ",
    //     "devProfile": "https://www.linkedin.com/in/iyerhari9999/",
    //     "projectLink": "https://github.com/IyerHari9999/Selenium-Python-Project",
    //     "publishedAt": "2021-08-10T13:54:37.555224+00:00"
    //   },



]


url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20projects(orderBy%3ApublishedAt_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20developerName%0A%20%20%20%20videoLink%0A%20%20%20%20projectLink%0A%20%20%20%20publishedAt%0A%20%20%7D%0A%7D"
async function getProjectDataFromServer() {
    const reps = await fetch(url);
    var data = await reps.json();
    data = (data.data.projects);
    // console.log(data)
    var curr = ""
    for (i = 0; i < data.length; i++) {
        curr = data[i]
        temp = {

            id: curr.id,
            title: curr.title,
            developerName:curr.developerName,
            videoLink: curr.videoLink,
            projectLink: curr.projectLink,
            publishedAt: curr.publishedAt,
            date: "",
            month: "MON",
            year: "",
        }
        temp.year = curr.publishedAt.slice(0,4) 
        temp.date = curr.publishedAt.slice(8,10)
        m = parseInt(curr.publishedAt.slice(6,8))
        switch (m) {
            case 1:
                temp.month = "Jan"
                break;
        
            case 2:
                temp.month = "Feb"
                break;
        
            case 3:
                temp.month = "Mar"
                break;
        
            case 4:
                temp.month = "Apr"
                break;
        
            case 5:
                temp.month = "May"
                break;
        
            case 6:
                temp.month = "Jun"
                break;
        
            case 7:
                temp.month = "Jul"
                break;
        
            case 8:
                temp.month = "Aug"
                break;
        
            case 9:
                temp.month = "Sep"
                break;
        
            case 10:
                temp.month = "Oct"
                break;
        
            case 11:
                temp.month = "Nov"
                break;
        
            case 12:
                temp.month = "Dec"
                break;
        
            default:
                break;
        }
        projectsData.push(temp)
    }


    console.log(projectsData)
}
getProjectDataFromServer()
console.log(projectsData)