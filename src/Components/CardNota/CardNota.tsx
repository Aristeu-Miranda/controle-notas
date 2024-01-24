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
      <div className="bg-slate-100 mb-1 py-2 rounded-lg text-center w-56 h-62 border border-black hover:drop-shadow-2xl hover:-translate-y-2 transition relative">
        <div className="h-2/4 my-4">
          <FaBuilding className="mx-auto w-20 h-20 text-neutral-500" />
        </div>
        <div className="mb-2 text-sm font-semibold">Cliente: {name}</div>
        <div className="mb-3 text-sm">Contrato n°: {contract}</div>
        <Botao className="text-lime-600 text-sm transition hover:font-bold hover:text-lime-900 hover:underline" onClick={usingModal}>
          Mais informações
        </Botao>
        <ModalRegister openmodal={modalOpen} closemodal={usingModal} closeBtn={true}>
            <DescriptionNote _id={id} name={name} contract={contract} service={service} portion={portion} date={dateMaxSend} status={status}/>
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
