<template>
    <div class="column full-height">
        <div class="row full-height justify-center">
            <div class="column col-lg-4 col-md-4 col-sm-11 full-height justify-evenly">
                <draggable v-model="parameters">
                    <transition-group>
                        <parameter
                                v-for="(parameter, index) of parameters"
                                :key="parameter.value"
                                :param="parameter"
                                :rank="index + 1"
                        ></parameter>
                    </transition-group>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import Parameter from './Parameter.vue'
    import draggable from 'vuedraggable'

    @Component({name: 'parameter-order',
        components: {
            Parameter,
            draggable
        }
    })
    export default class ParameterOrder extends Vue {
        public parameters: { label: string, value: number}[] = [
            {
                label: 'Finishing',
                value: 1
            },
            {
                label: 'Back to Goal',
                value: 2
            },
            {
                label: 'Opportunity Making',
                value: 3
            },
            {
                label: 'Depth Movement',
                value: 4
            }
        ]

        public mounted () {
            // @ts-ignore
            window.parameterOrder = this
        }

        public beforeDestroy () {
            // @ts-ignore
            window.parameterOrder = undefined
        }
    }
</script>

<style lang="stylus" scoped>

</style>
