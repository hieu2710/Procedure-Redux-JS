//reducer
const initState = {
    students: []
}

function reducer(state = initState, action) {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        case 'SUBTRACT':
            return {
                ...state,
                students: [action.payload]
            }
    }
}

//store
const store = Redux.createStore(reducer)

//render
function render(){
    const state = store.getState()
    const value = document.getElementById('studentList')
    value.innerHTML = ''
    state.students.forEach(student => {
        const li = document.createElement('li')
        li.textContent = student
        value.appendChild(li)
    });
}

store.subscribe(render)

//action
document.getElementById('btnAdd').addEventListener('click', name => {
    name.preventDefault()
    const studentName = document.getElementById('inpStd').value
    if(studentName) {
        store.dispatch({
            type: 'ADD',
            payload: studentName
        })
    }
    document.getElementById('inpStd').value = ''
})

document.getElementById('btnDelete').addEventListener('click', () => {
    const studentName = document.getElementById('inpStd').value
    if(studentName) {
        store.dispatch({
            type: 'SUBTRACT',
            payload: []
        })
    }
    document.getElementById('inpStd').value = ''
})