import Loading from '../../Images/loading.svg'
function Loader() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <img src={Loading} className='w-24 h-24' alt="Carregando dados API" />
        </div>
    )
}

export default Loader