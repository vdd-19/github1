function updateclock(){
    const now=new Date();
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    document.getElementById("clock").textContent=hour+":"+min+":"+sec;
    setInterval(updateclock,1000);
}
updateclock();