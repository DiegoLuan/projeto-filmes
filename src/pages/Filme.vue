<template>
  <div class="d-flex flex-column" id="filme">
    <div v-if="loading" class="d-flex justify-center align-center">
      <v-progress-circular
        :size="70"
        :width="7"
        style="color: brown"
        indeterminate
        class="mt-5"
      ></v-progress-circular>
    </div>
    <div v-else-if="error" class="d-flex justify-center align-center">
      <h1>ERROR 404, PAGE NOT FOUND!</h1>
    </div>
    <div v-else>
      <v-row class="mt-5" justify="center">
        <v-col cols="12" sm="9" md="9">
          <v-card>
            <v-card-title class="white--text" style="background: brown">
              {{ filmes.nome }}
            </v-card-title>
            <v-img :src="filmes.foto"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" xs="9" sm="9" md="9">
          <h2 class="mb-3">Sinopse</h2>
          <p>{{ filmes.sinopse }}</p>
          <v-btn small class="mr-2" @click="routes('/')">Ver mais filmes</v-btn>
          <v-btn small class="mr-2" @click="salvarFilme">Salvar</v-btn>
          <v-btn small class="mr-2"
            ><a
              :href="`https://www.youtube.com/results?search_query=${filmes.nome}`"
              >Trailer</a
            ></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import api from "../services/api.js";
export default {
  props: ["id"],
  data() {
    return {
      filmes: [],
      loading: true,
      error: false,
    };
  },
  async created() {
    await api
      .get(`?api=filmes/${this.id}`)
      .then((response) => {
        if (response.data.length <= 0) {
          throw new Error();
        }
        this.filmes = response.data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    routes(rota) {
      this.$router.push(rota);
    },
    salvarFilme() {
      const minhaLista = localStorage.getItem("meusFilmes");

      let filtro = JSON.parse(minhaLista) || [];

      const hasFilme = filtro.some((item) => item.id === this.filmes.id);

      if (hasFilme) {
        alert("Este filme ja foi salvo!");
        return;
      }

      filtro.push(this.filmes);
      localStorage.setItem("meusFilmes", JSON.stringify(filtro));
      alert("Filme salvo com sucesso!");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000 !important;
}

.v-card {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
}

.v-img {
  border-bottom-left-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
}
</style>