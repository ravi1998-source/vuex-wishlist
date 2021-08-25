<template>
  <div>
    <div v-for="wish in allWWishes" :key="wish.id">
      <WishItem :wish="wish" />
    </div>
  </div>
</template>

<script>
import WishItem from "@/components/TodoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    WishItem
  },
  computed: {
    ...mapGetters(["allWWishes", "completed"])
  }
};
</script>

<style scoped>
</style>