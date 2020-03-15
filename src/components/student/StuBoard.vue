<template>
  <div class="columns is-multiline
              is-mobile">
<!--    Board 和 card直接用div隔开控制一下-->
    <div class="column"
         v-for="(item, key) in students"
         :key="key">
      <stu-card :name="item.name">
      </stu-card>
    </div>
  </div>
</template>

<script>
import StuCard from './StuCard'
import firebase from '../../firebase'

export default {
  name: 'StuBoard',
  components: {
    'stu-card': StuCard
  },
  data () {
    return {
      students: []
    }
  },
  mounted () {
    const db = firebase.firestore()
    const section = this.$store.state.userInfo.section
    // admin privilege
    if (section === 0) {
      db.collection('students')
        .get()
        .then(query => {
          query.forEach(doc => {
            this.students.push({
              name: doc.id,
              info: doc.data()
            })
          })
        })
        .catch(err => console.log('Error getting documents:', err))
    } else {
      db.collection('students')
        .where('section', '==', section)
        .get()
        .then(query => {
          query.forEach(doc => {
            this.students.push({
              name: doc.id,
              info: doc.data()
            })
          })
        })
        .catch(err => console.log('Error getting documents:', err))
    }
  }
}
</script>

<style scoped>

</style>
