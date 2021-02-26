<template>
  <div class="about">
    <h1>{{count}}</h1>
    <h3>{{ hihi }}</h3>
    <div>{{doneTodos}}</div>
    <div>{{doneTodosSum}}</div>
    <div>{{getTodoByText('3')}}</div>
    <button @click="clickCount()">hihi</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'About',
    computed: {
      ...mapState([
        'count',
        'hihi'
      ]),
      ...mapGetters([
        'doneTodos',
        'doneTodosSum',
        'getTodoByText'
      ])
    },
    methods: { 
      ...mapMutations([
         'increment'
      ]),
      clickCount() {
        this.increment()
      }
    }
  }
</script>