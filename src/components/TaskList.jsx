import TaskItem from "./TaskItem";

const TaskList = ({onEdit, onDelete, array}) => {
//Recebe  uma lista de pessoas e renderiza um TaskItem para cada uma 
    if(!array) return null
    if(array.length === 0) return <p>Nenhuma pessoa cadastrada</p>

    return(
        <ul className="flex flex-col gap-4">
            {/* Nesse código daqui diz o seguinte, percorra o item e a cada volta do item será uma pessoa diferente, e cada item tem uma key, pessoa, um onEdit e um onDelete. Na key ela pega o id, porque basta ter/saber o ID para executar uma função, seja edita ou deletar. */}
            {array.map(item => 
            <TaskItem 
            key={item.id} 
            pessoa={item}
            onEdit={onEdit}
            onDelete={onDelete}
            />)}
        </ul>
    )
}

export default TaskList;