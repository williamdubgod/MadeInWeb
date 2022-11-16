<template>
  <div class="box">
    <div class="divTable">
      <section>
        <input type="text" placeholder="Buscar por nome, usuário ou e-mail" v-model="search" />
        <button @click="limparFiltro">Limpar filtro</button>
      </section>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Nome</th>
            <th>E-Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in usuariosFiltrados" :key="user.username" class="linhas">
            <td>{{ user.username }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserViews",
  data() {
    return {
      users: [],
      search: "",
    };
  },
  mounted() {
    this.buscarUsuarios();
  },
  computed: {
    usuariosFiltrados() {
      let usuarios = [];
      usuarios = this.users.filter((user) => {
        return (
          user.username.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          user.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          user.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
      return usuarios;
    },
  },
  methods: {
    buscarUsuarios() {
      const token = this.$store.getters["auth/token"];
      axios
        .get("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.users = response.data;
        });
    },
    limparFiltro() {
      this.search = "";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,100;1,9..144,200;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700;1,9..144,800;1,9..144,900&family=Poppins&display=swap");

.box {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.divTable {
  background-color: #ffffff;
  width: 1175px;
  height: 526px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

input {
  width: 356px;
  height: 44px;
  color: #5d6779;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #bcc2cd;
  border-radius: 5px;
}

button {
  height: 44px;
  border: 1px solid #bcc2cd;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e5e9f2;
}

button:hover {
  background-color: #5d6779;
  color: #f5f5f5;
}

table {
  width: 1102px;
  border-collapse: collapse;
}

thead {
  border-bottom: 1px solid #bcc2cd;
}

th {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

tr {
  height: 40px;
}

td {
  width: calc(100% / 3);
  padding: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}

.linhas:nth-child(odd) {
  background-color: #e5e9f2;
}
</style>
