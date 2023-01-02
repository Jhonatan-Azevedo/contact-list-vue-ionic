<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import listContact from "./../db_contacts.json"

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },

  mounted() {
    this.$store.dispatch("updateContacts", listContact)
  },


});
</script>

<style>
*,
body,
html {
  padding: 0 !important;
  margin: 0 !important;
}

.item-native {
  padding: 0 !important;
  margin: 0 !important;
}
</style>