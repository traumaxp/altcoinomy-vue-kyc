<template>
  <div>
    <q-separator />
    Name / Surname or Company name
    <q-input outlined />
    Date of birth or Date of incorporation
    <q-input outlined />
    Address
    <q-input outlined />
    Nationality
    <q-select outlinedv />
    Current Location
    <q-input outlined />
    Signature of the counterparty <br>
    <div id="app">
      <VueSignaturePad
        width="500px"
        height="500px"
        ref="signaturePad"
      />
      <div>
        <button @click="save">Save</button>
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
    sign: {
      data: ''
    },
    place: ''
  }),
  created () {
    this.subscriptionData()
  },
  methods: {
    file_selected (file) {
      this.selected_file = file[0]
      this.check_if_document_upload = true
    },
    save () {
      const { empty, data } = this.$refs.signaturePad.saveSignature()
      console.log(data)
      console.log(empty)
      this.sign.data = data
    },
    patchAnnex1 () {
      axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/annex1`, {
        method: 'post',
        data: {
          'name': 'John Doe',
          'date_of_birth': '1982-07-13',
          'nationality': 'FR',
          'address': 'Roadthing 10th, 4765 There',
          'sign':
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53M[...]]wYXRoPjwvc3ZnPg==',
          'place': 'Here'
        },
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(res => {
        console.log(res.data)
        this.value = true
        // this.step = 2
      })
    },
    uploadFile () {
      let fd = new FormData()
      fd.append('file', this.selected_file)
      console.log(this.selected_file)
      console.log(fd)
      // Axios request
      // axios.post('/uploadFile', fd, {
      //   headers: { 'Content-Type': undefined }
      // }).then(function (response) {
      //   if (response.data.ok) {
      //   }
      // })
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
        })
      }
    }
  }
}
</script>
