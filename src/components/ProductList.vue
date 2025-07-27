<script lang="ts">
import type { CartDetail, Product } from '../model/types.ts';
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue';

export default{
  components:{
    ProductCard,
    Cart
  },
  data() {
    return{
      products: <Array<Product>> [
        {id:1, name: 'Silla', price: 56},
        {id:2, name: 'Monitor', price: 450},
        {id:3, name: 'Micrófono',price:20}
      ],
      details: <Array<CartDetail>>[]
    }
  },
  methods:{
    onProductAdded(productId: number){
      const detailFound =this.details.find(d => 
        d.productId === productId);
      
      if(detailFound){
          detailFound.quantity += 1;
      }else{
        this.details.push({
          productId,
          quantity:1
        });
      }

    }
  }
}
</script>


<template>
  <v-row>
    <v-col v-for="p in products" cols="4">
      <ProductCard 
        :product="p"
        @addProduct="onProductAdded(p.id)" />
    </v-col>
  </v-row>

  <Cart :details="details" />
</template>