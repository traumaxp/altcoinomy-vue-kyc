<template>
<div>
  <q-card v-if="this.$route.params.id === undefined" flat class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col">
            Subscription List
        </div>
        <div class="col on-right">
      <q-btn class="float-right" @click="newSubscription('5e732f58908460164d3d310a')" label="New"></q-btn>
        </div>
        </div>
        <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Project</th>
          <th class="text">Date of subscription</th>
          <th class="text">Status</th>
          <th class="text">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Demo</td>
          <td class="text">03/10/2020</td>
          <td class="text">subscription_submitted</td>
          <td class="text"><q-btn size="sm" label="edit"></q-btn></td>
        </tr>
        <tr>
          <td class="text-left">Demo</td>
          <td class="text">03/10/2020</td>
          <td class="text">subscription_pending</td>
          <td class="text"><q-btn size="sm" label="edit"></q-btn></td>
        </tr>
        <tr>
          <td class="text-left">Demo</td>
          <td class="text">03/10/2020</td>
          <td class="text">subscription_pending</td>
          <td class="text"><q-btn size="sm" label="edit"></q-btn></td>
        </tr>
      </tbody>
    </q-markup-table>
        </div>
  </q-card>
  <SubscriptionForm/>
</div>
</template>

<script>
// import axios from 'axios'
import SubscriptionForm from '../components/SubscriptionForm'
export default {
  name: 'Subscription',
  components: {
    SubscriptionForm
  },
  data: () => ({
  }),
  methods: {
    newSubscription (id) {
      console.log('create new subscription')
      console.log(id)
      this.$router.push({ name: 'NewSubscription' })
      // axios({ url: 'https://api-staging.altcoinomy.com/api/v1/subscriptions',
      //   ico: id,
      //   headers: {
      //     'Authorization': `Bearer ${this.$store.state.token}`
      //   },
      //   method: 'POST' })
      //   .then(resp => {
      //     console.log(resp)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
