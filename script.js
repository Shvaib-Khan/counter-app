let info=document.getElementById('info');
let button=document.getElementById('btn');


let count =0;

function change(){

    count=count+1;
    info.textContent=`You have clicked ${count} times`;

}

button.addEventListener('click',change);
