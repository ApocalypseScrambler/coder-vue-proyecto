
export const userStore = {
  
  namespaced: true,

  state: {
    usuario: [],
    usuarioLogueado: "Login",
    usuarioIsAdmin: false,
    productoID: 0,
  },

  getters: {
    usuario: state => state.usuario,
    usuarioLogueado: state => state.usuarioLogueado,
    usuarioIsAdmin: state => state.usuarioIsAdmin,
    productoID: state => state.productoID
  },

  mutations: {
    setUsuario: (state, usuario) => state.usuario = usuario,   
    setUsuarioLogueado: (state, usuarioLogueado) => state.usuarioLogueado = usuarioLogueado,
    setUsuarioIsAdmin: (state, usuarioIsAdmin) => state.usuarioIsAdmin = usuarioIsAdmin,
    setProductoID: (state, productoID) => state.productoID = productoID,
  },

  actions: {
    LogOut: ({ commit }) => {
      const usuarioLogueado = "Login";
      const usuarioIsAdmin = false ;
      commit('setUsuarioLogueado', usuarioLogueado);
      commit('setUsuarioIsAdmin', usuarioIsAdmin);
    },

    setUsuario: ({ commit}, usuario) => {
      commit('setUsuario', usuario)
    },

    setUsuarioLogueado: ({ commit}, usuarioLogueado) => {
      commit('setUsuarioLogueado', usuarioLogueado)
    },
    
    setUsuarioIsAdmin: ({ commit}, usuarioIsAdmin) => {
      commit('setUsuarioIsAdmin', usuarioIsAdmin)
    },

    setProductoID: ({ commit}, productoID) => {
      commit('setProductoID', productoID)
    },
    
}


  

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
