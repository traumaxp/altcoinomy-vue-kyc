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
        <tr>
          <td class="text-left">Demo Logo</td>
          <td class="text">Demo</td>
          <td class="text">Demo project is a revolution, it will change the world.</td>
          <td class="text"><q-btn size="sm" label="Participate"></q-btn></td>
        </tr>
        <tr>
          <td class="text-left">Demo</td>
          <td class="text">Auto_Onboard_ETH</td>
          <td class="text">This ICO should auto-onboard ETH Tier 1 contributors.</td>
          <td class="text"><q-btn size="sm" label="Completed 3 months ago"></q-btn></td>
        </tr>
      </tbody>
    </q-markup-table>
    <div v-for="data in datas" :key="data.id">
        {{data}}
    </div>
  </div>
  </q-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewSubscription',
  data: () => ({
    value: '',
    datas: []
  }),
  mounted () {
    axios('https://api-staging.altcoinomy.com/api/v1/icos/', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${this.$store.state.token}`
      }
    }
    ).then(res => {
      console.log(res)
      this.data = res
    })
  }
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
