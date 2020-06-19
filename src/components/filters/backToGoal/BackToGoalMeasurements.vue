<template>
    <div class="column justify-around full-height" style="overflow: hidden">
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="transfer_within_a_station"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="distance"
                                :min="0"
                                :max="100"
                                :left-label-value="`${distance.min}cm`"
                                :right-label-value="`${distance.max}cm`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Distance from Ball</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="fas fa-bullseye"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="accuracy"
                                :min="0"
                                :max="100"
                                :left-label-value="`${accuracy.min}%`"
                                :right-label-value="`${accuracy.max}%`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Pass Accuracy</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="fas fa-thumbs-up"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="movement"
                                :min="0"
                                :max="10"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Movement Quality</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {Range} from '@/models'

    @Component({name: 'back-to-goal-measurements'})
    export default class BackToGoalMeasurements extends Vue {
        public distance: Range = { min: 5, max: 25}
        public accuracy: Range = { min: 0, max: 100}
        public movement: Range = { min: 3, max: 8 }
    }
</script>

<style lang="stylus" scoped>

</style>
