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
      <div className="text-xl">
        <p className="my-2">Cliente: {name}</p>
        <p className="my-2">Serviço executado: {service}</p>
        <p className="my-2">N° do contrato: {contract}</p>
        <p className="my-2">Quantidade de parcelas: {portion}</p>
        <p className="my-2">Dia para envio em cada mês: {dateMaxSend}</p>
        <p className="underline">Descrição da nota fiscal: </p>
        <p className="px-32">{status}</p>
      </div>
    </div>
  );
}

export default DescriptionNote;
