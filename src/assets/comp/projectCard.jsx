import { BsPencil, BsFillTrashFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

function projectCard ({id, name, budget, category, handleRemove}){
    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <>
        <div className="flex flex-col border border-black px-16 py-6 gap-4 justify-around mx-4  m-7">
            <h4 className=" flex flex-col bg-black text-orange-400 px-24 py-2 text-center">{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p>
                <span>Categoria:</span> {category}
            </p>
            <div className="flex gap-5">
                <div className="border border-black px-2 py-1  hover:bg-black hover:text-orange-400 ">
                    <Link to="/">
                        <BsPencil/>                        
                    </Link>
                </div> 
                <div className="border border-black px-2 py-1 hover:bg-black hover:text-orange-400">
                    <button onClick={remove}>
                        <BsFillTrashFill/> 
                     </button>
                </div>
            </div>
        </div>
        

        </>
    )
}
export default projectCard