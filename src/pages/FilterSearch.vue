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
            <q-tab-panel name="physical">
                <physical-filter></physical-filter>
            </q-tab-panel>
            <q-tab-panel name="parameters">
                <parameter-order></parameter-order>
            </q-tab-panel>
<!--            <q-tab-panel name="finishing">-->
<!--                <finishing-levels></finishing-levels>-->
<!--            </q-tab-panel>-->
<!--            <q-tab-panel name="air_struggles"></q-tab-panel>-->
<!--            <q-tab-panel name="back_to_goal">-->
<!--                <back-to-goal-measurements></back-to-goal-measurements>-->
<!--            </q-tab-panel>-->
<!--            <q-tab-panel name="opportunity_making">-->
<!--                <opportunity-making></opportunity-making>-->
<!--            </q-tab-panel>-->
<!--            <q-tab-panel name="depth_movement">-->
<!--                <depth-movement></depth-movement>-->
<!--            </q-tab-panel>-->
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
                    name="parameters"
                    label="Parameters"
                    icon="low_priority"
            ></q-tab>
<!--            <q-tab-->
<!--                    name="finishing"-->
<!--                    label="Finishing"-->
<!--                    icon="flag"-->
<!--            ></q-tab>-->
<!--            <q-tab-->
<!--                    name="air_struggles"-->
<!--                    label="Air Struggles"-->
<!--                    icon="sports_handball"-->
<!--            ></q-tab>-->
<!--            <q-tab-->
<!--                    name="back_to_goal"-->
<!--                    label="Back to Goal"-->
<!--                    icon="fas fa-eye-slash"-->
<!--            ></q-tab>-->
<!--            <q-tab-->
<!--                    name="depth_movement"-->
<!--                    label="Depth Movement"-->
<!--                    icon="exit_to_app"-->
<!--            ></q-tab>-->
<!--            <q-tab-->
<!--                    name="opportunity_making"-->
<!--                    label="Opportunity Making"-->
<!--                    icon="emoji_objects"-->
<!--            ></q-tab>-->
        </q-tabs>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import ScopeFilter from '../components/filters/scope/ScopeFilter.vue'
    import PositionFilter from '../components/filters/position/PositionFilter.vue'
    import PhysicalFilter from '../components/filters/physical/PhysicalFilter.vue'
    import FinishingLevels from '../components/filters/finishing/FinishingLevels.vue'
    import BackToGoalMeasurements from '../components/filters/backToGoal/BackToGoalMeasurements.vue'
    import OpportunityMaking from '../components/filters/opportunityMaking/OpportunityMaking.vue'
    import DepthMovement from '../components/filters/depthMovement/DepthMovement.vue'
    import ParameterOrder from '../components/filters/parameters/ParameterOrder.vue'

    @Component({ name: 'filter-search',
        components: {
            ParameterOrder,
            DepthMovement,
            OpportunityMaking,
            BackToGoalMeasurements,
            FinishingLevels,
            PhysicalFilter,
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
