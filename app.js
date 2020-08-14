const toDoInput = document.getElementById('toDoInput');
const timeInput = document.getElementById('time');
const dateElement = document.getElementById('date');
const outputList = document.querySelector('.outputList');
const add = document.getElementById('addInput')

//set date
const option = {weekday:"long", month:"short", day:"numeric"};
const now = new Date();
dateElement.innerHTML = now.toLocaleDateString("en-US", option);

//adding new element
add.addEventListener('click', function() {
    //create a new list dynamically
    const toDo = document.createElement('div');
    toDo.classList.add('newToDo');

    //check your todo after it has been completed
    const checkToDo = document.createElement('cheCK');
    checkToDo.innerHTML = '<i class="fas fa-check-circle"> </li>'
    checkToDo.classList.add('check');
    toDo.appendChild(checkToDo);

    //add a new to do list
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('newItem');
    toDo.appendChild(newToDo);

    //add time to your todo list
    const timeToDo = document.createElement('time');
    timeToDo.innerText = timeInput.value;
    timeToDo.classList.add('newTime');
    toDo.appendChild(timeToDo);
    
    //delete an item from the list
    const deleteToDo = document.createElement('span');
    deleteToDo.innerHTML = '<i class="fas fa-trash-alt"> </i>';
    deleteToDo.classList.add('deletebtn');
    toDo.appendChild(deleteToDo);


    if (toDoInput.value === '') {
        alert("Add what you want to do!"); // alert when there is no input
    } else {
        outputList.appendChild(toDo); // the input is appended to the ul
    }

    toDoInput.value = ""; // empty todo input after being added to ul
    timeInput.value = ""; // empty todo input after being added to ul

});

outputList.addEventListener('click', check);
function check(evt) {
    const myToDoList = evt.target; //target the list dynamically
    let elementJob = myToDoList.parentElement;

    //delete an item from the list
    if (myToDoList.classList[0] === 'deletebtn') {
        outputList.removeChild(elementJob);
    }
    
    //check an item in the list
    if (myToDoList.classList[0] === 'check') {
        outputList.classList.toggle('checked');
        return;
    }
}