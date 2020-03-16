<template>
  <q-card flat class="q-pa-md">
      <p class="text-h6 q-pa-md on-right">Subscription List</p>
    <div class="text-center text-body1">
      <div class="row q-pa-sm">
      <div class="col">
      </div>
      <div class="col float-right">
      </div>
      </div>
      <q-btn label="New"></q-btn>
      <div class="q-pa-md">
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
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'Subscription'
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 100%
</style>
