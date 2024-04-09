import Message from "../comp/mensagem" 
import { useLocation } from "react-router-dom"
import LinkButton from '../comp/linkbutton'
import ProjectCard from "../comp/projectCard"
import { useState, useEffect } from "react"
import Carregamento from "../comp/Carregamento"

function projetoNovo(){

    const [projetos, setProjetos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const location = useLocation()

    let message = ''
    if(location.state){
        message = location.state.message
    }
    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:5000/projects',{
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data)=>{
        setProjetos(data)
        setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
        }, 1000);
    }, [])

    function removeproject(id){
        
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProjetos(projetos.filter((project)=> project.id !== id))
        })
        .catch((err) => console.log(err))   
    }
    return(
        <div className="w-screen h-screen">
            <div className="m-8 flex justify-between px-96  ">
                    <div className=" text-4xl font-bold m-2  ">
                        <h1>Meus projetos</h1>  
                    </div>
                    <div className="px-1 m-4 text-lg">
                    <LinkButton to="/novoprojeto" text="criar projeto"/>
                    </div>

              
            </div>
            <div className=" flex flex-col place-items-center  gap-5">
                {message && <Message msg={message}/>}
            </div> 
            <div className="flex flex-wrap px-16 justify-center ">
                {projetos.length > 0 && 
                projetos.map((project) =>(
                    <ProjectCard id={project.id} name={project.name} budget={project.orçamento} category={project.category.name} key={project.id} handleRemove={removeproject}
                    />
                ))}
                {!removeLoading && <Carregamento/>}
            </div>
             
        </div>
    )
}
export default projetoNovo