<template>
  <div>
    <h2>Drop your wish:</h2>
    <div class="row">
      <input
        @change="wishTextChange"
        v-bind:value="wishText"
        class="col form-control mr-2"
        type="text"
      />
      <button @click="addWishI" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      wishText: ""
    };
  },
  methods: {
    ...mapActions(["addWish"]),
    wishTextChange(e) {
      this.wishText = e.target.value;
    },

    addWishI() {
      this.addWish({
        id: v1(),
        title: this.wishText,
        complete: false
      });
      this.wishText = "";
    }
  }
};
</script>

<style scoped>
</style>