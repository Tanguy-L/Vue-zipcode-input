<template>
  <div id="app">
    <p>Input : {{ input }}</p>
    <p>Regex : {{ resultRegex }}</p>
    <p>Result regex : {{ regex }}</p>
    <vue-zipcode-input @get-input="showInput" @get-result-regex="showResult" @get-regex="showRegex" />
  </div>
</template>

<script>
import VueZipcodeInput from './components/VueZipcodeInput.vue'

export default {
  name: 'app',
  data () {
    return {
      input: '',
      regex: '',
      resultRegex: ''
    }
  },
  components: {
    VueZipcodeInput
  },
  methods: {
    showRegex (value) {
      this.regex = value
      return value
    },
    showResult (test) {
      this.resultRegex = test
      return test
    },
    showInput(value){
      this.input = value
      return value
    }
  }
}
</script>
