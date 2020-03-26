<template>
  <div>
    Is the investor a company or an individual *
    <q-select
      outlined
      v-model="register_as"
      :options="options"
      :label="formStatus.subscribeAs"
    />
    <q-stepper-navigation>
      <q-btn
        @click="patchMainDetails"
        color="primary"
        label="Continue"
      />
    </q-stepper-navigation>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    register_as: '',
    formStatus: {
      subscribeAs: ''
    },
    options: [
      'company', 'individual'
    ]
  }),
  created () {
    this.subscriptionData()
  },
  methods: {
    patchMainDetails (value) {
      axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}`, {
        method: 'patch',
        data: {
          'subscription_id': `${this.$route.params.id}`,
          'groups': {
            'basics': {
              'fields': {
                'subscribed_as': {
                  'value': this.register_as
                }
              }
            }
          }
        },
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(res => {
        console.log(res.data)
        this.value = true
        // this.step = 2
      })
    },
    subscriptionData () {
      console.log(this.$route.params.id)
      if (this.$route.params.id !== undefined) {
        axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/fill-status`, {
          method: 'get',
          headers: {
            'Authorization': `Bearer ${this.$store.state.token}`
          }
        }).then(res => {
          console.log(res.data.groups)
          this.formStatus.subscribeAs = res.data.groups.basics.fields.subscribed_as.status
        })
      }
    }
  }
}
</script>
