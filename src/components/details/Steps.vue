<template>
  <section>
    <div>Progress</div>
    <div class="columns">
      <div class="column is-5">
        <b-progress :value="(activeStep) / lab.steps.length * 100"
                    type="is-success"
                    show-value
                    size="is-medium"
                    format="percent"></b-progress>
      </div>
    </div>
    <b-steps
      v-model="activeStep"
      :animated="isAnimated"
      :has-navigation="hasNavigation"
      :icon-prev="prevIcon"
      :icon-next="nextIcon">

      <b-step-item key="-1" label="start" :clickable="isStepsClickable"
                   type="is-success">
        <h1 class="title has-text-centered" type="is-success">
          start your lab
        </h1>
        Description
      </b-step-item>
      <b-step-item v-for="(item, index) of lab.steps" :key="index"
                   :label="item.name" :clickable="isStepsClickable"
                   type="is-success">
        <h1 class="title has-text-centered" type="is-success">
          step{{item.number}}:{{item.name}} - points:{{item.points}}
        </h1>
        Description
      </b-step-item>

      <div
        class="buttons"
        v-if="customNavigation"
        slot="navigation"
        slot-scope="{previous, next}">
        <b-button
          type="is-danger"
          icon-pack="fas"
          icon-left="backward"
          :disabled="previous.disabled"
          @click.prevent="previous.action"
          @click="setStep">
          Back
        </b-button>
        <b-button
          class="is-success"
          icon-pack="fas"
          icon-right="forward"
          :disabled="next.disabled"
          @click.prevent="next.action"
          @click="setStep">
          Next
        </b-button>
      </div>
    </b-steps>
  </section>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    progress: Object
  },
  computed: {
    lab () {
      return this.$store.state.currentLab
    }
  },
  data () {
    return {
      activeStep: 0,
      isChange: false,
      // display
      isAnimated: true,
      hasNavigation: true,
      customNavigation: true,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      isStepsClickable: false,
      isProfileSuccess: true
    }
  },
  methods: {
    setStep () {
      this.$emit('set-step', this.activeStep)
    }
  },
  // first load, otherwise will not effect right progress
  // because of v-if
  mounted () {
    this.activeStep = this.progress[this.lab.labName]
  },
  updated () {
    if (this.isChange) {
      this.activeStep = this.progress[this.lab.labName]
      this.isChange = false
    }
  },
  watch: {
    // => function is wrong
    lab: function (newLab, oldLab) {
      console.log('lab is changed!')
      this.isChange = true
    }
  }
}
</script>

<style scoped>
</style>
