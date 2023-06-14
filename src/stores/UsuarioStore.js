import axios from "axios";

const mockApiUrl = "https://6488930d0e2469c038fe04c7.mockapi.io/api";
const endpoint = "/users";

const url = mockApiUrl + endpoint;

export const UsuarioStore = {
  usuarios: [],

  created() {
    this.getData(url);
  },
  methdods: {
    async getData(url) {
      try {
        const { data } = await axios.get(url);
        this.items = data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  findById(id) {
    return this.carrito.find((item) => item.id === id);
  },

  findUser(username) {
    return this.usuarios.find((usuario) => usuario.username === username);
  },
  findPassword(password) {
    return this.usuarios.find((usuario) => usuario.password === password);
  },
};
