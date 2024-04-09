import {Link} from 'react-router-dom'
function LinkButton ({to, text}){
    return(
        <>
        <div>
            <Link to={to} className='bg-black text-white p-3 hover:text-orange-500'>
                {text}
            </Link>
        </div>
        </>
    )
}
export default LinkButton