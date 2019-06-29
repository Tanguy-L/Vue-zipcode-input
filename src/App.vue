<template>
  <div id="app">
    <vue-zipcode-input @get-input="showInput" @get-result-regex="showResult" @get-regex="showRegex" />
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
      return value
    },
    showResult (test) {
      return test
    },
    showInput(value){
      return value
    }
  }
}
</script>
