<template>
  <div>
    <q-separator />
    Name / Surname or Company name
    <q-input
      outlined
      v-model="name"
      :label="status"
    />
    Date of birth or Date of incorporation
    <q-input
      v-model="date_of_birth"
      outlined
      :label="status"
    />
    Address
    <q-input
      v-model="address"
      :label="status"
      outlined
    />
    Nationality
    <q-input
      v-model="nationality"
      :label="status"
      outlined
    />
    Current Location
    <q-input
      :label="status"
      v-model="place"
      outlined
    />
    Signature of the counterparty <br>
    <div id="app">
      <VueSignaturePad
        width="500px"
        height="500px"
        ref="signaturePad"
      />
      <div>
        <button @click="undo">Undo</button>
      </div>
    </div>

    <q-stepper-navigation>
      <q-btn
        @click="patchAnnex1()"
        color="primary"
        label="Continue"
      />
      <q-btn
        flat
        @click="step = 2"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueSignaturePad from 'vue-signature-pad'
Vue.use(VueSignaturePad)

export default {
  data: () => ({
    name: '',
    date_of_birth: '',
    nationality: '',
    address: '',
    place: '',
    status: ''
  }),
  created () {
    this.subscriptionData()
  },
  methods: {
    file_selected (file) {
      this.selected_file = file[0]
      this.check_if_document_upload = true
    },
    patchAnnex1 () {
      const { data } = this.$refs.signaturePad.saveSignature()
      axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/annex1`, {
        method: 'post',
        data: {
          'name': this.name,
          'date_of_birth': this.date_of_birth,
          'nationality': this.nationality,
          'address': this.address,
          'sign': data,
          'place': this.place
        },
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(res => {
        console.log(res.data)
        this.value = true
        this.step = 2
      })
    },
    undo () {
      this.$refs.signaturePad.undoSignature()
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
          this.status = res.data.groups.annexes.fields.annex1.status
        })
      }
    }
  }
}
</script>
