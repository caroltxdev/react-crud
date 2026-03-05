import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { createTask, deleteTask, getTasks, uptadeTask } from './services/taskService';

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [editingTask, setEditingTask] =useState(null)

  async function loadPessoas() {
    const result = await getTasks()
    setPessoas(result)
  }

  function handleEdit(pessoa) {
    setEditingTask(pessoa)
  }

  async function handleDelete(id) {
    await deleteTask(id)
    const result = pessoas.filter(pessoa => pessoa.id !== id)
    setPessoas(result)
  }

  async function handleSubmit(dados) {
    if(editingTask){
      const pessoaAtualizada = await uptadeTask(editingTask.id, dados)
      setPessoas(prev => prev.map(p => p.id === editingTask.id? pessoaAtualizada : p))
      setEditingTask(null)
    } else{
      const criarPessoa = await createTask(dados)
      setPessoas(prev => [...prev, criarPessoa])
    }
  }

  useEffect(() => {
    loadPessoas();
  }, [])

  return (
    <div className="min-h-screen bg-rose-50 px-6 py-10">
      <TaskForm 
      key={editingTask ? editingTask.id : 'new'}
      editingTask={editingTask}
      onSubmit={handleSubmit}
      onCancel={() => setEditingTask(null)}
      />

      <TaskList
      onEdit={handleEdit}
      array={pessoas}
      onDelete={handleDelete}
      />
    </div>
  )
}

export default App
