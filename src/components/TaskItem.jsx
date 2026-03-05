const TaskItem = ({pessoa, onEdit, onDelete}) => {
    return(
        <section className="bg-white rounded-2xl shadow-sm p-5 border border-rose-100 mb-4"
>
            
            <h1 className="text-lg font-semibold text-rose-500">{pessoa.nome}</h1>
            <p className="text-sm text-gray-400"
>{pessoa.profissao}</p>
            <p className="text-sm text-gray-400"
>{pessoa.nivel}</p>

        <div className="flex gap-3">
            <button onClick={() => onEdit(pessoa)} className="bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-lg px-4 py-1 text-sm transition-colors "
            >Editar</button>
            <button onClick={() => onDelete(pessoa.id)} className="bg-rose-100 hover:bg-rose-200 text-rose-400 rounded-lg px-4 py-1 text-sm transition-colors">Deletar</button>
        </div>
        
        </section>
    )
}

export default TaskItem;
