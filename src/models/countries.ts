export interface CountryContinent {
    country: string
    continent: string
}

export interface CountryLocation {
    country: string
    north: number
    south: number
    west: number
    east: number
}

export interface CountryAbbreviation {
    country: string
    abbreviation: string
}

export interface Country {
    country: string
    code: string
    flag: string
}

export class Country implements Country {
    public country: string
    public code: string
    public flag: string
    constructor(init: Partial<Country>) {
        Object.assign(this, init)
    }
}
