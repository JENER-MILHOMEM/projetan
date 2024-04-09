import { useNavigate } from 'react-router-dom' 
import Form from "../comp/form"
function newProject(){

     const navigate = useNavigate()

    function creatPost(project){
        //intialize projetan and services
        project.projetan = 0
        project.services = []

        fetch('https://json-server-lilac-eta.vercel.app/projects', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projeto", {state});
        })
        .catch(err => console.log(err))
    } 
    return(
        <div className="w-screen h-screen ">
            <div className="flex flex-col items-center m-60 px- gap-6">
                <div className="  flex-col gap-5  "> 
                    <h1 className="font-bold text-4xl text-center">Criar projeto</h1>
                    <p className="text-xl text-center">Crie seu projeto para depois adicionar os serviços</p>
                </div>
                <Form handleSubmit={creatPost}/>
                    
            </div>
            
        </div>
        
    )
}
export default newProject
