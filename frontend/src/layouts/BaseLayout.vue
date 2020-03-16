<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>
          Altcoinomy POC
        </q-toolbar-title>
        <div v-if="!user">
        <q-btn flat @click="$router.push({ name: 'RegisterUser' })">Signup</q-btn>
        <q-btn flat @click="$router.push({ name: 'Login' })">Login</q-btn>
        </div>
        <div v-if="user">
        <q-btn flat @click="$router.push({ name: 'HomePage' })">Logout</q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'BaseLayout',
  data: () => ({
  }),
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
