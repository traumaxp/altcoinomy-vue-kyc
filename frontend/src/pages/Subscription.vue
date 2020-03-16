<template>
  <div>
    <div class="text-center q-pa-lg text-body1">
      <div class="row q-pa-xl">
      <div class="col">
      <p class="text-h4">Subscription list</p>
      </div>
      <div class="col">
        <q-btn label="New"></q-btn>
      </div>
      </div>
      <div class="q-pa-md">
    <q-markup-table class="fixed-center">
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
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
<style lang="sass" scoped>
.q-markup-table
  width: 80%
</style>
