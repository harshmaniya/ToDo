import Todo from "../models/todoSchema.js"

const addToDo = async (_, args) => {
    const { title, description } = args
    try {
        const todo = await Todo.create({ title, description })
        if (!todo) return new Error("todo not created!")
        console.log(todo)
        return todo
    } catch (error) {
        console.error(error)
        return new Error(error.message)
    }
}

const updateToDo = async (_, args) => {
    const { _id, ...rest } = args
    try {
        const todo = await Todo.findByIdAndUpdate({ _id }, { ...rest })
        if (!todo) return new Error("todo not updated!")
        console.log(todo)
        return { message: "todo updated!" }
    } catch (error) {
        console.error(error)
        return new Error(error.message)
    }
}

const deleteToDo = async (_, args) => {
    const { _id } = args
    try {
        const todo = await Todo.findByIdAndDelete({ _id })
        if (!todo) return new Error("todo not deleted!")
        console.log(todo)
        return { message: "todo deleted!" }
    } catch (error) {
        console.error(error)
        return new Error(error.message)
    }
}

const getToDos = async (_, args) => {    
    try {
        const todo = await Todo.find()
        if (!todo) return new Error("todo not found!")
        console.log(todo)
        return todo
    } catch (error) {
        console.error(error)
        return new Error(error.message)
    }
}

const resolvers = {
    Query: {
        getToDos
    },
    Mutation: {
        addToDo,
        updateToDo,
        deleteToDo
    }
}

export default resolvers