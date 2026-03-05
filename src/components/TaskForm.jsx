import { useState } from "react";

const TaskForm = ({editingTask, onCancel, onSubmit}) => {
    const [nome, setNome] = useState(editingTask?.nome || "")
    const [profissao, setProfissao] = useState(editingTask?.profissao || "")
    const [nivel, setNivel] = useState(editingTask?.nivel || "")
    
    function handleSubmit(e) {
        e.preventDefault();

        if(nome.trim() === "" || profissao.trim() ==="" || nivel.trim() === "") return

        onSubmit({ nome, profissao, nivel })

        setNome("")
        setProfissao("")
        setNivel("")
    }

    return(
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-rose-100">
            <h1 className="text-3xl text-rose-400 mb-8 text-center" style={{ fontFamily: 'Lora, sans-serif' }}>Dev Board</h1>
            <div className="min-h-screen flex justify-center items-center bg-blue-200 rounded-sm">
                <div className="bg-blue-100 p-10 w-[80%] rounded-sm border-4 border-dashed border-red-300">
                    <form
                    onSubmit={handleSubmit}
                    className="flex flex-col m-7">
                        <label>Nome</label>
                        <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)
                        }
                        className="border border-rose-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                        <label>Profissão</label>
                        <input
                        type="text"
                        placeholder="Digite sua profissão"
                        value={profissao}
                        onChange={(e) => setProfissao(e.target.value)}
                        className="border border-rose-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                        <label>Nível</label>
                        <input
                        type="text"
                        placeholder="Digite seu nível"
                        value={nivel}
                        onChange={(e) => setNivel(e.target.value)}
                        className="border border-rose-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                        {editingTask && (
                            <button
                            className="bg-orange-100 hover:bg-orange-200 text-orange-400 rounded-lg px-5 py-2 mt-4 transition-colors"
                            type="button"
                            onClick={onCancel}>
                                Cancelar
                            </button>
                        )}
                        <button
                        type="submit"
                        className="bg-rose-400 hover:bg-rose-500 text-white rounded-lg px-5 py-2 mt-4 transition-colors">
                            {editingTask? "Salvar" : "Adicionar"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;