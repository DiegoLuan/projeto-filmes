<template>
  <v-container class="d-flex justify-center" id="Home">
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

    <v-row v-else justify="center" align="center">
      <v-col v-for="filme in filmes" :key="filme.id" cols="8" sm="6" md="6">
        <v-card
          width="100%"
          style="border-radius: 20px"
          class="mb-5"
          elevation="15"
        >
          <v-img :src="filme.foto">
            <v-card-title class="white--text card-title">{{
              filme.nome
            }}</v-card-title>
          </v-img>

          <v-card-actions style="background: brown">
            <v-row align="center" justify="center">
              <v-col class="text-center pa-5" md="12">
                <div class="detalhes" @click="detalhes(filme.id)">Acessar</div>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../services/api.js";
export default {
  data: () => ({
    filmes: [],
    loading: true,
  }),
  async created() {
    await api
      .get("?api=filmes")
      .then((response) => {
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
    detalhes(filme) {
      this.$router.push(`/filme/${filme}`);
    },
  },
};
</script>

<style scoped>
/* a {
  text-decoration: none;
  font-size: 18px;
  color: white !important;
  background: brown !important;
} */

.card-title {
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  border: 0 !important;
  background-color: transparent;
  color: #fff !important;
  backdrop-filter: blur(20px);
  transition: all 0.5s;
}

div .detalhes {
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>