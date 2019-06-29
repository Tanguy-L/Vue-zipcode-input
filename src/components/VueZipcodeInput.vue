<template>
    <div>
        
        <p> Result regex : {{ resultRegex }}</p>
        <p> Current regex : {{ selectedCountry.regex }}</p>
        
        <div class="main-section">
            <div class="icon-flags">
                <ul @click="fullList = !fullList" class="dropdown">
                    <img class="icon" src="../assets/baseline-arrow_drop_down-24px.svg" alt="Fleche vers le bas">
                    <div class="country" >
                        <div class="iti-flag" :class="selectedCountry.name" ></div>
                    </div>
                </ul>
                <ul @click="giveRegex" class="list-countries" v-if="fullList">
                    <div @click="selectNewCountry(country)" class="country-div" v-for="(country, index) in filteredCountries" :key="country + index">
                        <div class="iti-flag" :class="country.name"></div>
                        <li>{{ country.name.slice(0,2).toUpperCase() }}</li>
                    </div>
                </ul>
            </div>
            <input @input="regexEmit" class="input" v-model="zipcode" type="text">
        </div>
    </div>
</template>


<script>
// eslint-disable-next-line
import allCountries from '@/assets/country.js' 

export default {
    data () {
        return {
            allCountries: allCountries,
            fullList: false,
            zipcode: '',
            selectedCountry: {}
        }
    },
    computed: {
        filteredCountries () {
            return allCountries   
        },
        resultRegex () {
            if (this.selectedCountry.regex) {
                let regex = this.selectedCountry.regex
                return regex.test(this.zipcode)
            }
        } 
    },
    methods: {
        selectNewCountry (country) {
            this.selectedCountry = allCountries.find(el => el.fullname === country.fullname)
            this.fullList = !this.fullList
        },
        regexEmit () {
            this.$emit('get-regex', this.selectedCountry.regex)
            this.$emit('get-result-regex', this.resultRegex)
        }
    },
    mounted () {
        this.selectedCountry = allCountries[0]
    }
}
</script>

<style scoped>
.dropdown {
    border: solid 1px black;
    border-radius: 3px;
    width: 55px;
    list-style: none;
    display: flex;
    padding: 1px 7px;
    flex-wrap: wrap;
    margin: 0;
    align-items: center;
    height: 30px;
}

.padding-bottom {
    margin-bottom: 7px;
}

.main-section {
    display: flex;
}

.dropdown:hover {
    box-shadow: 2px 2px 2px rgba(31, 31, 31, 0.336);
    cursor: pointer;
}

.country {
    display: flex;
}

.list-countries {
    list-style: none;
    padding: 0;
    width: 69px;
    display: flex;
    flex-direction: column;
    align-items: end;
    border-radius: 0 0 4px 4px;
    margin: 0;
    box-shadow: 2px 2px 2px rgba(31, 31, 31, 0.336);
}

.list-countries:hover {
    cursor: pointer;
}

.country-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 7px);
    padding-right: 7px; 
    height: 30px;
}

.country-div:hover {
    box-shadow: 2px 2px 2px rgba(31, 31, 31, 0.336);
}

.icon {
    width: 24px;
}

.iti-flag {
  width: 30px;
  height: 20px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url('../assets/flags.png');
  background-repeat: no-repeat;
  background-color: #dbdbdb;
}

.fr {
    height: 20px;
    background-position: -0px 0px;
}

.be {
  height: 20px;
  background-position: -30px 0px;
}

.esp {
    height: 20px;
    background-position: -60px 0px;
}

.en {
    height: 15px;
    background-position: -90px -5px;
}

.margin-top {
    margin-top: 7px;
}

.input {
    border-radius: 4px;
    border: solid black 1px;
    height: 30px;
    width: 100px;
}
</style>

