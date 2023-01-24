<template>
  <div class="item-container">
    <div class="id">{{ item.id }}</div>
    <div class="item-details" :class="isCompleted && 'completed'" @click="() => navigateToItemPage(item.id)">
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }} NIS</div>
      <div class="horizental-line"></div>
    </div>
    <div class="settings-container">
      <img src="../assets/editIcon.svg" @click="approveHandler" />
      <div class="vertical-line" />
      <img src="../assets/deleteIcon.svg" @click="deleteHandler" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ItemType } from "../types";
import VueRouter from "vue-router";

@Component
export default class Item extends Vue {
  @Prop({ required: true }) private item!: ItemType;

  get isCompleted() {
    return this.item.isCompleted;
  }
  approveHandler() {
    this.$emit("approveHandler", this.item.id);
  }

  deleteHandler() {
    this.$emit("deleteHandler", this.item.id);
  }
  navigateToItemPage(id: number) {
    if (!this.isCompleted) {
      window.localStorage.setItem("selectedItem", JSON.stringify({ name: this.item.name, description: this.item.description }));
      this.$router.push({ path: `/item/${id}` });
    }
  }

}
</script>
<style lang="scss" scoped>
@import "./src/scss/colors.scss";

.item-container {
  display: flex;
  font-size: 15px;
  align-items: center;
  border-bottom: 1px solid $light-grey;
  height: 48px;
  margin-top: 16px;
  .id {
    color: $orange;
    font-size: 24px;
    width: 56px;
    height: 100%;
    border-right: 1px solid $light-grey;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-details {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: left;
    margin: 0 16px;
    position: relative;
    transition: all 0.2s ease-in-out;

    .name {
      width: 70%;
      transition: margin 0.8s ease-in-out;
    }
    .price {
      width: 30%;
      transition: margin 0.8s ease-in-out;
    }
    .horizental-line {
      width: 0;
      height: 1px;
      background-color: $deletion-grey;
      position: absolute;
      top: 50%;
      transition: all 0.8s ease-in-out;
    }
    &.completed {
      color: $text-grey;
      .name {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-left: 7px;
      }
      .price {
        margin-right: 7px;
      }
      .horizental-line {
        width: 100%;
      }
    }
    &:hover:not(.completed) {
      color: $orange;
      cursor: pointer;
    }
  }
  .settings-container {
    display: flex;
    gap: 16px;
    .vertical-line {
      width: 1px;
      height: 24px;
      margin: 0 14px 0 9px;
      background-color: $light-grey;
    }

    img:hover {
      cursor: pointer;
    }
  }
}
</style>
