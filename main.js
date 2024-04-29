let input = document.getElementById('input')
let btn = document.getElementById('btn')
let divList = document.getElementById('divList')
let ol = document.getElementById('ol')
let btnUpdate = document.getElementById('btnUpdate')

btn.addEventListener('click', addToListFn)
btnUpdate.addEventListener('click', updateFn)

let key = 'keyOfArray'

let arrayOfTasks = []

getFn()
drawTasksFn()

function addToListFn() {
    if (input.value){
        divList.classList.add('divList')
        let task = input.value
        let li = document.createElement('li')
        let check = document.createElement('input')
        check.classList.add('checkBox')

        check.type = 'checkbox'
        ol.appendChild(li)
        li.innerText = task.slice(0, 1).toUpperCase() + task.slice(1);
        li.appendChild(check)
        arrayOfTasks.push({task})
        setFn()
        input.value = ''
    }
}

function drawTasksFn() {
    divList.classList.add('divList')
    let arr = JSON.parse(localStorage.getItem(key));

    for (const task of arr) {
        let li = document.createElement('li')
        let check = document.createElement('input')
        check.classList.add('checkBox')
        check.type = 'checkbox'
        ol.appendChild(li)
        li.innerText = task.task.slice(0, 1).toUpperCase() + task.task.slice(1);
        li.appendChild(check)
    }
}

function setFn() {
    localStorage.setItem(key, JSON.stringify(arrayOfTasks))
}

function getFn() {
    arrayOfTasks = JSON.parse(localStorage.getItem(key)) || []
}

function updateFn() {
    let checkBoxes = document.querySelectorAll('.checkBox')
    for (const checkBox of checkBoxes) {
        if (checkBox.checked) {
            let liChecked = checkBox.parentElement
            liChecked.remove()
            let arr = JSON.parse(localStorage.getItem(key))
            let content = liChecked.innerText
            let indexToDelete =  arr.findIndex(item=>item.task.toLowerCase()===content.toLowerCase())
            if (indexToDelete!==-1){
                arr.splice(indexToDelete,1)
            }
            localStorage.setItem(key,JSON.stringify(arr))
            arrayOfTasks=arr

        }
    }
}























