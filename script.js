const countdownDate=new Date("August 9, 2023 00:00:00").getTime()
const day=document.getElementById("days")
const hour=document.getElementById("hours")
const minute=document.getElementById("minutes")
const second=document.getElementById("seconds")
const end=document.querySelector(".h4")

const timer=setInterval(function(){
    const currentDate=new Date().getTime()
    // console,log(currentDate)
    let now=countdownDate-currentDate
    // console.log(daysReamining)
    const sec=Math.floor(now/1000)
    const days=Math.floor(sec/(24*60*60))
    const hours=Math.floor((sec%(24*60*60))/3600)
    const minutes=Math.floor(((sec%(24*60*60))%3600)/60)
    const seconds=Math.floor((((sec%(24*60*60))%3600)%60))


    day.textContent=days
    hour.textContent=hours
    second.textContent=seconds
    minute.textContent=minutes

    if(now<0)
    {
        clearInterval(timer)
        day.textContent=0
        hour.textContent=0
        second.textContent=0
        minute.textContent=0
        end.textContent="Giveaway Has Ended !!"

    }
},1000)