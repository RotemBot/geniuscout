<template>
    <div class="q-page full-height column justify-between">
        <q-tab-panels
            v-model="currentFilter"
            style="flex-grow: 1"
            keep-alive
        >
            <q-tab-panel name="scope">
                <scope-filter></scope-filter>
            </q-tab-panel>
            <q-tab-panel name="position">
                <position-filter></position-filter>
            </q-tab-panel>
            <q-tab-panel name="physical"></q-tab-panel>
            <q-tab-panel name="finishing"></q-tab-panel>
            <q-tab-panel name="air_struggles"></q-tab-panel>
        </q-tab-panels>
        <q-tabs
                v-model="currentFilter"
                indicator-color="secondary"
                style="max-width: 100vw"
                inline-label
        >
            <q-tab
                    name="scope"
                    label="Leagues"
                    icon="my_location"
            ></q-tab>
            <q-tab
                    name="position"
                    label="Position"
                    icon="sports_soccer"
            ></q-tab>
            <q-tab
                    name="physical"
                    label="Physical Attributes"
                    icon="directions_run"
            ></q-tab>
            <q-tab
                    name="finishing"
                    label="Finishing"
                    icon="flag"
            ></q-tab>
            <q-tab
                    name="air_struggles"
                    label="Air Struggles"
                    icon="sports_handball"
            ></q-tab>
        </q-tabs>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import ScopeFilter from '../components/filters/scope/ScopeFilter.vue'
    import PositionFilter from '../components/filters/position/PositionFilter.vue'

    @Component({ name: 'filter-search',
        components: {
            PositionFilter,
            ScopeFilter
        }
    })
    export default class FilterSearch extends Vue {
        public currentFilter: string = 'position'
    }
</script>

<style lang="stylus" scoped>
    .filter-page {
        height 100vh
    }
</style>
