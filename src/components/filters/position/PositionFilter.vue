<template>
    <div class="column justify-between full-height" id="position_filters">
        <div class="row justify-center">
            <q-select
                    v-model="selectedPosition"
                    :options="positions"
                    rounded
                    standout="bg-accent text-black"
                    label="Position"
                    behavior="menu"
                    v-if="ready"
                    :display-value="selectedPosition.displayPosition"
                    color="secondary"
            >
                <template v-slot:option="scope">
                    <q-item
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                    >
                        <q-item-section>
                            <q-item-label v-html="scope.opt.displayPosition" />
                        </q-item-section>
                    </q-item>
                </template>
            </q-select>
        </div>
        <div class="row justify-center">
            <field-position
                    v-model="selectedPosition"
            ></field-position>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import FieldPosition from './FieldPosition.vue'
    import {positions, FieldSetup} from '../../../models'

    @Component({name: 'position-filter',
        components: {FieldPosition}
    })
    export default class PositionFilter extends Vue {
        public positions: FieldSetup[] = []
        public selectedPosition: FieldSetup = null as any
        public ready: boolean = false

        public mounted () {
            this.positions = positions
            this.selectedPosition = this.positions[0]
            // @ts-ignore
            window.positionFilter = this
            this.ready = true
        }

        public beforeDestroy () {
            // @ts-ignore
            window.positionFilter = undefined
        }

    }
</script>

<style lang="stylus" scoped>

</style>
