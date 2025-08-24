<script lang="ts">
import LeftMenu from '@/components/LeftMenu.vue';
import ProductList from '@/components/ProductList.vue';
import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParams(categoryIdParam: string | string[]){
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParam);
  productsStore.selectCategory(categoryId);
}

export default {
  components: {
    ProductList,
    LeftMenu,
  },
  beforeRouteEnter(to){
    console.log('beforeRouteEnter' ,to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  beforeRouteUpdate(to) {
    console.log( 'beforeRouteUpdate' ,to.params);
    updateCategoryFromRouteParams(to.params.categoryId);
  },
  mounted(){
    console.log('mounted');

    setTimeout(()=>{
      const productsStore = useProductsStore();
      productsStore.fetchProducts();
    }, 4000);

    setTimeout(()=>{
      const categoriesStore = useCategoriesStore();
      categoriesStore.fetchCategories();
    }, 2000);


  }
}
</script>

<template>
  <main>

    <v-row>
      <v-col cols="2">
        <LeftMenu />
      </v-col>

      <v-col cols="10">
        <ProductList />
      </v-col>
    </v-row>

  </main>
</template>
