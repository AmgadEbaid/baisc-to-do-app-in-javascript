const inPutTask= document.querySelector("[data-add]")
const tasks=document.querySelector(".task")
const output=document.querySelector( ".out-put")
const removallBtn = document.querySelector("#removeall")
let list =JSON.parse(localStorage.getItem("task"))||[]
let unchangedList =[...list];
render(list)


document.querySelector("#add").addEventListener("click",()=>{
   getTasks(list)
   savelocaly(list)
    render(list)
})


function render (list){
  savelocaly(list)
   output.innerHTML=""
   inPutTask.value=""

    list.forEach(element => {
    
        const clone = tasks.content.cloneNode(true);
        const text= clone.querySelector("p")
        const tk =clone.querySelector(".tsk")
        tk.setAttribute("id",element.id)
        
        text.innerText=element.text
        
      output.append(clone)

    });
    

}



function savelocaly(list){

    localStorage.setItem("task",JSON.stringify(list)  )
}


function getTasks(list){
    if (inPutTask.value=="") return

    task ={
        text: inPutTask.value,
        id: Date.now ()
    }

     list.push(task)
}

function autoUpdate() {
  

    if (list == unchangedList) return

      render(list);
      unchangedList = list;
    
  }
  
  //setInterval(autoUpdate, 0);



        
    document.body.addEventListener( 'click', function(event){
      if( event.target.id !== 'delete' ) return
      
      const id=event.target.parentElement.getAttribute("id")
      const filtered = list.filter((val) => val.id != id)
      list=filtered

      savelocaly(list)
      render(list)
    });
  
   removallBtn.addEventListener("click",() =>{
    list=[]
    savelocaly(list)
    render(list)
   })

