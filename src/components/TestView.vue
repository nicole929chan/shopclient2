<template>
  <div>
    <button @click="getCategories">categories</button>
    {{ JSON.stringify(categories) }}
    <hr />
    <button @click="getProducts">products</button>
    <button @click="addProduct">add</button>
    {{ JSON.stringify(products) }}
    <hr />
    <div>higher order function 的用法</div>
    {{ printTitle }}
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
  computed: {
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
