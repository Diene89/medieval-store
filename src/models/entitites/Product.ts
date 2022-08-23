import { IProduct } from './interfaces/IProduct';

export default class Product implements IProduct {
  public readonly id: number;

  public name: string;

  public amount: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.amount = '';
  }
}