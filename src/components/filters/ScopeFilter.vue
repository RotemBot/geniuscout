<template>
    <div class="column justify-between full-height" id="scope_filters">
        <div class="row justify-center">
            <flags></flags>
            <div class="column col-auto">
                <q-select
                        v-model="selectedCountries"
                        multiple
                        :options="filteredCountryOptions"
                        use-input
                        @filter="filterOptions"
                        @input="generateMarker"
                        rounded
                        standout="bg-accent text-black"
                        placeholder="Select Countries"
                        behavior="menu"
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
                                <q-item-label v-html="scope.opt.label" />
                                <q-item-label caption>{{ scope.opt.continent }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </div>
        </div>
        <div class="row" id="earth_div"></div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Country, CountryAbbreviation, CountryContinent, CountryLocation} from '../../models'
    import Flags from './Flags.vue'
    import {filterOptions} from '../../utils'

    @Component({name: 'scope-filter',
        components: {Flags}
    })
    export default class ScopeFilter extends Vue {
        public earth: any = null
        public countries: Country[] = []
        public filteredCountryOptions: Country[] = []
        public selectedCountries: Country[] = []
        public countriesByContinent = require('../../assets/jsons/country-by-continent.json') as CountryContinent[]
        public countriesByLocation = require('../../assets/jsons/country-by-geolocation.json') as CountryLocation[]
        public countryByAbbreviation = require('../../assets/jsons/country-by-abbreviation.json') as CountryAbbreviation[]

        public mounted () {
            this._generateCountries()
            this.filteredCountryOptions = this.countries
            // @ts-ignore
            this.earth = new WE.map('earth_div', { zooming: false })
            // @ts-ignore
            WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.earth)
            this.earth.setView([31.4117257, 35.0818155], 2)
            // @ts-ignore
            window.scopeFilter = this
        }

        public filterOptions (term: string, update: Function) {
            const setFiltered = (val: any) => { this.filteredCountryOptions = val }
            filterOptions( { term, update, options: this.countries, setFiltered } )
        }

        private _generateCountries () {
            for (const country of this.countryByAbbreviation) {
                const abbreviation = country.abbreviation
                const continent = this._getCountryContinent(country.country)!
                const label = country.country
                const flag = require(`../../assets/flags/30x20/${abbreviation.toLowerCase()}.png`)
                this.countries.push(new Country({
                    label,
                    abbreviation,
                    continent,
                    flag
                }))
            }
        }

        public generateMarker (countries: Country[]) {
            const country = countries[countries.length - 1]
            const img = document.getElementById(`${country.label.toLowerCase()}_flag`) as HTMLImageElement
            const location = this._getCountryLocation(country.label)
            if (!location) {
                console.warn(`Couldn't find location for country ${country.label}`)
                return
            }
            // @ts-ignore
            const marker = WE.marker([location.lt, location.ln], img.src, img.width, 20).addTo(this.earth)
            marker.bindPopup(
                `<span style=\'font-size: 10pt;color: black\'>
                    <b>${country.label}</b>, ${country.continent}
                </span>`,
                {maxWidth: 150, closeButton: true}
            )
            country.globeMarker = marker
            this.earth.panTo([location.lt, location.ln])
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
    #earth_div {
        flex-grow 1
    }
</style>
<style lang="stylus">
    .cesium-credit-textContainer {
        display none
    }
</style>
