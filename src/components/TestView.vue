<template>
  <div>
    <button @click="getCategories">categories</button>
    {{ JSON.stringify(categories) }}
    <hr />
    <button @click="getProducts">products</button>
    <button @click="addProduct">
      add
    </button>
    {{ JSON.stringify(products) }}
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data() {
    return {
      categories: [],
      products: [],
    };
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
