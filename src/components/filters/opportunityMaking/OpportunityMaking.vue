<template>
    <div class="column justify-around full-height" style="overflow: hidden">
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="fas fa-running"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="distanceFromBody"
                                :min="5"
                                :max="100"
                                :left-label-value="`${distanceFromBody.min}cm`"
                                :right-label-value="`${distanceFromBody.max}cm`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Dribble Quality (Avg. distance of ball from player)</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="fas fa-running"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="speed"
                                :min="5"
                                :max="100"
                                :left-label-value="`${speed.min}km/h`"
                                :right-label-value="`${speed.max}km/h`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Shot Speed</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="group"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="obstructingPlayers"
                                :min="0"
                                :max="11"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Obstructing Players</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {Range} from '@/models'

    @Component({name: 'opportunity-making'})
    export default class OpportunityMaking extends Vue {
        public speed: Range = { min: 10, max: 50}
        public distanceFromBody: Range = { min: 10, max: 50}
        public obstructingPlayers: Range = { min: 3, max: 6}
    }
</script>

<style lang="stylus" scoped>

</style>
