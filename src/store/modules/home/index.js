export default {
    namespaced: true,
    state: {
        count: 1,
        hihi: "sdjhsjdfhsf",
        todos: [
            { id: 1, text: 'task 1', done: true, time: 5 },
            { id: 2, text: 'task 2', done: false, time: 6 },
            { id: 3, text: 'task 3', done: false, time: 3 },
        ],
        checked: false,
        tasks: [],
        title: ''
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        doneTodosSum: (state) => {
            let sum = 0;
            state.todos.forEach(element => {
                sum += element.time
            });
            return sum
        },
        getTodoByText: (state) => (name) => {
            return state.todos.filter(todo => { return todo.text.match(name) })
        },
        checked: state => {
            return state.checked
        },
        doneTodosTitle: state => {
            return state.title
        },
    },
    mutations: {
        increment(state) {
            state.count++
        },
        titlehihi(state,name) {
            state.title = name
        }
        ,
        checkhihi(state,hi) {
            state.title = hi
        }
    }
}