<template>
  <q-form
    v-model="valid"
    @submit.prevent="register"
    class="q-gutter-md"
  >
    <q-input
      class="username"
      v-model="user.username"
      label="Username"
      required
    />

    <q-input
      v-model="user.email"
      label="Email"
      type="email"
      hint="will never be be revealed to other users nor third parties."
      :rules="[val => (val && val.length > 0) || 'Please type an email']"
      required
    />

    <q-input
      type="password"
      v-model="user.password"
      label="Password"
      :rules="[val => (val && val.length > 0) || 'Please type a Password']"
      required
    />
    <div>
      <q-btn
        label="Submit"
        type="submit"
        :disabled="!valid"
        color="primary"
      />
    </div>
  </q-form>
</template>
<script>
// import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'NewAccount',
  data: vm => ({
    valid: false,
    user: {
      username: '',
      email: '',
      password: ''
    }
  }),
  computed: {
    ...mapState('users', { loading: 'isCreatePending' })
  },
  methods: {
    // registerCustomer () {
    //   let dataCustomer = {
    //     'username': 'string',
    //     'email': 'string',
    //     'telephone': 'string',
    //     'plain_password': 'string',
    //     'referal': 'string',
    //     'authorize_contact': true,
    //     'chip': 'string'
    //   }
    //   axios('https://api-staging.altcoinomy.com/api/v1/customers', {
    //     method: 'post',
    //     data: dataCustomer,
    //     headers: {
    //       'Authorization': `Bearer ${this.$store.state.token}`
    //     }
    //   }).then(res => {
    //     console.log(res.data)
    //     this.redirection(res.data.id)
    //   })
    // },
    register () {
      if (this.valid) {
        let data =
        {
          'username': this.user.username,
          'email': this.user.email,
          'telephone': 'string',
          'plain_password': this.user.password,
          'referal': 'string',
          'confirm_by': 'email',
          'accredited_investor': true,
          'authorize_contact': true,
          'chip': 'string',
          'starts_with_icos': 'string',
          'starts_with_organizer': 'string'
        }
        this.$store.dispatch('register', data)
          .then(res => console.log(res.data))
          .catch(err => console.log(err))
        const { User } = this.$FeathersVuex.api
        const user = new User(this.user)
        user
          .save()
          .catch(this.handleError)
          .then(user => {
            console.log(user)
            this.$emit('registration-success')
            if (this.route && this.route.name === 'RegisterUser') {
              try {
                this.$router.push({ name: 'Validate' })
              } catch (err) {
                console.log(err)
              }
            }
          })
      }
    }
  }
}
</script>
