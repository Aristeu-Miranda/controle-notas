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
      <div className="text-xl bg-slate-100 w-2/3 mx-auto rounded-lg p-10 shadow-2xl mb-20">
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block">Cliente:</label>
          <input type="text" value={name} className="text-center"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block">Serviço executado:</label>
          <input type="text" value={service} className="text-center w-full"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block">Nº do Contrato:</label>
          <input type="text" value={contract} className="text-center"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block">Quantidade de parcelas:</label>
          <input type="text" value={portion} className="text-center"/>
        </div>
        <div className="my-4 p-3 border-b-2 border-black">
          <label htmlFor="name" className="font-medium mb-3 block">Dia para envio em cada mês:</label>
          <input type="text" value={dateMaxSend} className="text-center w-full"/>
        </div>
        <div className="my-4 p-3">
          <label htmlFor="name" className="font-medium mb-3 block">Descrição da Nota fiscal:</label>
          <input type="text" value={status} className="text-center w-full"/>
        </div>
      </div>
    </div>
  );
}

export default DescriptionNote;
