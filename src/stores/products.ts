import type { Product } from "@/model/types";
import { defineStore } from "pinia";

export const useProductsStore = defineStore('product', {
  state: () : {_products : Product[], categoryId : number | null} => ({
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
      if(!state.categoryId){
        return state._products;
      }
      return state._products.filter(p => p.categoryId === state.categoryId);
    }
  },
  actions: {
    selectCategory(categoryId: number){
      this.categoryId = categoryId;
    }
  }
})
