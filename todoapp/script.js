var datas = {
    t1: 'ToDoApp',
    t2: '(makes your activity)',
    todo: '',
    hapus: 'Hapus',
    todoLi: [],
    todone: [],
    nama: '',
    name: ''
}

var app = new Vue({
    el:'#app',
    data: datas,
    methods: {
        addTodo, removeTodo, removeAll,
        setName, setTodo, changeName,
        resetAll: function() {
            this.removeAll();
            this.changeName();
            this.name = '';
        }
    },
    computed: {
        isListed: function() {
            return (this.todoLi.length != 0);
        },
        isDone, yetDone,
        getName,
        getTodo,
    }
});

function addTodo() {
    if(this.todo.trim() != '') {
        this.todoLi.push(this.todo);
        this.todone.push(false);
    }
    this.todo = '';
}

function removeTodo(i) {
    this.todoLi.splice(i, 1);
    this.todone.splice(i, 1);
}

function removeAll() {
    this.todoLi.splice(0, this.todoLi.length);
    this.todone.splice(0, this.todone.length);
    localStorage.removeItem('todoLi');
    localStorage.removeItem('todone');
    this.todoLi = [];
    this.todone = [];
}

function isDone() {
    for(var i = 0; i < this.todoLi.length; i++) {
        if(!this.todone[i])
            return false;
    }
    return true;
}

function yetDone() {
    var jml = 0;
    for(var i = 0; i < this.todoLi.length; i++) {
        if(!this.todone[i])
            jml++;
    }
    return jml;
}

function getName() {
    this.nama = localStorage.getItem('nama');
    console.log(this.nama);
    if(!this.nama)
        return false;
    return true;
}

function getTodo() {
    let todoLi = localStorage.getItem('todoLi');
    let todone = localStorage.getItem('todone');
    console.log(todoLi);
    if(todoLi) {
        this.todoLi = JSON.parse(todoLi);
        this.todone = JSON.parse(todone);
        return true;
    }
    return false;
}

function setTodo() {
    localStorage.setItem('todoLi', JSON.stringify(this.todoLi));
    localStorage.setItem('todone', JSON.stringify(this.todone));
}

function setName() {
    this.nama = localStorage.setItem('nama', this.name);
    this.name = '';
}

function changeName() {
    localStorage.removeItem('nama');
    this.name = this.nama;
    this.nama = null;
}
