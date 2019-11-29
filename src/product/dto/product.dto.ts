/*Definir lo que se enviara entre cliente y servidor*/
export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
