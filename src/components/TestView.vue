<template>
  <div>
    <v-btn @click="getCategories">categories</v-btn>
    {{ JSON.stringify(categories) }}
    <hr />
    <v-btn @click="getProducts">products</v-btn>
    <v-btn @click="addProduct">add</v-btn>
    {{ JSON.stringify(products) }}
    <hr />
    <div>higher order function 的用法</div>
    {{ printTitle }}
    <hr />
    <div>display all products using getters</div>
    <ul>
      <li v-for="fool in fools" :key="fool.slug">{{ fool.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TestView',
  data() {
    return {
      categories: [],
      products: [],
    };
  },
  computed: {
    ...mapGetters({
      fools: 'products/products',
    }),
    // fools() {
    //   return this.$store.getters['products/products'];
    // },
    printTitle() {
      // 不是取state這種一般的用法
      // 而是返回函數, 挖~ Higher Order Function 又來了
      let hof = this.$store.getters['products/printTitle'];

      return hof({
        id: 999,
        slug: 'fake-product-999',
        title: 'Fake H-O function',
      });
    },
  },
  methods: {
    getCategories() {
      this.categories = this.$store.getters['categories/categories'];
    },
    getProducts() {
      this.products = this.$store.getters['products/products'];
    },
    addProduct() {
      let newProduct = {
        id: 2,
        slug: 'fake-product-2',
        title: 'Fake Product 2',
      };
      this.$store.dispatch('products/addProduct', newProduct);
    },
  },
};
</script>
