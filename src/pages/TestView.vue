<template>
  <div>
    <h1>this is test view</h1>
    <p class="red white--text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis velit
      laboriosam quidem obcaecati minima voluptatum perferendis saepe deleniti
      dolorum, maiores molestias aliquam dignissimos delectus vero consectetur
      mollitia. Eum, distinctio aspernatur!
    </p>
    <p class="pink lighten-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus modi
      consequuntur dolorem magnam quia ipsum voluptatibus iste suscipit, alias
      laboriosam, nam sint nobis, ut praesentium quod enim porro ipsam atque?
    </p>
    <TestView />
  </div>
</template>

<script>
import TestView from '@/components/TestView';

export default {
  components: {
    TestView,
  },
};
</script>
