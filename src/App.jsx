import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './component/Header'
import { PlusCircle } from 'phosphor-react'
import { Task } from './component/Task'
import { EmptyTasks } from './component/EmptyTasks'

import '../src/styles/global.css'
import styles from '../src/styles/App.module.css'

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleCaptureTaskTitle() {
    setNewTaskTitle(event.target.value)
  }

  function handleCreateNewTask() {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.addTask} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            value={newTaskTitle}
            placeholder="Adicione uma nova tarefa"
            onChange={handleCaptureTaskTitle}
            required
          />
          <button>
            Criar <PlusCircle size={18} />
          </button>
        </form>

        <div className={styles.taskList}>
          <header>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className={styles.completedTasks}>
              <p>Tarefas concluídas</p>
              <span>
                {completedTasks} de {tasks.length}
              </span>
            </div>
          </header>

          {tasks.length === 0 ? (
            <EmptyTasks />
          ) : (
            <div className={styles.taskList}>
              {tasks.map((task) => {
                if (task.isComplete === true) {
                  return (
                    <Task
                      key={task.id}
                      idTask={task.id}
                      taskTitle={task.title}
                      tasks={tasks}
                      setTasks={setTasks}
                      completed={true}
                      taskList={task}
                      completedTasks={completedTasks}
                      setCompletedTasks={setCompletedTasks}
                    />
                  )
                } else {
                  return (
                    <Task
                      key={task.id}
                      idTask={task.id}
                      taskTitle={task.title}
                      tasks={tasks}
                      setTasks={setTasks}
                      completed={false}
                      taskList={task}
                      completedTasks={completedTasks}
                      setCompletedTasks={setCompletedTasks}
                    />
                  )
                }
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
