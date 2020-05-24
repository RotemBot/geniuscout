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
        return (toCompare.label).toLowerCase().includes(term.toLowerCase())
    }
    else if (_.isString(toCompare)) {
        return (toCompare).toLowerCase().includes(term.toLowerCase())
    }
    else { return false }
}
