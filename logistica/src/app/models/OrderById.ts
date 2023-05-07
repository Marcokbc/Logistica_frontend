export type OrderById = {
    id: number,
    nome: string,
    origem: string,
    destino: string,
    status: string,
    codigoRastreio: string,
    rotas: [
        {
            id: number,
            nomeCidade: string,
            dataRota: string,
            idPedido: number
        }
    ]
}