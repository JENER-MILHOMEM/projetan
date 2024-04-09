import loading from '../img/loading.svg'

function Carregamento(){
    return(
        <>
        <div className=' flex w-full h-full justify-center items-center m-40'>
            <img className='w-24' src={loading} alt="loading" />
        </div>
        </>
    )
}
export default Carregamento