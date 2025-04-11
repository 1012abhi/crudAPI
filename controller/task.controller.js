let tasks = [];
let idCounter = 1;

const createTast = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }
    const newTask = {  
        id: idCounter++,         
        title,
        description,
        completed: completed || false, // Default to false if not provided
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const getTasks = (req, res) => {                
    
    res.status(200).json(tasks);
}

const getTaskById = (req, res) => {     
    
    const { id } = req.params;

    const task = tasks.find(task => (task.id === Number(id)));
    if (!task) {
        return res.status(404).json({ message: 'Task not found yes sir jji' });
    }
    res.status(200).json(task);
}

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }
    
    const task = tasks.find(task => task.id === Number(id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    if (completed !== undefined) {
        task.completed = completed; // Update 'completed' only if provided
    }
    res.status(200).json(task);
}

const deleteTask = (req, res) => {
    const { id } = req.params;
    console.log(id, 'id from deleteTask');
    
        // Find the index of the task with the given id
    const taskIndex = tasks.findIndex(task => task.id === Number(id));
    console.log(taskIndex, 'taskIndex from deleteTask');
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).json({ message: `Task is deleted ${taskIndex}` })

}

export { createTast,getTasks, getTaskById, updateTask, deleteTask };