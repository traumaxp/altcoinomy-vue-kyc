<template>
  <div>
    <q-card class="fixed-center q-gutter-md q-pa-md text-body1">
      <div class="q-gutter-md q-pa-md">
        <h4>Resend validation code</h4>
        <q-btn
          flat
          @click="$router.push({ name: 'validate' })"
        >Validate with current code</q-btn>
        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
        />
        <q-btn
          @click="reSendVaidationCode"
          class="q-pa-md"
          label="Validate"
          color="primary"
        />
      </div>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ValidateResend',
  data: () => ({
    email: ''
  }),
  method: {
    reSendValidationCode () {
      axios('http://api-staging.altcoinomy.com/api/v1/validate/resend', {
        method: 'get',
        data: {
          'email': this.email,
          'phone': 'string',
          'confirm_by': 'email'
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.q-card
  width: 70%
</style>
