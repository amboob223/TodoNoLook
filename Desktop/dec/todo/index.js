    //design docs.

//here we are going to use the javascript to take the input values and 
//and add them to the countaoner with the todos and when you click on it it puts a line through 
//and when you double click it goes away

    //varibles
const container = document.querySelector(".container");//it matters if we do the queryselector or the queryselectorall
const button = document.getElementById("todobutton");
const todo = document.getElementById("todo")
const on = document.querySelectorAll(".list")
    //event
            //this event adds to the list
    button.addEventListener("click",()=>{
        const ele = document.createElement("p")
                    ele.classList.add("list")
                ele.innerHTML = todo.value
                container.appendChild(ele)  //when it becomes ele it get the new class
          
                ele.addEventListener("click",()=>{
                ele.style.textDecoration="line-through"

                        ele.addEventListener("dblclick",()=>{
                                        ele.style.display = "none"
                                })

            }) // okay so we need to nest the event in an event this may help with the issue we was having with the draggables
             // its doing and aloggin it
        
    })

        //this event goes through the container and any one of the elements that is clicked the text changes and we get a line through it

   