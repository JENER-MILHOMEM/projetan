function button ({type, name, placeholder, handleOnChange, value}){
    return(
        <div>
           <div className="flex flex-col bg-gray-300 hover:bg-gray-500 w-24 py-2">
              <input type={type} value={value} />
           </div>
        </div>
    )
}
export default button