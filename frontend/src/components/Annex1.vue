<template>
  <div>
    {{formStatus.annex1}}
    <q-separator />
    Name / Surname or Company name
    <q-input outlined />
    Date of birth or Date of incorporation
    <q-input outlined />
    Address
    <q-input outlined />
    Nationality
    <q-select
      outlined
      v-model="country"
      :options="Optionscountry"
    />
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
    Optionscountry: [
      'Suisse', 'France'
    ],
    id_card_front: '',
    id_card_back: '',
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    residentialAddress: '',
    zipCode: '',
    country: '',
    nationality: '',
    professionalActivity: '',
    utilityBill: '',
    formStatus: {
      annex1: ''
    }
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
      this.signature = data
    },
    patchAnnex1 () {
      console.log('hello')
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
          this.formStatus.subscribeAs = res.data.groups.basics.fields.subscribed_as.status
        })
      }
    }
  }
}
</script>
