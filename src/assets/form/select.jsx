function select ({ text, name, options, handleOnChange, value, }){
    return(
        <div>
            <div className=" flex flex-col gap-2" >
               <label htmlFor={name} className="font-bold">{text}:</label>
               <select className="bg-gray-300 px-2 w-96 h-10" name={name} id={name} onChange={handleOnChange} value={value}>
               <option className="bg-gray-300" disabled selected  >selecione a categoria</option>
               {options && options.length > 0 && options.map((option) => (
                <option value={option.id} key={option.id}>
                     {option.name}
                </option>
                ))}
            </select>
            </div>
        </div>
    )
}
export default select