import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import ImgNota from '../../Images/nf-img.png';
import ImgNotaDois from '../../Images/nf-img-dois.png'
import Botao from '../../Components/Botao/Botao';
import Teste from '../../Images/capa-inicio.png';


function Inicio() {

    const navigate = useNavigate()
    const changePage = () => {
        navigate('/login')
    }
    
    return (
        <div className="flex items-center flex-col">
            <header className="flex justify-center items-center w-full text-white py-20 bg-gradient-to-b from-slate-600 to-slate-300">
                <h1 className="text-7xl font-semibold mr-5">CN</h1>
                <p className="text-5xl font-semibold">Rápido, simples e fácil</p>
            </header>
            <div className='max-w-5xl'>
            <div className='sm:flex mb-10 sm:text-right text-center items-center text-neutral-950'>
                <p className='sm:w-3/4 sm:mr-10 text-xs sm:text-base mb-5 text-neutral-950'>
                Simplificando o controle de envio de notas fiscais. 
                Apresentamos uma solução eficiente para garantir que os prazos de envio 
                 de notas aos clientes sejam sempre cumpridos. Nossa interface 
                 intuitiva permite que você registre facilmente os destinatários 
                 e monitore as datas de envio mensal, proporcionando um processo 
                 simplificado de organização.
                </p>
                <img className='w-28 h-28 items-center sm:w-48 sm:h-48 mx-auto' src={ImgNota} alt="Icone de papel refererindo-se a uma nota fiscal colorido" />
            </div>
            <hr className='sm:hidden px-5 bg-black' />
            <div className='sm:flex sm:text-right text-center items-center text-neutral-950 mt-10'>
                <img className='w-28 h-28 sm:w-48 sm:h-48 sm:mr-10 items-center mx-auto' src={ImgNotaDois} alt="Icone de papel refererindo-se a uma nota fiscal colorido" />
                <p className='sm:w-3/4 sm:mr-10 text-xs sm:text-base text-neutral-950 mt-5'>
                Nossa plataforma é projetada para rapidez e facilidade. Em apenas alguns passos, 
                você pode cadastrar os detalhes dos clientes e definir as datas de envio desejadas. 
                Diga adeus à preocupação com prazos perdidos. Com nosso sistema de alertas você 
                receberá notificações oportunas para cada envio agendado, garantindo 
                que você nunca mais deixe escapar uma data importante.
            </p>
            </div>
        </div>
        <Botao 
                className={'bg-stone-500 p-2 mt-10 mb-3 rounded-md text-slate-100 hover:font-bold hover:bg-stone-800 flex justify-evenly items-center w-32'} 
                type='button' 
                onClick={changePage}
            >
                Acessar 
                <BsFillArrowRightCircleFill />
        </Botao>
   </div>
    )
}

export default Inicio