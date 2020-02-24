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

const students = [
  {
    name: 'Tom',
    id: '1'
  },
  {
    name: 'Jack',
    id: '2'
  },
  {
    name: 'Rose',
    id: '2'
  },
  {
    name: 'Steven',
    id: '2'
  },
  {
    name: 'Tom',
    id: '2'
  },
  {
    name: 'Jack',
    id: '2'
  },
  {
    name: 'Jack',
    id: '3'
  }
]

export default {
  name: 'StuBoard',
  components: {
    'stu-card': StuCard
  },
  data () {
    return {
      students: students
    }
  }
}
</script>

<style scoped>

</style>
