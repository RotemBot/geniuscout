<template>
    <div class="column col" style="height: 100%">
        <q-table
                :columns="cols"
                :data="countries"
                grid
                row-key="label"
                :pagination.sync="pagination"
                hide-bottom
        >
            <template v-slot:item="props">
                <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
                    <q-card class="bg-black" v-if="api.getLeagues(props.row.country)">
                        <q-card-section class="text-center">
                            <q-img
                                    :src="props.row.flag"
                                    height="40px"
                                    width="60px"
                                    style="margin-bottom: 15px"
                            ></q-img>
                            <br>
                            <strong
                                  style="font-size: x-large"
                            >
                                {{ props.row.country }}
                            </strong>
                        </q-card-section>
                        <q-separator color="secondary"/>
                        <q-card-section class="flex flex-center">
                            <q-select
                                    :options="api.getLeagues(props.row.country)"
                                    v-model="selectedLeagues[props.row.country]"
                                    label="Leagues"
                                    multiple
                                    style="width: 50%"
                                    options-dense
                                    behavior="menu"
                                    label-color="secondary"
                            >
                                <template v-slot:selected-item="scope">
                                    <q-chip
                                            removable
                                            color="accent"
                                            text-color="dark"
                                            @remove="scope.removeAtIndex(scope.index)"
                                            class="q-ma-none"
                                            dense
                                    >
                                        <q-avatar>
                                            <img :src="scope.opt.logo"></img>
                                        </q-avatar>
                                        {{ scope.opt.name }}
                                    </q-chip>
                                </template>
                                <template v-slot:option="scope">
                                    <q-item
                                            v-bind="scope.itemProps"
                                            v-on="scope.itemEvents"
                                            dense
                                    >
                                        <q-item-section avatar>
                                            <q-img :src="scope.opt.logo"></q-img>
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label v-html="scope.opt.name" />
                                        </q-item-section>
                                    </q-item>
                                </template>
                            </q-select>
                        </q-card-section>
                    </q-card>
                </div>
            </template>
        </q-table>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import {Country, TableColumn} from '@/models'
    import FootballAPI, {footballAPI} from '../../services/FootballAPI'

    @Component({name: 'selected-countries',
        props: {
            countries: {
                required: true,
                type: Array
            },
        }
    })
    export default class SelectedCountries extends Vue {
        public readonly countries: Country[]
        public api: FootballAPI = footballAPI
        public selectedLeagues: { [countryName: string]: string[] } = {}
        public pagination: any = {
            rowsPerPage: 0
        }

        public cols: TableColumn[] = [
            {
                name: 'flag',
                label: 'Flag',
                field: 'flag',
                sortable: false
            },
            {
                name: 'name',
                label: 'Name',
                field: 'label',
                sortable: true
            },
            {
                name: 'continent',
                label: 'Continent',
                field: 'continent',
                sortable: true
            },
            {
                name: 'leagues',
                label: 'Leagues',
                field: 'leagues',
                sortable: false
            }
        ]

        public mounted () {
            // @ts-ignore
            window.selectedCountries = this
        }

        public beforeDestroy () {
            // @ts-ignore
            window.selectedCountries = undefined
        }
    }
</script>

<style lang="stylus" scoped>
    .countries-scroll {
        max-height calc(100vh - 210px)
    }
</style>
