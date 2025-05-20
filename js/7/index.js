let item = document.getElementById("item");
let addBtn = document.getElementById("addBtn");
let alertMsg = document.getElementById("alert");
let list = document.getElementById("list");
let counter = 0;
function addThis() {

    addBtn.style.backgroundColor='rgb(0, 255, 85)';
    if (item.value == '') {
        alertMsg.innerHTML = `Nothing was Entered`;
        alertMsg.style.color = 'rgb(255, 44, 44)';
        item.style.boxShadow=`0 0 2px red`;
       
        
    } else {
        counter++;
        list.innerHTML += `${counter}.  ${item.value}` ;
        alertMsg.innerHTML = `Task ${counter} Added`;
        alertMsg.style.color=`green`
        item.removeAttribute('boxShadow', 'false')
        
    }

    

    
    
}

addBtn.addEventListener("click",addThis)



