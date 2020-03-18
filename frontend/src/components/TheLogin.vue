<template>
  <q-form v-model="valid" @submit.prevent="login" class="q-gutter-md">
    <q-input
      class="username"
      v-model="user.username"
      label="Username"
      required
    />

    <q-input
      class="email"
      v-model="user.email"
      data-email
      label="Email"
      type="email"
      :rules="[val => (val && val.length > 0) || 'Please type an email']"
      required
    />

    <q-input
      class="password"
      type="password"
      v-model="user.password"
      label="Password"
      :rules="[val => (val && val.length > 0) || 'Please type a Password']"
      required
    />
    <div>
      <q-btn class="submit" label="Submit" type="submit" :disabled="!valid" color="primary" />
    </div>
      <q-btn class="submit" label="Submit" @click="test" color="primary" />
      <q-btn class="submit" label="Submit" @click="getList" color="primary" />
  </q-form>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TheLogin',
  props: {
    nextRoute: {
      default: '/',
      type: String
    }
  },
  data: vm => ({
    valid: false,
    username: '',
    user: {
      username: '',
      email: '',
      password: '' // No confirmation
    }
  }),
  computed: {
    ...mapState('users', { loading: 'isAuthenticatePending' }),
    authUser () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    ...mapActions('users', ['get']),
    ...mapActions('auth', ['authenticate']),
    hasType () {
      if (this.authUser) {
        return (
          this.authUser.isInvestor ||
          this.authUser.isSeeker ||
          this.authUser.isAdmin
        )
      }
    },
    getList () {
      console.log(this.$store.state)
      return axios('https://api-staging.altcoinomy.com/api/v1/exchange-rates', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(response => {
        console.log(response)
      })
    },
    login () {
      let username = this.user.username
      let password = this.user.password
      this.$store.dispatch('login', { username, password })
      if (this.valid) {
        this.authenticate({
          strategy: 'local',
          email: this.user.email,
          password: this.user.password
        })
          .then(response => {
            console.log(response)
            // console.log(response.body)
            if (response) {
              this.$store.dispatch('postLogin', response.body).then(() => {
                if (!this.hasType()) {
                  this.$router.push({
                    name: 'HomePage'
                  })
                } else {
                  if (this.nextRoute !== 'stay') {
                    // console.log('going to post-login route: ' + this.nextRoute)
                    this.$router.push(this.nextRoute)
                  }
                }
              })
            }
          })
      }
    }
  }
}
</script>
