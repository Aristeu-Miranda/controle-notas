import Loading from '../../Images/loading.svg'
function Loader() {
    return (
        <div className='w-full h-full text-center font-medium'>
            <div className='m-auto mb-10 w-28 h-28 rounded-full bg-transparent block border-8 border-slate-400 border-t-4 border-t-transparent animate-slide'></div>
            <span>Carregando registros...</span>
        </div>
    )
}

export default Loader