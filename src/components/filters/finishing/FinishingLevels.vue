<template>
    <div class="column justify-around full-height" style="overflow: hidden">
        <div class="row justify-center" style="height: 40%">
            <div class="video-mask">
                <video
                        autoplay
                        loop
                        src="../../../assets/video/finishing.mp4"
                        height="320px"
                        muted
                ></video>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-running"></q-icon>
                    </q-item-section>
                    <q-item-section>
                        <q-range
                                v-model="speed"
                                :min="5"
                                :max="30"
                                :left-label-value="`${speed.min}km/h`"
                                :right-label-value="`${speed.max}km/h`"
                                label-always
                                color="secondary"
                                label-text-color="black"
                                drag-range
                        ></q-range>
                        <q-item-label>Speed</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-bullseye"></q-icon>
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
                        <q-item-label>Accuracy</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
        <div class="row justify-center">
            <div class="column col-xs col-sm col-lg-3 col-md-4">
                <q-item>
                    <q-item-section avatar>
                        <q-icon color="secondary" name="fas fa-arrows-alt-v"></q-icon>
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
                        <q-item-label>Distance</q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {Range} from '@/models'

    @Component({name: 'finishing-levels'})
    export default class FinishingLevels extends Vue {
        public speed: Range = { min: 10, max: 25}
        public accuracy: Range = { min: 0, max: 100}
        public distance: Range = { min: 0, max: 5}
    }
</script>

<style lang="stylus" scoped>
    .slider-title {
        color $accent
        font-size large
        margin-bottom 7px
        font-weight bold
    }

    .video-mask {
        border-radius 10px
        overflow hidden
        max-height 100%
        height fit-content
        max-width 93vw
    }
</style>
