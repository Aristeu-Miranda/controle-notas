import { useState } from "react";
import { fetchUpdate } from "../../Service/fetchUtils";
import Botao from "../Botao/Botao";
import { DescriptionNotesProps } from "./DescriptionNote.types";
import { MdModeEdit, } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

function DescriptionNote({
  name,
  contract,
  service,
  portion,
  dateMaxSend,
  status,
}: DescriptionNotesProps) {

  const [able, setAble] = useState(true)


  const updateNote = () => {
    const urlApiClientsUpdate = "https://controle-api-mhpv.onrender.com/notes";
    fetchUpdate(urlApiClientsUpdate)
    setAble(false)
  }

  return (
    <div>
      <div className="w-2/3 mx-auto mb-5">
          <div className="bg-gray-600 text-2xl w-full rounded-md font-semibold py-3 text-white">
              Informações sobre sua nota fiscal
          </div>
          <div className="flex justify-evenly pt-2 mx-auto w-32">
            <Botao className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition" onClick={updateNote}>
              <MdModeEdit />
            </Botao>
            <Botao className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition" onClick={updateNote}>
              <FaFilePdf />
            </Botao>
          </div>
      </div>
      <form className="text-xl bg-white w-2/3 mx-auto rounded-lg p-5 shadow-2xl overflow-y-auto">
        <div className="my-2 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Cliente:</label>
          <input type="text" value={name} className="text-center text-sm" disabled={able}/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Serviço executado:</label>
          <input type="text" value={service} className="text-center text-sm w-full"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Nº do Contrato:</label>
          <input type="text" value={contract} className="text-center text-sm"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Quantidade de parcelas:</label>
          <input type="text" value={portion} className="text-center text-sm"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">Dia para envio em cada mês:</label>
          <input type="text" value={dateMaxSend} className="text-center text-sm w-full"/>
        </div>
        <div className="my-2 p-3">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">Descrição da Nota fiscal:</label>
          <textarea className="text-start text-sm w-full h-24" disabled={able}>{status}</textarea>
        </div>
        <div>
          <Botao className="">
            Enviar
          </Botao>
        </div>
      </form>   
    </div>
  );
}

export default DescriptionNote;
