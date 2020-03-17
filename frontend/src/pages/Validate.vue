<template>
  <div>
    <q-card class="fixed-center q-gutter-md q-pa-md text-body1">
      <div class="q-gutter-md q-pa-md">
      <h4>Validate account</h4>
      <q-link flat @click="$router.push({ name: 'validateResend' })">Resend validation code?</q-link>
      <q-input
      label="Code"
      outlined
      />
      <q-btn class="q-pa-md" label="Validate" color="primary" />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Validate'
}
</script>
<style lang="sass" scoped>
.q-card
  width: 70%
</style>
