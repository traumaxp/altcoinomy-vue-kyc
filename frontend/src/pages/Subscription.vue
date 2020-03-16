<template>
  <div>
    <div class="text-center q-pa-lg text-body1">
      <h5>Subscription list</h5>
      <div class="q-pa-md">
    <q-markup-table class="fixed-center">
      <thead>
        <tr>
          <th class="text-left">Project</th>
          <th class="text">Date of subscription</th>
          <th class="text-right">Status</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
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
  width: 60%
</style>
