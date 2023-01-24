<template>
  <div>
    <div class="page-container">
      <h1>Shopping List</h1>
      <List :items="list" @approveHandler="approveHandler" @deleteHandler="deleteHandler" />
      <div class="button-container">
      <button @click="() => toShowPopup(true)"><span>+</span><span>Add Product</span></button></div>
    </div>

    <AddItemPopup
      :class="showAddItemPopup && 'active'"
      class="popup"
      :toShowPopup="toShowPopup"
      :addItemHandler="addItemHandler"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ItemType } from "../types";
import AddItemPopup from "./AddItemPopup.vue";
import List from "./List.vue";

@Component({ components: { List, AddItemPopup } })
export default class ShoppingPage extends Vue {
  list = [
    {
      id: 1,
      name: "tomatos",
      price: 5,
      description: "asds",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Cucumbers",
      price: 22,
      description: "The tomato is the edible berry of the plant Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in western South America and Central America.[2][3] The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived.[3][4] Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.[2][5] The Aztecs used tomatoes in their cooking at the time of the Spanish conquest of the Aztec Empire, and after the Spanish encountered the tomato for the first time after their contact with the Aztecs, they brought the plant to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.[2]",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Bread",
      price: 2,
      description: "asds",
      isCompleted: false,
    },
  ];
  showAddItemPopup = false;
  toShowPopup(val: boolean) {
    this.showAddItemPopup = val;
  }
  fixListIndexed() {
    this.list.map((item: ItemType, ind) => (item.id = ind + 1));
  }
  approveHandler(id: number) {
    this.list.map((item: ItemType) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;
    });
  }

  deleteHandler(id: number) {
    this.list = this.list.filter((item: ItemType) => item.id !== id);
    setTimeout(() => this.fixListIndexed(), 0);
  }

  addItemHandler(item: ItemType) {
    this.list.push({ ...item, id: this.list.length + 1, isCompleted: false });
  }
}
</script>
<style lang="scss" scoped>
@import "./src/scss/colors.scss";

.page-container {
  margin: 24px;
}
.popup {
  transform: translateY(120%);
  height: 100%;
  box-shadow: 0px -4px 4px rgb(0 0 0 / 25%);
  width: -webkit-fill-available;
  top: 20%;
  right: 0;
  padding: 16px;
  position: fixed;
  background: white;
  transition: transform 0.4s ease-in-out;
  &.active {
    transform: translateY(0);
  }
}
.button-container{
    font-size: 15px;
    margin-top: 56px;
    display: flex;
    justify-content: center;
  button{
   background: transparent;
    border: none;
    gap: 26px;
    display: flex;
    color: $orange;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
