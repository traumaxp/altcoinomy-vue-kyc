<template>
  <div>
    <q-uploader
      url=""
      extensions=".gif,.jpg,.jpeg,.png"
      @add="file_selected"
    />

    <q-btn @click="uploadFile()">Upload</q-btn>
    ID card front (side with MRZ)
    <q-uploader
      outlined
      :label="formStatus.individual.IdCardFront"
    />

    ID card back (side without MRZ)
    <q-uploader
      outlined
      :label="formStatus.individual.IdCardBack"
    />
    First name
    <q-input
      outlined
      v-model="firstname"
      :label="formStatus.individual.firstname"
    />

    Last name
    <q-input
      outlined
      :label="formStatus.individual.lastname"
    />

    Date of birth
    <q-input
      outlined
      :label="formStatus.individual.dateOfBirth"
    />

    Residential address
    <q-input
      outlined
      :label="formStatus.individual.residentialAddress"
    />
    Zip code
    <q-input
      outlined
      :label="formStatus.individual.zipCode"
    />
    City
    <q-input
      outlined
      :label="formStatus.individual.city"
    />
    Country
    <q-input
      outlined
      :label="formStatus.individual.country"
    />

    Nationality
    <q-input
      outlined
      :label="formStatus.individual.nationality"
    />

    Professional activity
    <q-input
      outlined
      :label="formStatus.individual.professionalActivity"
    />

    Proof of Residence such as utility bill or bank statement (required if you plan to contribute more than CHF 15'000 equivalent).
    <q-uploader
      outlined
      :label="formStatus.individual.utilityBill"
    />

    <q-stepper-navigation>
      <q-btn
        @click="patchPersonalDetails()"
        color="primary"
        label="Continue"
      />
      <q-btn
        flat
        @click="step = 1"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    IdCardFront: '',
    IdCardBack: '',
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    residentialAddress: '',
    zipCode: '',
    city: '',
    country: '',
    nationality: '',
    professionalActivity: '',
    utilityBill: '',
    formStatus: {
      individual: {
        IdCardFront: '',
        IdCardBack: '',
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        residentialAddress: '',
        zipCode: '',
        city: '',
        country: '',
        nationality: '',
        professionalActivity: '',
        utilityBill: ''
      }
    }
  }),
  mounted () {
    this.subscriptionData()
  },
  methods: {
    file_selected (file) {
      this.selected_file = file[0]
      this.check_if_document_upload = true
    },

    uploadFile () {
      let fd = new FormData()
      fd.append('file', this.selected_file)
      console.log(this.selected_file)
      console.log(fd)
      // axios.post('/uploadFile', fd, {
      //   headers: { 'Content-Type': undefined }
      // }).then(function (response) {
      //   if (response.data.ok) {
      //   }
      // })
    },
    patchPersonalDetails (value) {
      axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}`, {
        method: 'patch',
        data: {
          'subscription_id': `${this.$route.params.id}`,
          'groups': {
            'individual': {
              'fields': {
                'id_card_front': {
                  'value': ''
                },
                'id_card_back': {
                  'value': ''
                },
                'firstname': {
                  'value': this.firstname
                },
                'lastname': {
                  'value': this.lastname
                },
                'date_of_birth': {
                  'value': this.dateOfBirth
                },
                'residential_address': {
                  'value': this.residentialAddress
                },
                'zip_code': {
                  'value': this.zipCode
                },
                'country': {
                  'value': this.country
                },
                'nationality': {
                  'value': this.nationality
                },
                'professional_activity': {
                  'value': this.professionalActivity
                },
                'utility_bill': {
                  'value': this.utilityBill
                }
              }
            }
          }
        },
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(res => {
        console.log(res.data)
        this.IdCardFront = ''
        this.IdCardBack = ''
        this.firstname = ''
        this.lastname = ''
        this.dateOfBirth = ''
        this.residentialAddress = ''
        this.zipCode = ''
        this.city = ''
        this.country = ''
        this.nationality = ''
        this.professionalActivity = ''
        this.utilityBill = ''
        this.value = true
        this.step = 3
      })
    }
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
        let individualFields = res.data.groups.individual.fields
        console.log(res.data.groups)
        this.formStatus.subscribeAs = res.data.groups.basics.fields.subscribed_as.status
        this.formStatus.individual.IdCardFront = individualFields.id_card_front.status
        this.formStatus.individual.IdCardBack = individualFields.id_card_back.status
        this.formStatus.individual.firstname = individualFields.firstname.status
        this.formStatus.individual.lastname = individualFields.lastname.status
        this.formStatus.individual.dateOfBirth = individualFields.date_of_birth.status
        this.formStatus.individual.residentialAddress = individualFields.residential_address.status
        this.formStatus.individual.zipCode = individualFields.zip_code.status
        this.formStatus.individual.country = individualFields.country.status
        this.formStatus.individual.city = individualFields.city.status
        this.formStatus.individual.nationality = individualFields.nationality.status
        this.formStatus.individual.professionalActivity = individualFields.professional_activity.status
        this.formStatus.individual.utilityBill = individualFields.utility_bill.status
        this.formStatus.annex1 = res.data.groups.annexes.fields.annex1.status
        this.status = res.data.status
        this.status = res.data.status
      })
    }
  }
}
</script>
