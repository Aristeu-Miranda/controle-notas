import ImgNota from '../../Images/nf-img.png';
import ImgNotaDois from '../../Images/nf-img-dois.png'

function Home() {
    return (
       <div className='pt-10 flex flex-col items-center'>
            <h1 className='text-3xl pb-10'>CN - Rápido, simples e fácil</h1>
            <div className='max-w-5xl'>
                <div className='flex mb-10 text-right items-center'>
                    <p className='w-3/4 mr-10'>
                    Simplificando o controle de envio de notas fiscais. 
                    Apresentamos uma solução eficiente para garantir que os prazos de envio 
                     de notas aos clientes sejam sempre cumpridos. Nossa interface 
                     intuitiva permite que você registre facilmente os destinatários 
                     e monitore as datas de envio mensal, proporcionando um processo 
                     simplificado de organização.
                    </p>
                    <img className='w-48 h-48' src={ImgNota} alt="Icone de papel refererindo-se a uma nota fiscal colorido" />
                </div>
                <div className='flex items-center'>
                    <img className='w-48 h-48 mr-10' src={ImgNotaDois} alt="Icone de papel refererindo-se a uma nota fiscal colorido" />
                    <p className='w-3/4'>
                    Nossa plataforma é projetada para rapidez e facilidade. Em apenas alguns passos, 
                    você pode cadastrar os detalhes dos clientes e definir as datas de envio desejadas. 
                    Diga adeus à preocupação com prazos perdidos. Com nosso sistema de alertas você 
                    receberá notificações oportunas para cada envio agendado, garantindo 
                    que você nunca mais deixe escapar uma data importante.
                </p>
                </div>
            </div>
       </div>
    )
}

export default Home