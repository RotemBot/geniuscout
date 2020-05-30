import {SelectOption} from '@/models'
import * as _ from 'lodash'

export function filterOptions (
    params: { term: string, update: Function, options: any[], setFiltered: Function }
) {
    const { term, update, options, setFiltered } = params
    if (!term || term.length === 0) {
        update(() => {
            setFiltered(options)
        })
    } else {
        update(() => {
            setFiltered(options.filter((option: SelectOption | string) => {
                return termContained(term, option)
            }))
        })
    }
}


export function termContained (term: string, toCompare: any) {
    if (_.isObject(toCompare)) {
        toCompare = toCompare as SelectOption
        return (toCompare.country).toLowerCase().includes(term.toLowerCase())
    }
    else if (_.isString(toCompare)) {
        return (toCompare).toLowerCase().includes(term.toLowerCase())
    }
    else { return false }
}

export async function createImgElementFromURL (url: string): Promise<HTMLImageElement> {
    if (!url || !url.length) {
        throw new Error(`Can't create image from empty DataURL`)
    }
    const img = new Image()
    img.src = url
    await new Promise((resolve) => img.onload = resolve)
    return img
}
