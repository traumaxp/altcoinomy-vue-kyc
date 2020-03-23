<template>
  <q-page class="flex flex-center">
    <div
      class="q-pa-md"
      style="max-width: 400px"
    >
      <the-login :nextRoute="nextRoute" />
    </div>
  </q-page>
</template>
<script>
import TheLogin from '../components/TheLogin.vue'
export default {
  name: 'Login',
  components: { TheLogin },
  props: {
    nextRoute: {
      default: '/',
      type: String
    }
  }
}
</script>
