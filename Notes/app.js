const title = document.getElementById('title')
const create = document.getElementById('create')
const list = document.getElementById('list')

const notes = ['Note1', 'Note2']

function getNoteTemplate(note) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${note}</span>
    <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
    </span>
    </li>`
}

const render = function () {
    for (let i = 0; i < notes.length; i++)
        list.insertAdjacentHTML('afterbegin',
        getNoteTemplate(notes[i]))
    }

render()

create.onclick = function () {
    if (title.value === '') {
        return
    }
    list.insertAdjacentHTML('afterbegin',
     getNoteTemplate(title.value))
    title.value = ''
}
