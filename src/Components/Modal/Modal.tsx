import Modal from 'react-modal';
import { ModalProps } from './Modal.type';
import { AiOutlineClose } from 'react-icons/ai';

Modal.setAppElement('#root');

function ModalCadastro({ openmodal, closemodal, children }: ModalProps) {

    return (
        <Modal
        isOpen={openmodal}
        onRequestClose={closemodal}
        className="rounded-lg bg-slate-300 py-6 w-1/2 text-center mx-auto my-9 shadow-2xl shadow-black relative"
        >
            {children}
            <button className='bg-black text-white p-1 rounded-md absolute -top-3 -right-3' onClick={closemodal}><AiOutlineClose /></button>
        </Modal>
    )
}

export default ModalCadastro