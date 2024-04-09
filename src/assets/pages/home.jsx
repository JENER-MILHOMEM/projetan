import Fotoo from './foto-home.png'
import LinkButton from '../comp/linkbutton'
function home(){
    return(
        <div className="w-screen h-screen">
            <section>
                <div className='font-bold flex flex-col items-center m-9 gap-8'>
                    <h1 className='text-5xl'>Bem-vindo ao <span className='text-black bg-orange-500 p-1'>Projetan</span></h1>
                    <p>comece a gerencia seus projetos agora mesmo!</p>
                    <LinkButton to="/novoprojeto" text="criar projeto"/>
                    <div className='size-2/4 m-10'>
                        <img src={Fotoo} alt="foto" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default home