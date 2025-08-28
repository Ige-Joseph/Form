
// let TodoList = [
//         {Todo: 'Cook', Time: '12:00pm', Date: 'Oct, 1st 2025'},
//         {Todo: 'Prayer', Time: '3:00pm', Date: 'Oct, 2nd 2025'}
// ]


// document.querySelector('.js-submit').addEventListener('click', submit)

// let Todo = document.querySelector('.testValue')
// let Time =  document.querySelector('.TimeValue')
// let Date = document.querySelector('.DateValue')

// console.log(Todo, Time, Date)

// function submit(){
//     let TodoValue = Todo.value
//     let TimeValue = Time.value
//     let DateValue =  Date.value

//     console.log(TodoValue, TimeValue, DateValue)

//     TodoList.push(
//          {Todo: TodoValue, Time: TimeValue, Date: DateValue},
//     )

//     DisplayDOM()

// }



// let TodoDOM = document.querySelector('.js-TodoLIstsDiv')

// console.log(TodoDOM)

// let Taskdiv = ''


// function DisplayDOM() {
//     for (let i = 0; i < TodoList.length; i++) {
//     let element = TodoList[i];

//     console.log(element)

//     TodoDOM.insertAdjacentHTML('beforeend', '<div> working </div>')

    
//     }



// }







let TodoList = [
        {Todo: 'Cook', Time: '12:00pm', Date: 'Oct, 1st 2025'},
        {Todo: 'Prayer', Time: '3:00pm', Date: 'Oct, 2nd 2025'}
]


document.querySelector('.js-submit').addEventListener('click', submit)

let Todo = document.querySelector('.testValue')
let Time =  document.querySelector('.TimeValue')
let Date = document.querySelector('.DateValue')

console.log(Todo, Time, Date)

function submit(){
    let TodoValue = Todo.value
    let TimeValue = Time.value
    let DateValue =  Date.value

    console.log(TodoValue, TimeValue, DateValue)

    TodoList.push(
         {Todo: TodoValue, Time: TimeValue, Date: DateValue},
    )

    DisplayDOM()

}



let TodoDOM = document.querySelector('.js-TodoLIstsDiv')

console.log(TodoDOM)

let Taskdiv = '<div class="Task"> <div class="TaskDetails"> <b> Wash Plate </b> <a> 12/12/25 </a> <a> 10:00AM </a></div> <div class="Deletebtn"> <button> Delete </button> </div> </div> '


function DisplayDOM() {

    TodoDOM.innerHTML = ''

    for (let i = 0; i < TodoList.length; i++) {
    let element = TodoList[i];

    console.log(element)

    TodoDOM.insertAdjacentHTML('beforeend', `<div class="Task"> 
                
                <div class="TaskDetails">

                <b> ${element.Todo} </b>4
                <a> ${element.Time} </a>
                <a> ${element.Date} </a>

                </div>


                <div class="Deletebtn"> 
                    
                    <button> Delete </button> 
                
                </div>

            </div>`)

    
    }




}





