<template>
  <q-page class="flex flex-center">
    <new-account />
  </q-page>
</template>
<script>
import NewAccount from '../components/NewAccount.vue'
export default {
  name: 'UserRegistration',
  components: { NewAccount }
}
</script>
