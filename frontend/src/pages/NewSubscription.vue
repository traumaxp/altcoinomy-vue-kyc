<template>
  <q-card flat class="q-pa-md">
    <div class="q-pa-sm text-body1">
      <div class="row">
      <div class="col">
      <p class="text-h6">Subscription New</p>
      </div>
      <div class="col float-right">
        <q-btn class="float-right" label="Cancel"></q-btn>
      </div>
      </div>
      <div class="row q-pa-sm">
      <div class="col">
      <p class="text-body1 q-pa-sm ">I want to register as:</p>
      <q-radio v-model="value" val="individual" label="An individual" />
      <q-radio v-model="value" val="compagny" label="A compagny" />
      </div>
      </div>
      <div class="q-pa-md">
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
  </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'NewSubscription',
  data: () => ({
    value: ''
  })
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
