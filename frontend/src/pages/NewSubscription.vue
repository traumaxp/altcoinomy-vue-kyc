<template>
  <q-card flat class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col">
            Subscription New <br>
          I want to register as:
      <q-radio v-model="value" val="individual" label="An individual" />
      <q-radio v-model="value" val="compagny" label="A compagny" />
        </div>
        <div class="col on-right">
      <q-btn class="float-right" @click="$router.push({ name: 'Subscription' })" label="Cancel"></q-btn>
        </div>
        </div>
        <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Logo</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ico in icos" :key="ico.id">
          <td class="text-left">Demo Logo</td>
          <td class="text">{{ico.name}}</td>
          <div style="height: 200px" class="text">{{ico.description}}</div>
          <td class="text">
            <q-btn v-if="ico.date_to < dateNow" size="sm" color="red" disable label="completed"></q-btn>
            <q-btn v-if="ico.date_to > dateNow" size="sm" color="blue" @click="redirection(ico.id)" label="Participate"></q-btn>
            </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  </q-card>
</template>

<script>
import { date } from 'quasar'

let timeStamp = Date.now()
let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
import axios from 'axios'
export default {
  name: 'NewSubscription',
  data: () => ({
    value: '',
    logo: '',
    icos: [],
    description: '',
    dateNow: formattedString
  }),
  methods: {
    redirection (value) {
      console.log('redirect', value)
      this.$router.push({ name: 'SubscriptionFill', params: { id: value } })
    }
  },
  created () {
    axios('https://api-staging.altcoinomy.com/api/v1/icos', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.$store.state.token}`
      }
    }
    ).then(res => {
      const array = Object.values(res.data)
      console.log(array)
      this.icos = array
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
