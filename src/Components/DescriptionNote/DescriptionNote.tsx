import { DescriptionNotesProps } from "./DescriptionNote.types";

function DescriptionNote({
  name,
  contract,
  service,
  portion,
  dateMaxSend,
  status,
}: DescriptionNotesProps) {
  return (
    <div>
      <div className="bg-gray-500 text-2xl w-1/2 mx-auto rounded-md font-semibold text-white py-3 mb-5">
        Informações sobre sua nota fiscal
      </div>
      <div className="text-xl bg-white w-2/3 mx-auto rounded-lg p-5 shadow-2xl overflow-y-auto">
        <div className="my-2 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium block text-lg">Cliente:</label>
          <input type="text" value={name} className="text-center text-sm"/>
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
          <textarea className="text-start text-sm w-full h-32">{status}</textarea>
        </div>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default DescriptionNote;
