import {Link} from 'react-router-dom'
import Logo from './icon.png'
const navbar = () => {
  return (
    <>
      <nav className='flex bg-neutral-950 px-16 py-8 text-center justify-between w-screen'>
 
            <div className='text-white text-xl'>
              <Link to='/'><img  className=' size-16 h-max m-0.5'src={Logo} alt="" /></Link>
            </div>

            <div className='flex gap-10 text-xl my-6'>

              {/* <div className='text-white hover:text-orange-500'>
                <Link to='/empresa'>Empresa</Link>
              </div> */}

              <div className='text-white hover:text-orange-500'>
                <Link to='/contato'>Contato</Link>
              </div>

              <div className='text-white hover:text-orange-500'>
                <Link to='/projeto'>Projetos</Link>
              </div>

            </div>

        </nav>
    </>
  )
}

export default navbar
