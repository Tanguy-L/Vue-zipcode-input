<template>
  <div id="app">
    <vue-zipcode-input @get-result-regex="showResult" @get-regex="showRegex" />
  </div>
</template>

<script>
import VueZipcodeInput from './components/VueZipcodeInput.vue'

export default {
  name: 'app',
  components: {
    VueZipcodeInput
  },
  methods: {
    showRegex (value) {
      console.log(value)
    },
    showResult (test) {
      console.log(test)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
