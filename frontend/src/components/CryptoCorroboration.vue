<template>
  <div>
    Origin of the crypto funds
    <q-select
      :options="originCryptoFundChoice1"
      :label="origin_of_funds"
      v-model="originCryptoFundData1"
      outlined
    />
    Origin of the crypto funds story
    <q-select
      :options="originCryptoFundChoice2"
      v-model="originCryptoFundData2"
      outlined
    />
    First supporting document (if you have any other document to share with us)
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropOptionsFirstSupport"
    ></vue-dropzone>
    Second supporting document (if you have any other document to share with us)
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropOptionsSecondSupport"
    ></vue-dropzone>
    Third supporting document (if you have any other document to share with us)
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropOptionsthirdSupport"
    ></vue-dropzone>

    <q-stepper-navigation>
      <q-btn
        @click="patchCryptoCorroboration(done6)"
        color="primary"
        label="Continue"
      />
      <q-btn
        flat
        @click="step = 5"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
  </div>
</template>
<script>
import axios from 'axios'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  data: () => ({
    origin_of_funds: '',
    originCryptoFundData1: '',
    originCryptoFundData2: '',
    originCryptoFundChoice1: [
      'Exchange', 'Otc', 'Mined', 'Other'
    ],
    originCryptoFundChoice2: [
      `I'm a trader`, `I'm an early adopter`, `I'm an ico investor`, `I'm a miner`, `Goods and services`
    ]
  }),
  created () {
    this.subscriptionData()
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  computed: {
    dropOptionsFirstSupport: function () {
      return {
        url: `https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/files`,
        thumbnailWidth: 150,
        paramName: 'files',
        data: {
          'type': 'support_document_1'
        },
        maxFilesize: 0.5,
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    },
    dropOptionsSecondSupport: function () {
      return {
        url: `https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/files`,
        thumbnailWidth: 150,
        paramName: 'files',
        data: {
          'type': 'support_document_2'
        },
        maxFilesize: 0.5,
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    },
    dropOptionsthirdSupport: function () {
      return {
        url: `https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}/files`,
        thumbnailWidth: 150,
        paramName: 'files',
        data: {
          'type': 'support_document_3'
        },
        maxFilesize: 0.5,
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`,
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  },
  methods: {
    patchCryptoCorroboration (value) {
      axios(`https://api-staging.altcoinomy.com/api/v1/subscriptions/${this.$route.params.id}`, {
        method: 'patch',
        data: {
          'subscription_id': `${this.$route.params.id}`,
          'groups': {
            'crypto_tracing': {
              'fields': {
                'origin_of_funds': {
                  'value': 'this.originCryptoFundData1'
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
        this.value = true
        this.step = 6
      })
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
          console.log(res.data.groups.crypto_tracing.fields.origin_of_funds.status)
          this.origin_of_funds = res.data.groups.crypto_tracing.fields.origin_of_funds.status
        })
      }
    }
  }
}
</script>
