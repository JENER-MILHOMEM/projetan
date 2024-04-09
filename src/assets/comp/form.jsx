import { useEffect, useState } from 'react'
import Input from '../form/inputs'
import Select from '../form/select'
import Button from '../form/submit-button'

import axios from 'axios'

function form({handleSubmit, projectData}){

    const [categories, setCategories] = useState([])
    const [project, setproject] = useState(projectData || {})
    useEffect(()=>{

        /* fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }

        }).then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))  */

        axios.get('http://localhost:5000/categories')
        .then(function (response) {
            setCategories(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    const  submit = (e) => {
        e.preventDefault()
        
        handleSubmit(project)
    }
    function handleChange(e){
        setproject({...project, [e.target.name]: e.target.value })
        
    }
    function handleSelect(e){
        setproject({...project,
             category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
     })
        
    }
    return(
        <>
            <form onSubmit={submit} className=" flex flex-col gap-6">
                <Input handleOnChange={handleChange} type="text" text="nome do projeto" name="name" placeholder="Insira o nome do projeto" value={project.name ? project.name: ""}/>
                <Input handleOnChange={handleChange} type="number" text="Orçamento do projeto" name="orçamento" placeholder="Insira o orçamento do projeto " value={project.orçamento ? project.orçamento: ""}/>
                <Select name="category_id" text="Selecione uma categoria" options={categories} handleOnChange={handleSelect} />
                <Button type="submit" value="criar projeto"/>
            </form>
        </>
    )
}
export default form