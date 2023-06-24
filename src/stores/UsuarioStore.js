
export const usuarioStore = {
  usuarios: [],

  findUser(username) {
    const usuario = this.usuarios.find((usuario) => usuario.username === username);
    return usuario ? usuario : ''
  },
  findPassword(password) {
    const pass = this.usuarios.find((pass) => pass.password === password);
    return pass ? pass : ''
  },
  
};
