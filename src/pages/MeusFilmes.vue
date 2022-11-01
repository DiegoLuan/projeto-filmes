<template>
  <v-container
    class="d-flex justify-center align-center flex-column"
    id="meusFilmes"
  >
    <v-row justify="center" align="center">
      <v-col>
        <h1>Meus filmes</h1>
      </v-col>
    </v-row>
    <v-row style="width: 70%" justify="space-between" align="center">
      <v-col md="6" v-if="salvos.length <= 0">
        <h3 class="text-center">Você não tem nenhum filme salvo.. :(</h3>
      </v-col>
      <v-col cols="12" sm="12" v-else>
        <v-row class="bt" v-for="(filmes, index) in salvos" :key="index">
          <v-col md="9">
            <h3 class="mb-2">
              {{ filmes.nome }}
            </h3>
          </v-col>
          <v-col md="3">
            <v-btn class="mr-2" x-small @click="routes(filmes.id)"
              >Detalhes</v-btn
            >
            <v-btn x-small @click="deletarFilme(filmes.id)">Excluir</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      salvos: [],
    };
  },
  created() {
    const storage = localStorage.getItem("meusFilmes");
    this.salvos = JSON.parse(storage);
  },
  methods: {
    routes(rota) {
      this.$router.push(`/filme/${rota}`);
    },
    deletarFilme(id) {
      const filtro = this.salvos.filter((filme) => {
        return filme.id !== id;
      });

      this.salvos = filtro;
    },
  },
  watch: {
    salvos() {
      localStorage.setItem("meusFilmes", JSON.stringify(this.salvos));
    },
  },
};
</script>

<style scoped>
.bt:not(:first-child) {
  border-top: 1px solid #eee;
}
</style>