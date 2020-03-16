<template>
  <q-card v-if="this.$route.params.id !== undefined" flat class="q-pa-md">
    <div class="row q-pa-md">
      <div class="col">
            Subscription List
        </div>
        <div class="col on-right">
      <q-btn class="float-right" label="Cancel"></q-btn>
        </div>
        </div>
    <div class="q-pa-md">
      <div class="text-h6">
      Demo
      </div>
      <div class="text-body1 q-pa-md">
Demo project is a revolution, it will change the world.
<div class="float-right">
  Status of your subscription: Subscription pending
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
        Is the investor a company or an individual *
        <q-select outlined v-model="model" :options="options" label="Select" />

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Personal details"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        ID card front (side with MRZ)
           <q-input outlined v-model="text" label="Outlined" />

        ID card back (side without MRZ)
           <q-input outlined v-model="text" label="Outlined" />
        First name
           <q-input outlined v-model="text" label="Outlined" />

        Last name
           <q-input outlined v-model="text" label="Outlined" />

        Date of birth
           <q-input outlined v-model="text" label="Outlined" />

        Residential address
           <q-input outlined v-model="text" label="Outlined" />
        Zip code
           <q-input outlined v-model="text" label="Outlined" />
        City
           <q-input outlined v-model="text" label="Outlined" />
        Country
           <q-input outlined v-model="text" label="Outlined" />

        Nationality
           <q-input outlined v-model="text" label="Outlined" />

        Professional activity
           <q-input outlined v-model="text" label="Outlined" />

        Proof of Residence such as utility bill or bank statement (required if you plan to contribute more than CHF 15'000 equivalent).
           <q-input outlined v-model="text" label="Outlined" />

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Annex 1 - Identification of the beneficial owner sheet"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Contribution details"
        caption="Optional"
        icon="create_new_folder"
        :done="done2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Token delivery address"
        icon="add_comment"
        :done="done3"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
  </q-card>
</template>
<script>
export default {
  name: 'SubscriptionForm',
  data: () => ({
    step: 1,
    done1: false,
    done2: false,
    done3: false,
    done4: false,
    done5: false,
    model: null,
    options: [
      'Company', 'Individual'
    ]

  }),
  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.done4 = false
      this.done5 = false
      this.step = 1
    }
  }
}
</script>
