<template>
    <div class="column justify-around full-height">
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-arrows-alt-v"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="height"
                                :min="140"
                                :max="220"
                                color="accent"
                                :left-label-value="`${height.min}cm`"
                                :right-label-value="`${height.max}cm`"
                                label-always
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Height</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-weight"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="weight"
                                :min="50"
                                :max="120"
                                :step="0.1"
                                color="accent"
                                :left-label-value="`${weight.min}kg`"
                                :right-label-value="`${weight.max}kg`"
                                label-always
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Weight</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-birthday-cake"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="age"
                                :min="15"
                                :max="40"
                                :step="1"
                                color="accent"
                                label-always
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Age</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-auto">
                <q-btn-toggle
                        v-model="strongSide"
                        :options="sideOptions"
                        flat
                        color="accent"
                        toggle-color="secondary"
                ></q-btn-toggle>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator'
    import {Inclination, Range} from '../../../models'

    @Component({name: 'physical-filter'})
    export default class PhysicalFilter extends Vue {
        public weight: Range = { min: 60, max: 90 }
        public height: Range = { min: 160, max: 190 }
        public age: Range = { min: 20, max: 25 }
        public strongSide: Inclination = Inclination.RIGHT

        public sideOptions = [
            { label: 'Left', value: Inclination.LEFT },
            { label: 'Both', value: Inclination.BOTH },
            { label: 'Right', value: Inclination.RIGHT },
        ]
    }
</script>

<style lang="stylus" scoped>

</style>
