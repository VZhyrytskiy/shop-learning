import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Product[] {
    return [
      { name: 'name', description: 'description', price: 233, category: Category.Dishes, isAvailable: true },
      { name: 'name2', description: 'description2', price: 233, category: Category.Clothes, isAvailable: true }
    ];
  }
}
