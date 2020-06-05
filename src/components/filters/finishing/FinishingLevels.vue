<template>
    <div class="column justify-around full-height" style="overflow: scroll">
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
        <div class="row justify-evenly">
            <div class="column">
                <div class="row slider-title">
                    Speed
                </div>
                <q-slider
                        v-model="level1"
                        :min="0"
                        :max="100"
                        vertical
                        :label-value="`${level1}%`"
                        label-always
                        reverse
                        color="secondary"
                        label-text-color="black"
                ></q-slider>
            </div>
            <div class="column">
                <div class="row slider-title">
                    Accuracy
                </div>
                <q-slider
                        v-model="level2"
                        :min="0"
                        :max="100"
                        vertical
                        :label-value="`${level2}%`"
                        label-always
                        reverse
                        color="secondary"
                        label-text-color="black"
                ></q-slider>
            </div>
            <div class="column">
                <div class="row slider-title">
                    Distance
                </div>
                <q-slider
                        v-model="level3"
                        :min="0"
                        :max="100"
                        vertical
                        :label-value="`${level3}%`"
                        label-always
                        reverse
                        color="secondary"
                        label-text-color="black"
                ></q-slider>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component({name: 'finishing-levels'})
    export default class FinishingLevels extends Vue {
        public level1: number = 50
        public level2: number = 50
        public level3: number = 50
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
