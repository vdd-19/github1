const btn=document.getElementById("btn");
const task=document.getElementById("task");
const list=document.getElementById("list");

btn.addEventListener("click", function add(){
    const text= task.value.trim();
    if(text===""){
        alert("please enter the task!");
        return;
    }

    const li=document.createElement("li");
    li.textContent=text;

    const del=document.createElement("button")
    del.textContent="delete"
    del.style.marginLeft="10px"

    del.onclick=function(){
        del.textContent="Deleted";
        del.style.backgroundColor="red";
        li.remove();
    };

    li.appendChild(del);
    list.appendChild(li);
    task.value="";

    btn.style.backgroundColor="green";
    btn.textcontent="Added";
    setTimeout(()=>
    {
        btn.style.backgroundColor="";
        btn.textcontent="ADD";
    },800)
});