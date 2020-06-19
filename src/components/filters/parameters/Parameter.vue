<template>
    <q-item class="bg-black clickable parameter justify-center">
        <q-item-section side class="ranking">
            {{ rank }}
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-secondary" style="font-size: x-large">
                {{ param.label }}
            </q-item-label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-item-section>
        <q-item-section side>
            <div class="video-mask">
                <video
                        autoplay
                        loop
                        src="../../../assets/video/finishing.mp4"
                        height="90px"
                        muted
                ></video>
            </div>
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component({
        name: 'parameter',
        props: {
            param: {
                required: true
            },
            rank: {
                type: Number,
                required: true
            }
        }
    })
    export default class Parameter extends Vue {
        public readonly param: { label: string, value: number}
        public readonly rank: number
    }
</script>

<style lang="stylus" scoped>
    .parameter {
        margin-top 10px
        margin-bottom 10px
        border-radius 3px
    }
    .video-mask {
        border-radius 10px
        overflow hidden
        max-height 90%
        height fit-content
    }

    .ranking {
        font-size large
        font-weight bold
    }
</style>
