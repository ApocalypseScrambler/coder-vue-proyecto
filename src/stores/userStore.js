
export const userStore = {
  usuario: [],
  usuarioLogueado: "Login",
  usuarioIsAdmin: false,

  findUser(usuario) {
    const user = this.usuarios.find((user) => user.usuario === usuario);
    return user ? user : ''
  },
  findPassword(password) {
    const pass = this.usuarios.find((pass) => pass.password === password);
    return pass ? pass : ''
  },
  
  findAdmin(usuario) {
    const user = this.usuarios.find((user) => user.usuario === usuario);
    return user.admin
  }
  };
