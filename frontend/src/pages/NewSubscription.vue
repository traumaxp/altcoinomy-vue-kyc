<template>
  <div>
    <div class="q-pa-sm text-body1">
      <div class="row q-pa-sm">
      <div class="col">
      <p class="text-body1">Subscription new</p>
      </div>
      <div class="col float-right">
        <q-btn class="float-right" label="Cancel"></q-btn>
      </div>
      </div>
      <div class="row q-pa-sm">
      <div class="col">
      <p class="text-body1">I want to register as:</p>
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
    </div>
  </div>
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
