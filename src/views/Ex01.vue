<template>
  <div class="about">
    <h1>{{count}}</h1>
    <h3>{{ hihi }}</h3>
    <div>{{doneTodos}}</div>
    <div>{{doneTodosSum}}</div>
    <button @click="increment">sđscs</button>
  </div>
</template>

<script>
  import { mapState, mapGetters,mapMutations } from 'vuex'

  export default {
    name: 'About',
    computed: {
      ...mapState('home',[
        'count',
        'hihi'
      ]),
      ...mapGetters('home',[
        'doneTodos',
        'doneTodosSum'
      ])
    },
    methods: {
      ...mapMutations('home',[
        'increment'
      ])
    }
  }
</script>