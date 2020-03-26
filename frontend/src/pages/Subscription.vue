<template>
  <div>
    <q-card
      v-if="this.$route.params.id === undefined"
      flat
      class="q-pa-md"
    >
      <div class="row q-pa-md">
        <div class="col">
          Subscription List
        </div>
        <div class="col on-right">
          <q-btn
            class="float-right"
            @click="newSubscription"
            label="New"
          ></q-btn>
        </div>
      </div>
      <div>
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">Logo</th>
              <th class="text-left">Date of subscription</th>
              <th class="text-left">Status</th>
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="ico in icos"
              :key="ico.id"
            >
              <td class="text-left">Demo Logo</td>
              <td class="text">{{ico.date_of_subscription}}</td>
              <td
                style="height: 200px"
                class="text-left"
              >{{ico.status}}</td>
              <td class="text">
                <q-btn
                  size="sm"
                  color="blue"
                  @click="redirection(ico.id)"
                  label="EDIT"
                ></q-btn>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </q-card>
    <SubscriptionForm />
  </div>
</template>

<script>
import axios from 'axios'
import SubscriptionForm from '../components/SubscriptionForm'
export default {
  name: 'Subscription',
  components: {
    SubscriptionForm
  },
  data: () => ({
    icos: []
  }),
  beforeMount () {
    axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.$store.state.token}`
      }
    }).then(res => {
      const array = Object.values(res.data)
      console.log(array)
      this.icos = array
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    redirection (subscriptionId) {
      console.log('redirection ', subscriptionId)
      this.$router.push({ name: 'SubscriptionFill', params: { id: subscriptionId } })
    },
    newSubscription () {
      console.log('Redrect to new subscription page')
      this.$router.push({ name: 'NewSubscription' })
    }
  }
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
