const item=document.querySelector("#item")
const todobox=document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addTodo(this.value)
            this.value = "" 
        }
       
    }
)
const addTodo = (item) =>{
    const listItem =document.createElement("li");
    listItem.innerHTML=`
       ${item}
    <i class="fa-sharp fa-solid fa-xmark fa-bounce fa-xl"></i>
                 
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    todobox.appendChild(listItem)
}