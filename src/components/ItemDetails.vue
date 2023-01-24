<template>
  <div class="item-details-container">
    <div class="arrow-container">
      <img src="../assets/backArrow.svg" @click="goToHomePage" />
    </div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ItemDetails extends Vue {
  name: string = "";
  description: string = "";

goToHomePage(){
    this.$router.push({path: '/'})
}
  mounted() {
       const tmp = JSON.parse(window.localStorage.getItem("selectedItem") || "");
    if(tmp){
        this.name = tmp?.name || "";
        this.description = tmp?.description || "";
    }
  }

}
</script>
<style lang="scss" scoped>
h1{
    font-family: 'Montserrat Alternates';
}
.item-details-container{
    padding: 0 24px;
    .arrow-container{
        display: flex;
        img:hover{
            cursor: pointer;
        }
}
}

</style>
