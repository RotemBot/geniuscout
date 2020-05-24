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
    label: string
    continent: string
    abbreviation: string
    flag: string
    globeMarker: any
    leagues: string[]
}

export class Country implements Country {
    public label: string
    public continent: string
    public abbreviation: string
    public flag: string
    public globeMarker: any
    public leagues: string[]
    constructor(init: Partial<Country>) {
        Object.assign(this, init)
    }

    public showMarkerPopup () {
        if (this.globeMarker) {
            this.globeMarker.showPopup()
        }
    }

    public hideMarkerPopup () {
        if (this.globeMarker) {
            this.globeMarker.closePopup()
        }
    }
}
