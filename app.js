const dateElement = document.getElementById('date');
const clear = document.querySelector(".clear");
const outputList = document.querySelector('.outputList');
const toDoInput = document.getElementById('toDoInput');
const timeInput = document.getElementById('time');

//set date
const option = {weekday:"long", month:"short", day:"numeric"};
const now = new Date();
dateElement.innerHTML = now.toLocaleDateString("en-US", option);

//clear an item from the local storage
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

//adding new element
function addInput() {
    //create a new list dynamically
    const toDo = document.createElement('div');
    toDo.classList.add('newToDo');

    //check your todo after it has been completed
    const checkToDo = document.createElement('button');
    checkToDo.innerHTML = '#'
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
    const deleteToDo = document.createElement('button');
    deleteToDo.innerHTML = 'Del';
    deleteToDo.classList.add('delete');
    toDo.appendChild(deleteToDo);


    if (toDoInput.value === '') {
        alert("Add what you want to do!"); // alert when there is no input
    } else {
        outputList.appendChild(toDo); // the input is appended to the ul
    }

    //set local storage (set item to where list is updated)
    // localStorage.setItem("TODO", JSON.stringify(LIST));

    toDoInput.value = ""; // empty todo input after being added to ul
    timeInput.value = ""; // empty todo input after being added to ul

};

outputList.addEventListener('click', check);
function check(evt) {
    const myToDoList = evt.target; //target the list dynamically
    let elementJob = myToDoList.parentElement;

    //delete an item from the list
    if (myToDoList.classList[0] === 'delete') {
        outputList.removeChild(elementJob);
    }
    
    //check an item in the list
    if (myToDoList.classList[0] === 'check') {
        elementJob.classList.toggle('checked');
    }

    //set local storage (set item to where list is updated)
    // localStorage.setItem("TODO", JSON.stringify(LIST));
}