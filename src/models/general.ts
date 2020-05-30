export interface SelectOption {
    label: string
    value: any
    icon?: string
    inset?: boolean
    sublabel?: string
    leftColor?: string
    rightColor?: string
    rightIcon?: string
    stamp?: string
    avatar?: string
    color?: string
    leftInverted?: boolean
    leftTextColor?: string
    image?: string // url
    labelLines?: number
    sublabelLines?: number
    rightAvatar?: string
    rightLetter?: string
    rightImage?: string
    rightInverted?: string
    rightTextColor?: string
    className?: string
}

export interface TableColumn {
    name: string
    label: string
    field: string
    required?: boolean
    align?: 'left' | 'right' | 'center'
    sortable?: boolean
    sort?: (a: any, b: any, rowA: object, rowB: object) => number
    format?: (val: any, row: object) => any
    style?: string
    classes?: string
    headerStyle?: string
    headerClasses?: string
}

export interface Point {
    x: number
    y: number
}

export class Point implements Point {
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
