function changecolor(){
    const randomcolor=`rgb(${Math.floor(Math.random()*256)}
                           ${Math.floor(Math.random()*256)}
                           ${Math.floor(Math.random()*256)})`
    document.body.style.backgroundColor=randomcolor;
    document.getElementById("ccode").textContent=randomcolor;
}