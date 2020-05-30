<template>
    <div v-show="false" id="flags"></div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {CountryAbbreviation} from '@/models'
    import {createImgElementFromURL} from '../../utils'

    @Component({name: 'flags'})
    export default class Flags extends Vue {
        public countryByAbbreviation = require('../../assets/jsons/country-by-abbreviation.json') as CountryAbbreviation[]

        public async mounted () {
            const div = document.getElementById('flags')
            if (!div) {
                console.error(`Couldn't find containing flags div`)
                return
            }
            for (const country of this.countryByAbbreviation) {
                try {
                    const dataUrl = require(`../../assets/flags/30x20/${country.abbreviation.toLowerCase()}.png`)
                    const img = await createImgElementFromURL(dataUrl)
                    img.id = `${country.country.toLowerCase()}_flag`
                    div.appendChild(img)
                } catch (error) {
                    console.warn(`Error creating flag for ${country.country}`, error)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
