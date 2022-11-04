<template>
  <div class="box">
    <nav>
      <ul>
        <li><a id="login" onclick="loginOn()">Entrar</a></li>
        <li><a id="register" onclick="registrarOn()">Registrar</a></li>
      </ul>
    </nav>
    <form id="logar">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,}$"
        title="A senha deve conter no mínimo 6 caracteres com pelo menos uma letra maiúscula, uma minúscula e um símbolo."
        required
      />
      <div class="botao">
        <input id="btn" type="submit" value="Entrar" style="font-weight: bold" />
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
export default {
  name: "LoginView",
};
</script>

<style scoped lang="scss">
@import "Login.scss";
</style>
