/*Las interfaces se usan para ayudar a typescript a escribir el codigo*/
import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createAt: Date;
}
