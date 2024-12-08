
const input=document.querySelector('#inp');
const list=document.querySelector('.list-container');
function addTask(){
   
    if(input.value==""){
        alert(" Please write something");
    }
    else{
        let li=document.createElement('li');
        li.classList.add('list-items');
        let div=document.createElement('div');
        div.classList.add("checkboxes");
        let Check=document.createElement('input');
        Check.type='checkbox';
        Check.classList.add('input-box1');
        Check.id="mycheck";
        Check.name="mycheck";
        let span=document.createElement("span");
        span.classList.add('span');
        span.textContent=input.value;
        let symbol=document.createElement('div');
        symbol.innerHTML="\u00d7";
        symbol.classList.add("symbol");
        div.appendChild(Check);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(symbol);
        list.appendChild(li);
        input.value='';
        Check.addEventListener('change',function(){
          if(Check.checked){
             Check.style.backgroundColor="orange";
            span.style.textDecoration='line-through';
          }
        });
        span.addEventListener('click',function(){
            Check.checked=true;
            if(Check.checked){
                Check.style.backgroundColor="orange";
            }
            span.style.textDecoration='line-through';
        })
        symbol.addEventListener('click',function(){
            list.removeChild(li);
                list.removeChild(symbol);
        })
    }
}


