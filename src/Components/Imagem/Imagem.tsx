import { ImagemProps } from "./Imagem.types"

function Imagem({ src, alt }: ImagemProps) {
    return (
        <img src={src} alt={alt}/>
    )
}

export default Imagem