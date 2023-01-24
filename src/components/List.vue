<template>
  <div class="list-container">
    <div v-for="item in items" :key="item.id">
      <Item :item="item" @approveHandler="approveHandler" @deleteHandler="deleteHandler" />
    </div>
    <div class="summary">
      <div class="total-title">Total:</div>
      <div class="total-sum">{{ sumAllItems() }} NIS</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ItemType } from "../types";
import Item from "./Item.vue";

@Component({ components: { Item } })
export default class List extends Vue {
  @Prop() private items!: ItemType[];

  sumAllItems() {
    return this.items.reduce((sum, currItem) => sum + Number(currItem.price), 0);
  }

  approveHandler(id: number) {
    this.$emit("approveHandler", id);
  }

  deleteHandler(id: number) {
    this.$emit("deleteHandler", id);
  }
}
</script>
<style lang="scss" scoped>
.list-container {
  overflow: scroll;
  max-height: 60vh;
}
.summary {
  display: flex;
  margin: 16px 107px 0px 66px;
  text-align: left;
  .total-title {
    width: 70%;
  }
  .total-sum {
    width: 30%;
    white-space: nowrap;
  }
}
</style>
