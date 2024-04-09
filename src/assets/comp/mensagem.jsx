import { useState, useEffect } from "react"
function mensagem ({msg}){

    const [visible, setvisble] = useState(false)
    useEffect(()=>{
        if(!msg){
            setvisble(false)
            return
        }
        setvisble(true)

        const timer = setTimeout(() => {
            setvisble(false)
        }, 2000);

        return () => clearTimeout(timer)

    }, [msg])
    return(
        <>
        {visible && (<div className="">
            <div className="border border-black p-5 bg-green-300">
                <p className="flex flex-col ">{msg}</p>
            </div>
        </div>)}
        </>
    )
}
export default mensagem