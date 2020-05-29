import axios, {AxiosInstance} from 'axios'
import {Country} from '../models'

interface League {
    league_id: number
    name: string
    type: string
    country: string
    country_code: string | null
    season: number
    season_start: string
    season_end: string
    logo: string
    flag: string | null
    standings: number
    is_current: number
}


export default class FootballAPI {
    private readonly _apiKey: string = '4dbd77a68dbdeaa981a33ec53608d85a'
    private _axios: AxiosInstance
    private _countries: Country[] = []
    private leagues: { [country: string]: League[] } = {}

    constructor() {
        this._axios = axios
        this._axios.defaults.headers.common['X-RapidAPI-Key'] = this._apiKey
        this._axios.defaults.baseURL = 'https://v2.api-football.com/'
    }

    public async loadCountries () {
        if (!this.countries.length) {
            const res = await this._axios.get('countries')
            this._countries = res.data.api.countries.map((c: any) => new Country(c))
        }
    }

    public async loadLeaguesByCountry (country: string) {
        if (!this.leagues[country] || !this.leagues[country].length) {
            const parsedCountry = country.split(' ').join('_')
            const res = await this._axios.get(`leagues/country/${parsedCountry}/2019`)
            this.leagues[country] = res.data.api.leagues as League[]
        }
    }

    public get countries () {
        return this._countries
    }

    public getLeagues (country: string) {
        return this.leagues[country]
    }
}

export const footballAPI = new FootballAPI()
// @ts-ignore
window.footballAPI = footballAPI
