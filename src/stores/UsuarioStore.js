import axios from "axios";

const mockApiUrl = "https://6488930d0e2469c038fe04c7.mockapi.io/api";
const endpoint = "/users";

const url = mockApiUrl + endpoint;

export const UsuarioStore = {
  Usuarios: [],

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
};
