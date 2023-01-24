<template>
  <div class="add-item-container">
    <div class="exit-container">
      <img class="exit" src="../assets/xIcon.svg" @click="toShowPopup(false)" />
    </div>
    <div>
      <input class="name" placeholder="Name" v-model="name" required type="string" />
      <input placeholder="Price" v-model="price" required type="number" min="0" />
    </div>
    <textarea placeholder="Description" v-model="description" required type="string" />
    <img class="next" src="../assets/nextArrow.svg" @click="addNewItemHandler" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ItemType } from "../types";
@Component
export default class AddItemPopup extends Vue {
  @Prop({ required: true }) private toShowPopup!: (val: boolean) => {};
  @Prop({ required: true }) private addItemHandler!: (item: ItemType) => {};

  name = "";
  price = null;
  description = "";
  cleanup() {
    this.name = "";
    this.price = null;
    this.description = "";
  }
  addNewItemHandler() {
    if (this.name && this.price) {
      const itemToAdd = {
        name: this.name,
        price: this.price ?? 0,
        description: this.description,
      };
      this.addItemHandler(itemToAdd);
      this.toShowPopup(false);
      this.cleanup();
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./src/scss/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap");
input,
textarea {
  border: none;
  border-bottom: 1px solid $deletion-grey;
  height: 40px;
  font-family: "Mulish";
  &:focus {
    &::placeholder {
      color: transparent;
      display: none;
    }
  }
}
.name {
  margin-right: 20px;
}
input::placeholder,
textarea::placeholder {
  position: absolute;
  top: 0;
  color: $text-grey;
}

textarea:focus,
input:focus {
  outline: none;
}

textarea {
  resize: none;
  width: 85%;
  height: 50%;
  border-bottom: none;
  margin-top: 30px;
}
.exit-container {
  width: 100%;
  text-align: end;
}
img:hover {
  cursor: pointer;
}
.next {
  position: absolute;
  top: 35%;
}
</style>
