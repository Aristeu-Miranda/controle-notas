import Modal from "react-modal";
import { ModalProps } from "./Modal.type";
import { AiOutlineClose } from "react-icons/ai";

Modal.setAppElement("#root");

function ModalRegister({
  openmodal,
  closemodal,
  children,
  closeBtn,
}: ModalProps) {
  return (
    <Modal
      isOpen={openmodal}
      onRequestClose={closemodal}
      className="rounded-lg bg-slate-300 py-6 w-1/2 max-h-[800px] min-h-[350px] text-center mx-auto sm:my-9 shadow-2xl shadow-black overflow-y-auto overflow-x-hidden relative"
    >
      {children}
      {closeBtn && (
        <button
          className="bg-black text-white p-1 rounded-md absolute top-0 right-0"
          onClick={closemodal}
        >
          <AiOutlineClose />
        </button>
      )}
    </Modal>
  );
}

export default ModalRegister;
