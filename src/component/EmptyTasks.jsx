import { ChatCircleDots } from 'phosphor-react'
import styles from '../styles/EmptyTasks.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <ChatCircleDots size={70} />
      <p><strong>Você ainda não tem tarefas cadastradas</strong><br />
        Crie tarefas e organize seus itens a fazer.</p>
    </div>
  )
}