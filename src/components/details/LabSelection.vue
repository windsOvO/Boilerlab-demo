<template>
  <b-dropdown aria-role="menu"
              v-model="navigation">
    <a
      class="navbar-item"
      slot="trigger"
      role="button">
      <span>{{currentLab}}</span>
      <b-icon pack="fas"
              icon="angle-down"
              type="is-primary"></b-icon>
    </a>
    <b-dropdown-item v-for="(item, index) in labs"
                     aria-role="menuitem"
                     :value="item"
                     :key="index"
                     @click="changeLabs(item)">
      <div>
        <h2>{{item}}</h2>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import firebase from '../../firebase'

export default {
  name: 'LabSelection',
  data () {
    return {
      navigation: '',
      currentLab: 'Select Lab',
      labs: []
    }
  },
  methods: {
    getLabs () {
      return new Promise((resolve, reject) => {
        const db = firebase.firestore()
        db.collection('labs').orderBy('labOrder').get()
          .then(query => {
            const labNames = []
            query.forEach(doc => {
              labNames.push(doc.data().labName)
            })
            resolve(labNames)
          })
      })
    },
    changeLabs (labName) {
      this.currentLab = labName
      const db = firebase.firestore()
      db.collection('labs').where('labName', '==', labName)
        .get()
        .then(query => {
          query.forEach(doc => {
            this.$store.commit('setLab', doc.data())
            // console.log(this.$store.state.currentLab)
          })
        })
    }
  },
  // async initial operation
  async mounted () {
    try {
      this.labs = await this.getLabs()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
