import { useState } from "react";
import { fetchUpdate } from "../../Service/fetchUtils";
import Botao from "../Botao/Botao";
import { DescriptionNotesProps } from "./DescriptionNote.types";
import { MdModeEdit, } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import clsx from 'clsx';

function DescriptionNote({
  name,
  contract,
  service,
  portion,
  dateMaxSend,
  status,
}: DescriptionNotesProps) {

  const [able, setAble] = useState(true)

  const editInfosNote = () => {
    setAble(false)
  }


  const updateNote = () => {
    const urlApiClientsUpdate = "https://controle-api-mhpv.onrender.com/notes";
    fetchUpdate(urlApiClientsUpdate)
    
  }

  return (
    <div>
      <div className="w-2/3 mx-auto mb-5">
          <div className="bg-gray-600 text-2xl w-full rounded-md font-semibold py-3 text-white">
              Informações sobre sua nota fiscal
          </div>
          <div className="flex justify-evenly pt-2 mx-auto w-32">
            <Botao className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition" onClick={editInfosNote}>
              <MdModeEdit />
            </Botao>
            <Botao className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition">
              <FaFilePdf />
            </Botao>
          </div>
      </div>
      <form className="text-xl bg-white w-2/3 mx-auto rounded-lg p-5 shadow-2xl overflow-y-auto">
        <div className="my-2 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Cliente:</label>
          <input type="text" value={name} className={clsx('text-center text-sm w-full p-2 rounded-md', able ? 'bg-slate-200' : '')} disabled={able} />
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Serviço executado:</label>
          <input type="text" value={service} className={clsx('text-center text-sm w-full p-2 rounded-md', able ? 'bg-slate-200' : '')} disabled={able}/>
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Nº do Contrato:</label>
          <input type="text" value={contract} className={clsx('text-center text-sm w-full p-2 rounded-md', able ? 'bg-slate-200' : '')} disabled={able}/>
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Quantidade de parcelas:</label>
          <input type="text" value={portion} className={clsx('text-center text-sm w-full p-2 rounded-md', able ? 'bg-slate-200' : '')} disabled={able}/>
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">Dia para envio em cada mês:</label>
          <input type="text" value={dateMaxSend} className={clsx('text-center text-sm w-full p-2 rounded-md', able ? 'bg-slate-200' : '')} disabled={able}/>
        </div>
        <div className="my-2">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">Descrição da Nota fiscal:</label>
          <textarea className={clsx('text-start p-2 rounded-md text-sm w-full h-24', able ? 'bg-slate-200' : '')} disabled={able}>{status}</textarea>
        </div>
        <div>
          <Botao className={clsx(able ? 'hidden' : 'block mx-auto text-sm text-white bg-green-500 rounded-lg transition hover:bg-green-700 hover:font-medium p-2')} onClick={updateNote}>
            Atualizar dados
          </Botao>
        </div>
      </form>   
    </div>
  );
}

export default DescriptionNote;
