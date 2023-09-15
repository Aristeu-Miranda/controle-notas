import Modal from 'react-modal';
import { ModalProps } from './Modal.type';
import { AiOutlineClose } from 'react-icons/ai';

Modal.setAppElement('#root');

function ModalCadastro({ openmodal, closemodal, children }: ModalProps) {

    return (
        <Modal
        isOpen={openmodal}
        onRequestClose={closemodal}
        className="rounded-lg bg-slate-300 py-6 w-1/2 text-center mx-auto my-9 shadow-2xl shadow-black"
        >
            {children}
        <button className='bg-black text-white p-1 rounded-md fixed left-[1355px] top-6' onClick={closemodal}><AiOutlineClose /></button>
        </Modal>
    )
}

export default ModalCadastro