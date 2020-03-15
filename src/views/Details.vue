<template>
  <section class="hero is-primary is-fullheight-with-navbar is-bold">
    <div class="hero-body">
      <div class="container is-fluid">
        <div v-if="lab !== null">
          <h2 class="title">{{ lab.labName }}</h2>
          <stu-steps :progress="studentProgress"
                     @set-step="setStep($event)"></stu-steps>
        </div>
        <h2 v-else class="title">Please select lab</h2>
      </div>
    </div>
  </section>
</template>

<script>
import Steps from '../components/details/Steps'
import firebase from '../firebase'

export default {
  name: 'Details',
  components: {
    'stu-steps': Steps
  },
  data () {
    return {
      studentProgress: {},
      name: String
    }
  },
  computed: {
    lab () {
      return this.$store.state.currentLab
    }
  },
  methods: {
    setStep (item) {
      this.studentProgress[this.lab.labName] = item
    }
  },
  mounted () {
    this.name = this.$route.query.name
    const db = firebase.firestore()
    const student = db.collection('students').doc(this.name)
    student.get()
      .then(doc => {
        const info = doc.data()
        if (info.progress !== undefined) {
          this.studentProgress = info.progress
        }
      })
  },
  beforeDestroy () {
    this.$store.commit('resetLab')
    // update progress in database
    const db = firebase.firestore()
    // console.log(this.name)
    db.collection('students').doc(this.name)
      .update({
        progress: this.studentProgress
      }).then(() => {
        console.log('Document successfully updated!')
      })
  }
}
</script>

<style scoped>

</style>
