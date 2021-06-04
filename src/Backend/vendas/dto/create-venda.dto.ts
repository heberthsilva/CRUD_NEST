export class CreateVendaDto {
    id_pedido:string;
    id_cliente: string;
    id_funcionario: string;
    id_produto:string;
    preco: number;
    cardNumber: string;
    cardHolder: string;
    expirationMonth: string;
    expirationYear: string;
    ccv: number;
}
