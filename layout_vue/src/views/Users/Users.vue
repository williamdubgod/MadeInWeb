<template>
  <div class="box">
    <div class="divTable">
      <section>
        <select name="Usuarios">
          <option>Usuários</option>
          <option v-for="user in users" :key="user.username">{{ user.username }}</option>
        </select>
        <select name="Nomes">
          <option>Nomes</option>
          <option v-for="user in users" :key="user.username">{{ user.name }}</option>
        </select>
        <select name="Emails">
          <option>E-Mails</option>
          <option v-for="user in users" :key="user.username">{{ user.email }}</option>
        </select>
      </section>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Nome</th>
            <th>E-Mail</th>
          </tr>
        </thead>
        <hr />
        <tbody>
          <tr v-for="user in users" :key="user.username" id="linhas">
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
    };
  },
  mounted() {
    this.buscarUsuarios();
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
  justify-content: center;
}

select {
  width: 356px;
  height: 44px;
  color: #5d6779;
  margin-right: 10px;
  box-sizing: border-box;
  border: 1px solid #bcc2cd;
  border-radius: 5px;
}

table {
  width: 1102px;
  height: 346px;
}

th {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
}

td {
  width: 219.76px;
  padding: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
}

#linhas:nth-child(odd) {
  background-color: #e5e9f2;
}
</style>
