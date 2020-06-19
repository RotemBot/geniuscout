<template>
    <div class="column justify-around full-height" style="overflow: hidden">
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="accent" name="fas fa-bullseye"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="toDeadZone"
                                :min="0"
                                :max="50"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Movements Towards Dead Zone</q-item-label>
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
                                v-model="doubleMoves"
                                :min="0"
                                :max="50"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Double-Move Count</q-item-label>
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
                                v-model="timing"
                                :min="0"
                                :max="100"
                                :left-label-value="`${timing.min}m`"
                                :right-label-value="`${timing.max}m`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Timing</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {Range} from '@/models'

    @Component({name: 'depth-movement'})
    export default class DepthMovement extends Vue {
        public toDeadZone: Range = { min: 10, max: 30}
        public doubleMoves: Range = { min: 10, max: 30}
        public timing: Range = { min: 30, max: 70 }
    }
</script>

<style lang="stylus" scoped>

</style>
