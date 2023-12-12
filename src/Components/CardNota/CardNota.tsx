import { useState } from "react";
import Botao from "../Botao/Botao";
import { CardNotaProps } from "./CardNota.types";
import { AiOutlineClose } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import ModalRegister from "../Modal/Modal";
import DescriptionNote from "../DescriptionNote/DescriptionNote";


function CardNota({
  name,
  contract,
  portion,
  dateMaxSend,
  service,
  status,
  id,
  removeNotas,
}: CardNotaProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function usingModal() {
    if (modalOpen) {
      setModalOpen(false);
    } else setModalOpen(true);
  }

  return (
    <div>
      <div className="bg-slate-100 mb-1 py-2 rounded-lg text-center w-60 h-72 border border-black relative">
        <div className="h-2/4 my-4">
          <FaBuilding className="mx-auto w-28 h-28 text-neutral-500" />
        </div>
        <div className="mb-2 font-semibold">Cliente: {name}</div>
        <div className="mb-3">Contrato n°: {contract}</div>
        <Botao className="text-lime-600 transition hover:font-bold hover:text-lime-900 hover:underline" onClick={usingModal}>
          Acessar
        </Botao>
        <ModalRegister openmodal={modalOpen} closemodal={usingModal}>
            <DescriptionNote name={name} contract={contract} service={service} portion={portion} dateMaxSend={dateMaxSend} status={status}/>
        </ModalRegister>
        <Botao
          className={
            "bg-black text-white p-1 rounded-md absolute -top-3 -right-3"
          }
          onClick={() => removeNotas(id)}
        >
          <AiOutlineClose />
        </Botao>
      </div>
    </div>
  );
}

export default CardNota;
