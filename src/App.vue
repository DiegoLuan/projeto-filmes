<template>
  <v-app>
    <div>
      <v-row>
        <v-col cols="12">
          <v-app-bar
            style="background-color: brown"
            color="deep-purple accent-4"
            class="pr-10 pl-10"
          >
            <v-toolbar-title>
              <a @click="irHome('/')"> Filmaria </a>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn @click="irHome('/salvos')" small>Salvos</v-btn>
          </v-app-bar>
        </v-col>
      </v-row>
    </div>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
  methods: {
    irHome(route) {
      this.$router.push(`${route}`);
    },
  },
};
</script>

<style scoped>
a {
  font-size: 25px;
  color: #fff !important;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover {
  font-size: 28px;
}

.theme--light.v-btn {
  transition: all 0.3s;
}

.theme--light.v-btn:hover {
  background: #fff !important;
  color: brown !important;
}

.v-application .deep-purple.accent-4 {
  background: brown !important;
}

.theme--light.v-btn.v-btn--has-bg {
  background: brown !important;
  border: 1px solid #fff !important;
  color: #fff;
}

.theme--light.v-btn.v-btn--has-bg:hover {
  background: #fff !important;
  color: brown !important;
}
</style>
