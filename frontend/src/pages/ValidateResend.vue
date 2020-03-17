<template>
  <div>
    <q-card class="fixed-center q-gutter-md q-pa-md text-body1">
      <div class="q-gutter-md q-pa-md">
      <h4>Resend validation code</h4>
      <q-link flat @click="$router.push({ name: 'validate' })">Validate with current code</q-link>
      <q-input
      label="Email"
      type="email"
      outlined
      />
      <q-btn class="q-pa-md" label="Validate" color="primary" />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ValidateResend'
}
</script>
<style lang="sass" scoped>
.q-card
  width: 70%
</style>
