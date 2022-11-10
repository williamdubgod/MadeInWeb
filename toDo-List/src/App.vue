<template>
  <h1>To Do List</h1>
  <div>
    <input type="text" name="toDo" id="toDo" v-model="itemAtual" />
    <br />
    <button @click="adicionarItem()">Adicionar</button>
    <ul>
      <li id="itens" v-for="item in itens" :key="item">
        {{ item }} <button @click="removerItem(item)">Remover</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      itens: [],
      itemAtual: "",
    };
  },
  methods: {
    adicionarItem() {
      this.itens.push(this.itemAtual);
      this.itemAtual = "";
    },
    removerItem(remover) {
      this.itens = this.itens.filter((item) => item != remover);
    },
  },
};
</script>

<style></style>
