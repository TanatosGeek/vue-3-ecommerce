<script lang="ts">
import type { Product } from '../model/types';
import ProductCard from '../components/ProductCard.vue'

export default{
  components:{
    ProductCard
  },
  props: ['details'],
  data() : {products : Product[]} {
    return{
      products: [
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
          categoryId: 1
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
          categoryId: 1
        },
        {
          id:6,
          name: 'Mouse Gamer',
          price:20,
          image: '/products/mouse.jpg',
          categoryId: 1
        }
      ]
    }
  }
}
</script>


<template>
  <v-row>
    <v-col v-for="p in products" :key="p.id" cols="4">
      <ProductCard
        :product="p"
        />
    </v-col>
  </v-row>
</template>
