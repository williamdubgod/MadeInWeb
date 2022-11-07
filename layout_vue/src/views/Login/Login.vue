<template>
  <div class="box">
    <nav>
      <ul>
        <li><a id="login" @click="loginOn()">Entrar</a></li>
        <li><a id="register" @click="registrarOn()">Registrar</a></li>
      </ul>
    </nav>
    <form id="logar">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="username" required />
      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,}$"
        title="A senha deve conter no mínimo 6 caracteres com pelo menos uma letra maiúscula, uma minúscula e um símbolo."
        v-model="password"
        required
      />
      <div class="botao">
        <input
          id="btn"
          type="submit"
          value="Entrar"
          @click.prevent="login"
          style="font-weight: bold"
        />
        <span>Esqueceu a senha?</span>
      </div>
    </form>
    <form id="registrar" style="margin: 25px auto; display: none">
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" required />
      <label for="sobrenome">Sobrenome</label>
      <input type="text" name="sobrenome" id="sobrenome" required />
      <label for="nascimento">Data de nascimento</label>
      <input type="date" name="nascimento" id="nascimento" required />
      <div class="botao">
        <input id="btn" type="submit" value="Registrar-se" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { LOGIN_REQUEST } from "@/store/modules/common/auth/actions.js";

export default {
  name: "LoginView",
  data: () => ({
    nome: "Registrar",
    username: null,
    password: null,
  }),
  components: {},
  methods: {
    ...mapActions("auth", {
      loginRequest: LOGIN_REQUEST,
    }),

    login() {
      const body = {
        username: this.username,
        password: this.password,
      };
      this.loginRequest({ body: body }).then((resposta) => {
        console.log(resposta);
      });
    },

    loginOn() {
      const formLogin = document.querySelector("#logar");
      const formRegistrar = document.querySelector("#registrar");
      const login = document.querySelector("#login");
      const register = document.querySelector("#register");

      formLogin.style.display = "flex";
      formRegistrar.style.display = "none";
      login.style.opacity = "1";
      register.style.opacity = "0.4";
      register.style.border = "none";
      register.style.fontWeight = "100";
      login.style.fontWeight = "bold";
      login.style.borderBottom = "1px solid rgb(255, 40, 112)";
    },

    registrarOn() {
      const formLogin = document.querySelector("#logar");
      const formRegistrar = document.querySelector("#registrar");
      const login = document.querySelector("#login");
      const register = document.querySelector("#register");

      formLogin.style.display = "none";
      formRegistrar.style.display = "flex";
      register.style.borderBottom = "1px solid rgb(255, 40, 112)";
      register.style.fontWeight = "bold";
      register.style.opacity = "1";
      login.style.opacity = "0.4";
      login.style.border = "none";
      login.style.fontWeight = "100";
    },
  },
  computed: {
    ...mapGetters("auth", ["isLoadingAuth"]),
  },
};
</script>

<style scoped lang="scss">
@import "Login.scss";
</style>
