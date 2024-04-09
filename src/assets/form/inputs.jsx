
function inputs ({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div>
            <div className=" flex flex-col gap-2">
                <label  className="font-bold"   htmlFor={name}>{text}:</label>
                <input type={type} name={name} placeholder={placeholder}  value={value} onChange={handleOnChange} className="bg-gray-300 px-2 w-96 h-10"/>
             </div>
        </div>
    )
}
export default inputs