<template>
    <div class="column justify-start full-height" id="scope_filters">
        <div class="row justify-center">
            <div class="column col-auto">
                <q-select
                        v-model="selectedCountries"
                        multiple
                        :options="filteredCountryOptions"
                        use-input
                        @filter="filterOptions"
                        @input="selectionUpdated"
                        rounded
                        standout="bg-accent text-black"
                        placeholder="Select Countries"
                        behavior="menu"
                        hide-selected
                >
                    <template v-slot:option="scope">
                        <q-item
                                v-bind="scope.itemProps"
                                v-on="scope.itemEvents"
                        >
                            <q-item-section avatar>
                                <q-img :src="scope.opt.flag"></q-img>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label v-html="scope.opt.country" />
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </div>
        </div>
        <div class="row justify-center selected-countries">
            <selected-countries v-model="selectedCountries"></selected-countries>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Country, CountryContinent, CountryLocation} from '../../models'
    import Flags from './Flags.vue'
    import {filterOptions} from '../../utils'
    import * as _ from 'lodash'
    import SelectedCountries from './SelectedCountries.vue'
    import {footballAPI} from '../../services/FootballAPI'

    @Component({name: 'scope-filter',
        components: {SelectedCountries, Flags}
    })
    export default class ScopeFilter extends Vue {
        public countries: Country[] = []
        public filteredCountryOptions: Country[] = []
        public selectedCountries: Country[] = []
        public countriesByContinent = require('../../assets/jsons/country-by-continent.json') as CountryContinent[]
        public countriesByLocation = require('../../assets/jsons/country-by-geolocation.json') as CountryLocation[]

        public async mounted () {
            await footballAPI.loadCountries()
            this.countries = footballAPI.countries
            this.filteredCountryOptions = this.countries
            // @ts-ignore
            window.scopeFilter = this
        }

        public get optionsWithoutSelected () {
            return _.difference(this.countries, this.selectedCountries)
        }

        public filterOptions (term: string, update: Function) {
            const setFiltered = (val: any) => { this.filteredCountryOptions = val }
            filterOptions( { term, update, options: this.optionsWithoutSelected, setFiltered } )
        }

        public async selectionUpdated () {
            this.filteredCountryOptions = _.difference(this.filteredCountryOptions, this.selectedCountries)
        }

        private _getCountryLocation (country: string): { lt: number, ln: number } | null {
            const found = this.countriesByLocation.find((f: CountryLocation) => f.country === country)
            if (found) {
                if (found.east === null) {
                    console.log(`Country ${found.country} has no location in the system`)
                    return null
                } else {
                    return {
                        lt: found.south + ((found.north - found.south) / 2),
                        ln: found.west + ((found.east - found.east) / 2)
                    }
                }
            } else return null
        }

        private _getCountryContinent (country: string): string | null {
            const found = this.countriesByContinent.find((f: CountryContinent) => f.country === country)
            if (found) {
                return found.continent
            } else return null
        }
    }
</script>

<style lang="stylus" scoped>
    .selected-countries {
        flex-grow 1
        margin-top 15px
    }
</style>
<style lang="stylus">
    .cesium-credit-textContainer {
        display none
    }
</style>
