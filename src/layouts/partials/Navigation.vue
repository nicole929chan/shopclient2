<template>
  <nav class="menu">
    <ul>
      <li><router-link :to="{ name: 'test-view' }">TestView</router-link></li>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'premier' }">Premier</router-link></li>
      <li><router-link :to="{ name: 'login' }">SignIn</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
