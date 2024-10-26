class Todo{
    constructor(){
        this.totalTasks= document.querySelectorAll('.task').length;
    }

    addTask(taskText){
        //clonar o template
        let  template = document.querySelector('.task').cloneNode(true);
        template.classList.remove('hide');
        let templateText=template.querySelector(".task-title")
        templateText.textContent=taskText

        let list = document.querySelector('#task-container')
        
        list.appendChild(template)

        //add eventos as novas tasks
        this.addEvents()

        this.checkTask('add')

        

    }
    addEvents(){
        //botoes de remover
        let removeBtnList= document.querySelectorAll('.trash')
        //ultimo botao de remover da lista
        let removeBtn = removeBtnList[removeBtnList.length-1]

        removeBtn.addEventListener('click',function(){
            //chama a removeTask passando o botao como argumento
            todo.removeTask(this)
        })

        //botoes de  tasks prontas
        let doneBtnList= document.querySelectorAll('.check')
        //ultimo botao de pronto da lista
        let doneBtn = doneBtnList[doneBtnList.length-1]

        doneBtn.addEventListener('click',function(){
            //chama a completeTask passando o botao como argumento
            todo.completeTask(this)
        })


    }
    removeTask(task){
        // elemento pai de task
        let parentEl = task.parentElement  
        //remove a task com o metodo nativo remove()
        parentEl.remove()  
        this.checkTask('remove')
    }
    completeTask(task){
        console.log(task)
        //add a classe done ao elemento
        

        task.classList.add('done')
    }

    checkTask(command){
        let msg = document.querySelector('#empty-tasks')

        if(command ==='add'){
            this.totalTasks+=1
        }else if (command==='remove'){
            this.totalTasks-=1
        }
        

        if(this.totalTasks == 1 ){
            msg.classList.remove('hide')
        }else{
            msg.classList.add('hide')
        }
    }
}

let todo= new Todo();

//events
let add_btn=document.querySelector('#add')

add_btn.addEventListener('click', (e)=>{
    //Nao submeter o formulario
    e.preventDefault()

    let taskText = document.querySelector('#task')

    if(taskText.value !== ''){
        todo.addTask(taskText.value)
    }
    
    taskText.value=''
    
} )