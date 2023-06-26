
export const usuarioStore = {
  usuarios: [],
  usuarioLogueado: "Login",

  findUser(nombre) {
    const usuario = this.usuarios.find((usuario) => usuario.nombre === nombre);
    return usuario ? usuario : ''
  },
  findPassword(password) {
    const pass = this.usuarios.find((pass) => pass.password === password);
    return pass ? pass : ''
  },
  
};
