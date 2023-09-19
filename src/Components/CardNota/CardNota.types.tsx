export interface CardNotaProps {
    name: string;
    contract: string;
    service: string;
    portion: string;
    status: string;
    dateMaxSend: number | string;
    removeNotas: (id: number) => void;
    id: number
}