<template>
  <q-form v-if="this.$route.params.id !== undefined">
    FORM FORM FORM
  </q-form>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SubscriptionForm',
  data: vm => ({
    valid: false,
    user: {
      fullname: '',
      nickname: '',
      email: '',
      password: ''
    }
  }),
  computed: {
    ...mapState('users', { loading: 'isCreatePending' })
  },
  methods: {
    register () {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api
        const user = new User(this.user)
        user
          .save()
          .catch(this.handleError)
          .then(user => {
            console.log(user)
            this.$emit('registration-success')
            if (this.route && this.route.name === 'RegisterUser') {
              this.$router.push({ name: 'Login' })
            }
          })
      }
    }
  }
}
</script>
