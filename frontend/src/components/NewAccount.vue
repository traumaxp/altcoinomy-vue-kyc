<template>
  <q-form v-model="valid" @submit.prevent="register" class="q-gutter-md">
    <q-input
      class="fullname"
      v-model="user.fullname"
      label="Full Name"
      hint="will never be shown to other users and must match your ID document"
      :rules="[
        val =>
          (val && val.length > 0 && val.includes(' ')) ||
          'Please type your name as it appears on your ID.'
      ]"
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
      v-model="user.nickname"
      label="Display Name"
      debounce="200"
      hint="This will be shown to other users"
      :rules="[
        val => isNameAvailable(val),
        val => (val && val.length > 0) || 'Please type a name',
        val => !val.includes(' ') || 'Must be a single word'
      ]"
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
      <q-btn label="Submit" type="submit" :disabled="!valid" color="primary" />
    </div>
  </q-form>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NewAccount',
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
    isNameAvailable (value) {
      const { User } = this.$FeathersVuex.api
      const query = {
        query: {
          // $select: [ '_id', 'nickname' ], // does not seem to work, TODO: check on next feathers-vuex upgrade
          nickname: value
        }
      }
      return User.find(query)
        .then(response => {
          if (response.total === 0) {
            return true
          }
          // console.log('name is taken: ', response)
          return 'This name is taken'
        })
        .catch(this.handleError)
    },
    register () {
      if (this.valid) {
        const { User } = this.$FeathersVuex.api
        const user = new User(this.user)
        user
          .save()
          .catch(this.handleError)
          .then(user => {
            // console.log(user)
            this.$q.notify({
              message: 'Your account has been created, please login.',
              position: 'top',
              timeout: 5000,
              color: 'positive'
            })
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
