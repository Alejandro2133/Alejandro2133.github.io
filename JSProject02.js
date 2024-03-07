const taskArray = []
document.addEventListener('DOMContentLoaded',function(){

    function Task(){
        let new_task = document.querySelector('#task-title').value;
        let priority = document.querySelector('#task-priority').value;
        
        const buttons=document.querySelectorAll('input[name="task_status"]')
        let status='';
        buttons.forEach((radio) => {
            if(radio.checked){
              status=radio.value;
            }
          });

          return{
            new_task,
            priority,
            status
          };
    }



    document.querySelector('#new-task').onsubmit = function(){
        const li = document.createElement('li');
        const task = Task()

        let new_task_html =`
                                        <span> ${task.new_task} </span>
                                        <button class="remove"> Remove </button>
                                        <button class="completed"> Completed </button><br>
                                        <span>priority: ${task.priority}</span><br>
                                        <span>Status: ${task.status}</span>
                                        
                                    `;
        li.innerHTML=new_task_html;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task-title').value='';
        taskArray.push(task);
        return false;
    }

    document.addEventListener('click',function(event){

        element = event.target;
        if (element.className==='remove'){
            element.parentElement.remove();
            taskArray.remove(task);
        }
         if(element.className==='completed'){
            element.parentElement.style.textDecoration = "line-through" ;
        }
    })
})