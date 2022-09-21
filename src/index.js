
//Delete event




var form=document.querySelector("#itemForm")

console.log(form);

var itemList=document.querySelector("#items")
var filter=document.querySelector("#filter")




filter.addEventListener("keyup",filterItems)




function filterItems(e){


    var text=e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){


        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
}
itemList.addEventListener("click",removeItem)
function removeItem(e){


    if(e.target.classList.contains('btn-danger')){
        if(confirm("Are you sure")){

            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
        console.log(1);

    }

}

form.addEventListener("submit",addItem)

function addItem(e){


    e.preventDefault();
    console.log(1);

var inputValue=document.querySelector('#itemAdder').value;
console.log(inputValue);
//console.log(inputValue);
let li=document.createElement('li')
li.className="list-items"
li.appendChild(document.createTextNode(inputValue));


let crossButton=document.createElement('button')
crossButton.innerHTML="X"
crossButton.className='btn-danger'
//console.log(li);
li.appendChild(crossButton)
itemList.appendChild(li);

}




// // let title=document.querySelector(".title")
// // console.log(title);


// // title.textContent="Hey"

// let items=document.querySelectorAll("li:nth-child(odd)")

// items.forEach(item => {

//     item.style.color="red"
    
// });



// let submit=document.querySelector('input[type=submit]');
// submit.value="SEND"


// // let div=document.createElement('div')


// // div.className='hello'

// // let divText=document.createTextNode('Hi')
// // console.log(divText);
// // div.appendChild(divText)
// // let h1=document.querySelector('header h1')
// // document.querySelector('header .container').insertBefore(div,h1);

// // console.log(div);


// //items[3].style.backgroundColor="red"
// //for(var i=0;i<items.length;i++)


// //console.log(items);


// let button=document.querySelector(".btn-dark")
// button.addEventListener('click',buttonClick)


// function buttonClick(e){
//     //document.querySelector('.title').textContent="CHANGED"
//     console.log('button clicked');
//     console.log(e.target);
// }


// let input=document.querySelector('input[type="text"]')
// let form=document.querySelector("form")

// input.addEventListener("keydown",runEvent)


// function runEvent(e){
// console.log(e.target.value);

// }


// let box=document.querySelector(".box")

// let ex=document.querySelector(".example")
// box.addEventListener("mousemove",boxHover)


// function boxHover(e){

//     box.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},0)`
//         ex.innerHTML='<h2>'+e.offsetX+'</h2><h2>'+e.offsetY+'</h2>'
//         console.log(e);
// //
// }
// box.addEventListener("mouseout",boxHover)


// function boxHover(){


//     box.style.backgroundColor="white"
// }