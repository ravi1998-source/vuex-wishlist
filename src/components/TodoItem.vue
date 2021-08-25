<template>
  <div>
    <div class="row my-3 justify-content-between align-items-center">
      <h3 v-if="!editing">{{wish.title}}</h3>

      <div v-else class="mr-2 row justify-content-between align-items-center col">
        <input
          v-bind:value="wishText"
          @change="wishTextChange"
          type="text"
          class="col-7 form-control"
        />
        <!-- <div>
          <input :checked="completed" class="mr-1" @change="onCompleted" type="checkbox" />
          <label class>Completed</label>
        </div> -->
      </div>
      <div class="row align-items-center">
        <button @click="updateWishI(wish)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
        <button @click="deleteWish(wish.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    wish: {}
  },
  data() {
    return {
      wishText: "",
      editing: false,
      completed: false
    };
  },
  methods: {
    ...mapActions(["deleteWish", "updateWish", "changeCompleted"]),
    onCompleted() {
      this.completed = this.completed == true ? false : true;
    },
    wishTextChange(e) {
      this.wishText = e.target.value;
    },
    updateWishI(wish) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.wishText = wish.title;
        this.updateWish(wish);
      } else {
        wish.title = this.wishText;
        wish.complete = this.completed;
        this.changeCompleted();
      }
    }
  }
};
</script>

<style scoped>
</style>