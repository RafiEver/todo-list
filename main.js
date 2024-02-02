let input=document.getElementById('inputTodo')
let toDoUl=document.getElementById('to-do-ul')

function addItem(){
    if(input.value === ''){
        alert('Input Box Should Not Be Empty')
    }
    else{
        var li = document.createElement('li')
        li.innerHTML='<i class="fa-solid fa-trash"></i> '+input.value
        toDoUl.appendChild(li)
    }
    input.value =''
    saveData()
}

toDoUl.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data' , toDoUl.innerHTML)
}
function showToDo(){
    toDoUl.innerHTML = localStorage.getItem('data')
}
showToDo()