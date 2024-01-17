import { useState } from "react";
import { fetchUpdate } from "../../Service/fetchUtils";
import Botao from "../Botao/Botao";
import { DescriptionNotesProps } from "./DescriptionNote.types";
import { MdModeEdit } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import clsx from "clsx";

function DescriptionNote({
  name,
  contract,
  service,
  portion,
  dateMaxSend,
  status,
}: DescriptionNotesProps) {
  const [able, setAble] = useState(true);
  const [editedName, setEditedName] = useState(name);
  const [editedService, setEditedService] = useState(service);
  const [editedContract, setEditedContract] = useState(contract);
  const [editedPortion, setEditedPortion] = useState(portion);
  const [editedDate, setEditedDate] = useState(dateMaxSend);
  const [editedDescription, setEditedDescription] = useState(status)

  const editInfosNote = () => {
    setAble(false);
  };

  const updateNote = (data: any) => {
    console.log(data)
    console.log('click')
  };

  return (
    <div>
      <div className="w-2/3 mx-auto mb-5">
        <div className="bg-gray-600 text-2xl w-full rounded-md font-semibold py-3 text-white">
          Informações sobre sua nota fiscal
        </div>
        <div className="flex justify-evenly pt-2 mx-auto w-32">
          <Botao
            className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition"
            onClick={editInfosNote}
          >
            <MdModeEdit />
          </Botao>
          <Botao className="bg-gray-600 text-white text-1xl p-2 rounded-lg hover:shadow-xl hover:-translate-y-1 transition">
            <FaFilePdf />
          </Botao>
        </div>
      </div>
      <form onSubmit={updateNote} className="text-xl bg-white w-2/3 mx-auto rounded-lg p-5 shadow-2xl overflow-y-auto">
        <div className="my-2 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">
            Cliente:
          </label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => {
              setEditedName(e.target.value)
            }}
            className={clsx(
              "text-center text-sm w-full p-2 rounded-md",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
          />
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">
            Serviço executado:
          </label>
          <input
            type="text"
            value={editedService}
            onChange={(e) => {
              setEditedService(e.target.value)
            }}
            className={clsx(
              "text-center text-sm w-full p-2 rounded-md",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
          />
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">
            Nº do Contrato:
          </label>
          <input
            type="text"
            value={editedContract}
            onChange={(e) => {
              setEditedContract(e.target.value)
            }}
            className={clsx(
              "text-center text-sm w-full p-2 rounded-md",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
          />
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">
            Quantidade de parcelas:
          </label>
          <input
            type="text"
            value={editedPortion}
            onChange={(e) => {
              setEditedPortion(e.target.value)
            }}
            className={clsx(
              "text-center text-sm w-full p-2 rounded-md",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
          />
        </div>
        <div className="my-4 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">
            Dia para envio em cada mês:
          </label>
          <input
            type="text"
            value={editedDate}
            onChange={(e) => {
              setEditedDate(e.target.value)
            }}
            className={clsx(
              "text-center text-sm w-full p-2 rounded-md",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
          />
        </div>
        <div className="my-2">
          <label htmlFor="name" className="font-medium mb-3 block text-lg">
            Descrição da Nota fiscal:
          </label>
          <textarea
            onChange={(e) => {
              setEditedDescription(e.target.value)
            }}
            className={clsx(
              "text-start p-2 rounded-md text-sm w-full h-24",
              able ? "bg-slate-200" : ""
            )}
            disabled={able}
            value={editedDescription}
          />
        </div>
        <Botao
            type="submit"
            className={clsx(
              able
                ? "hidden"
                : "block mx-auto text-sm text-white bg-green-500 rounded-lg transition hover:bg-green-700 hover:font-medium p-2"
            )}
          >
            Atualizar dados
          </Botao>
      </form>
    </div>
  );
}

export default DescriptionNote;
