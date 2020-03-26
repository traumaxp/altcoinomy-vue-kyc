<template>
  <q-card
    v-if="this.$route.params.id !== undefined"
    flat
    class="q-pa-md"
  >
    <div class="row q-pa-md">
      <div class="col">
        Subscription Edit
        <q-btn
          label="getPlanning"
          @click="getPlanning"
        ></q-btn>
      </div>
      <div class="col on-right">
        <q-btn
          class="float-right"
          @click="$router.push({ name: 'Subscription' })"
          label="Cancel"
        ></q-btn>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="text-h6">
        Demo, project id: {{this.$route.params.id}}
      </div>
      <div class="text-body1 q-pa-md">
        Demo project is a revolution, it will change the world.
        <div class="float-right">
          Status of your subscription: {{status}}
          <div v-if="videoConferenceDate !== null">
            Video conference date: {{videoConferenceDate}}
          </div>
        </div>
      </div>
      <q-stepper
        v-model="step"
        vertical
        header-nav
        ref="stepper"
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Main details"
          icon="settings"
          :done="done1"
        >
          <MainDetails />
        </q-step>

        <q-step
          :name="2"
          title="Personal details"
          caption="Optional"
          icon="create_new_folder"
          :done="done2"
        >
          <PersonalDetails />
        </q-step>
        <q-step
          :name="3"
          title="Annex 1 - Identification of the beneficial owner sheet"
          caption="Optional"
          icon="create_new_folder"
          :done="done3"
        >
          <Annex1 />
        </q-step>

        <q-step
          :name="4"
          title="Demo Customizable Token Purchase Agreement for individuals (Extra document)"
          caption="Optional"
          icon="create_new_folder"
          :done="done4"
        >
          <q-uploader />

          <q-stepper-navigation>
            <q-btn
              @click="() => { done4 = true; step = 5 }"
              color="primary"
              label="Continue"
            />
            <q-btn
              flat
              @click="step = 3"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="5"
          title="Contribution details"
          caption="Optional"
          icon="create_new_folder"
          :done="done4"
        >
          <q-card>
            DEMO TOKEN PURCHASE AGREEMENT
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Convallis tellus id interdum velit laoreet. Libero id faucibus nisl tincidunt eget nullam non nisi est. Turpis egestas integer eget aliquet nibh. Iaculis nunc sed augue lacus viverra vitae congue. Neque convallis a cras semper auctor neque vitae tempus. Scelerisque in dictum non consectetur a erat nam at lectus. Semper risus in hendrerit gravida. Nisl tincidunt eget nullam non nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Volutpat diam ut venenatis tellus. Id diam vel quam elementum pulvinar. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget nunc scelerisque viverra mauris. Nec feugiat in fermentum posuere urna. Nibh tellus molestie nunc non.
            Sit amet purus gravida quis blandit turpis cursus. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Diam vel quam elementum pulvinar etiam non quam. Id faucibus nisl tincidunt eget nullam non nisi est. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet nulla facilisi morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Porttitor massa id neque aliquam. Tincidunt arcu non sodales neque sodales ut etiam sit. Tortor dignissim convallis aenean et tortor at. Ac auctor augue mauris augue neque gravida in. Magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque.
            ARTICLE 1
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Convallis tellus id interdum velit laoreet. Libero id faucibus nisl tincidunt eget nullam non nisi est. Turpis egestas integer eget aliquet nibh. Iaculis nunc sed augue lacus viverra vitae congue. Neque convallis a cras semper auctor neque vitae tempus. Scelerisque in dictum non consectetur a erat nam at lectus. Semper risus in hendrerit gravida. Nisl tincidunt eget nullam non nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Volutpat diam ut venenatis tellus. Id diam vel quam elementum pulvinar. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget nunc scelerisque viverra mauris. Nec feugiat in fermentum posuere urna. Nibh tellus molestie nunc non.
            Sit amet purus gravida quis blandit turpis cursus. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Diam vel quam elementum pulvinar etiam non quam. Id faucibus nisl tincidunt eget nullam non nisi est. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet nulla facilisi morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Porttitor massa id neque aliquam. Tincidunt arcu non sodales neque sodales ut etiam sit. Tortor dignissim convallis aenean et tortor at. Ac auctor augue mauris augue neque gravida in. Magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque.
            ARTICLE 2
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Convallis tellus id interdum velit laoreet. Libero id faucibus nisl tincidunt eget nullam non nisi est. Turpis egestas integer eget aliquet nibh. Iaculis nunc sed augue lacus viverra vitae congue. Neque convallis a cras semper auctor neque vitae tempus. Scelerisque in dictum non consectetur a erat nam at lectus. Semper risus in hendrerit gravida. Nisl tincidunt eget nullam non nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Volutpat diam ut venenatis tellus. Id diam vel quam elementum pulvinar. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget nunc scelerisque viverra mauris. Nec feugiat in fermentum posuere urna. Nibh tellus molestie nunc non.
            Sit amet purus gravida quis blandit turpis cursus. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Diam vel quam elementum pulvinar etiam non quam. Id faucibus nisl tincidunt eget nullam non nisi est. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet nulla facilisi morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Porttitor massa id neque aliquam. Tincidunt arcu non sodales neque sodales ut etiam sit. Tortor dignissim convallis aenean et tortor at. Ac auctor augue mauris augue neque gravida in. Magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque.
            The Company

            Demo Compaany
            Reg. in Switzerland, company number CH-123456789
            <br>
            Street: Rue du Rhône 101
            <br>
            City/State/Postal code: Geneva, 1200
            <br>

            Country: Switzerland
            <br>

            Email: demo-company@example.com
            <br>

            The Purchaser
            <br>

            _[First_name]_ _[LAST_NAME]_
            <br>

            _[Street]_
            _[Postal_Code]_
            _[City]_
            _[COUNTRY]_
            <br>

            Email: _[E-mail_address]_
            <br>

            Name: _[Title]_ _[First_name]_ _[LAST_NAME]_
            <br>

            Date: March 16, 2020
            <br>

            ☑ I confirm to have read and understood this document.
            <br>

            Signature:

            APPENDIX
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Convallis tellus id interdum velit laoreet. Libero id faucibus nisl tincidunt eget nullam non nisi est. Turpis egestas integer eget aliquet nibh. Iaculis nunc sed augue lacus viverra vitae congue. Neque convallis a cras semper auctor neque vitae tempus. Scelerisque in dictum non consectetur a erat nam at lectus. Semper risus in hendrerit gravida. Nisl tincidunt eget nullam non nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Volutpat diam ut venenatis tellus. Id diam vel quam elementum pulvinar. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eget nunc scelerisque viverra mauris. Nec feugiat in fermentum posuere urna. Nibh tellus molestie nunc non.
            Sit amet purus gravida quis blandit turpis cursus. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Diam vel quam elementum pulvinar etiam non quam. Id faucibus nisl tincidunt eget nullam non nisi est. Eget duis at tellus at urna condimentum mattis pellentesque. Sit amet nulla facilisi morbi. Mauris nunc congue nisi vitae suscipit tellus mauris. Porttitor massa id neque aliquam. Tincidunt arcu non sodales neque sodales ut etiam sit. Tortor dignissim convallis aenean et tortor at. Ac auctor augue mauris augue neque gravida in. Magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque.
          </q-card>

          <q-stepper-navigation>
            <q-btn
              @click="() => { done5 = true; step = 6 }"
              color="primary"
              label="Continue"
            />
            <q-btn
              flat
              @click="step = 4"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="6"
          title="Crypto corroboration"
          icon="add_comment"
          :done="done5"
        >
          <CryptoCorroboration />
        </q-step>
        <q-step
          :name="7"
          title="Token delivery address"
          icon="add_comment"
          :done="done6"
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.

          <q-stepper-navigation>
            <q-btn
              @click="() => { done7 = true; step = 8 }"
              color="primary"
              label="Continue"
            />
            <q-btn
              flat
              @click="step = 6"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
        <q-step
          :name="8"
          title="Video conference booking"
          icon="add_comment"
          :done="done7"
        >
          <q-btn @click="getListOfVideoConf"></q-btn>
          <!-- LIST OF VIDEO CONF -->

          <div class="q-gutter-md row items-start">
            <q-date
              v-model="modelDate"
              mask="YYYY-MM-DD HH:mm"
              color="purple"
            />
            <q-time
              v-model="modelDate"
              mask="YYYY-MM-DD HH:mm"
              color="purple"
            />
          </div>
          <q-stepper-navigation>
            <q-btn
              color="primary"
              @click="done8 = true"
              label="Finalize my KYC"
            />
            <q-btn
              flat
              @click="step = 7"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
        <q-btn
          class="on-right"
          color="primary"
          @click="done8 = true"
          label="Finalize my KYC"
        />
      </q-stepper>
    </div>
  </q-card>
</template>
<script>
import MainDetails from './MainDetails'
import PersonalDetails from './PersonalDetails'
import Annex1 from './Annex1'
import CryptoCorroboration from './CryptoCorroboration'
import axios from 'axios'
import Vue from 'vue'
import VueSignaturePad from 'vue-signature-pad'
Vue.use(VueSignaturePad)

export default {
  name: 'SubscriptionForm',
  data: () => ({
    modelDate: '2019-02-22 21:02',
    firstname: '',
    originCryptoFundData1: '',
    originCryptoFundData2: '',
    videoConferenceDate: '',
    status: '',
    step: 1,
    originCryptoFundChoice1: [
      'Exchange', 'Otc', 'Mined', 'Other'
    ],
    originCryptoFundChoice2: [
      `I'm a trader`, `I'm an early adopter`, `I'm an ico investor`, `I'm a miner`, `Goods and services`
    ],
    done1: false,
    done2: false,
    done3: false,
    done4: false,
    done5: false,
    done6: false,
    done7: false,
    model: null,
    country: [
      'Switzerland', 'France'
    ],
    selected_file: '',
    check_if_document_upload: false
  }),
  components: {
    MainDetails,
    PersonalDetails,
    Annex1,
    CryptoCorroboration
  },
  methods: {
    undo () {
      this.$refs.signaturePad.undoSignature()
    },
    getPlanning () {
      axios('http://api-staging.altcoinomy.com/api/v1/video-conference-planning/slots', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`
        }
      }).then(res => {
        console.log(res.data)
      })
    },
    getListOfVideoConf () {
      axios(`https://api-staging.altcoinomy.com/api/v1/video-conference-planning/slots`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.$store.state.token}`,
          'accept': 'application/json'
        }
      }).then(res => {
        console.log(res.data)
      })
    },
    save () {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature()
      console.log(isEmpty)
      console.log(data)
    },
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.done4 = false
      this.done5 = false
      this.done6 = false
      this.done7 = false
      this.step = 1
    }
  }
}
</script>
