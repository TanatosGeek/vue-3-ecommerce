import type { Product } from "@/model/types";
import { defineStore } from "pinia";

export const useProductsStore = defineStore('product', {
  state: () : {_products : Product[], categoryId : number | null, order: string} => ({
    order: '',
    categoryId: null,
    _products: [
        {
          id:1,
          name: 'Silla',
          price: 56,
          image: '/products/silla.webp',
          categoryId: 1
        },
        {
          id:2,
          name: 'Monitor',
          price: 450,
          image: '/products/monitor.jpg',
          categoryId: 1
        },
        {
          id:3,
          name: 'Micrófono',
          price:20,
          image: '/products/microfono.jpg',
          categoryId: 2
        },
        {id:4,
          name: 'Parlante',
          price: 56,
          image: '/products/parlantes.jpg',
          categoryId: 1
        },
        {id:5,
          name: 'Audifono',
          price: 450,
          image: '/products/headphones.jpg',
          categoryId: 2
        },
        {
          id:6,
          name: 'Mouse Gamer',
          price:20,
          image: '/products/mouse.jpg',
          categoryId: 2
        }
      ]
  }),
  getters: {
    products(state){
      let products = null;
      //Filter
      if(state.categoryId){
        products =  state._products.filter(p => p.categoryId === state.categoryId);
      }else{
        products = state._products;
      }
      //Order
      if(state.order === ''){
        return products;
      }

      if(state.order === 'price'){
        return products.sort((a,b) => a.price - b.price);
      }

      if(state.order === 'name'){
        return products.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  },
  actions: {
    selectCategory(categoryId: number){
      this.categoryId = categoryId;
    },
    orderByPrice(){
      this.order = 'price';
    },
    orderByName(){
      this.order = 'name';
    }
  }
})
