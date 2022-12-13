import styles from '../styles/Task.module.css'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useEffect } from 'react'

export function Task({ idTask, taskTitle, tasks, setTasks, completed, setCompletedTasks, completedTasks }) {

  const [checkbox, setCheckbox] = useState(false)

  function taskTitleToDelete(taskToDelete) {
    const tasksWithoutDeleted = tasks.filter(task => {
      return task.id != taskToDelete
    })
    setTasks(tasksWithoutDeleted)
  }

  function handleDeleteTask() {
    taskTitleToDelete(idTask)
  }

  function handleTaskCompleted() {
    setCheckbox(!checkbox)
    setTasks(tasks.map(task => {
      if (task.id === idTask) {
        return {
          ...task, isComplete: !task.isComplete
        }
      } else {
        return {
          ...task
        }
      }
    }))
  }

  useEffect(() => {
    let counter = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].isComplete === true) counter++;
    }

    setCompletedTasks(counter)
  }, [checkbox])

  if (completed == true && checkbox == true) {

    return (
      <div className={styles.task}>
        <input type="checkbox" className={styles.checkboxBtn} onClick={handleTaskCompleted} />
        <div className={styles.content}>
          <p className={styles.underline}>{taskTitle}</p>
        </div>

        <button className={styles.deleteBtn}>
          <Trash size={18} onClick={handleDeleteTask} />
        </button>
      </div>
    )
  } else {
    return (
      <div className={styles.task}>
        <input type="checkbox" className={styles.checkboxBtn} onClick={handleTaskCompleted} />
        <div className={styles.content}>
          <p className={styles.normalParagraph}>{taskTitle}</p>
        </div>

        <button className={styles.deleteBtn}>
          <Trash size={18} onClick={handleDeleteTask} />
        </button>
      </div>
    )
  }


}