const API_URL = "http://localhost:3000/pessoas"

export async function getTasks(){
    try{
        const response = await fetch(API_URL);
        return await response.json();
    }catch(error){
        alert("Erro ao buscar tarefas" + error.message)
    }
}

export async function createTask(dados) {
    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(dados)
        })
        return await response.json();
    }catch(error){
        alert("Erro ao salvar tarefas" + error.message)
    }
}

export async function uptadeTask(id, dados) {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({id, ...dados})
        })
        return await response.json();
    }catch(error){
        alert("Erro ao atualizar task" + error.message)
    }
}

export async function deleteTask(id) {
    try{
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
    }catch(error){
        alert("Erro ao deletar task" + error.message)
    }
}