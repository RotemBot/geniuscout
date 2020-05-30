import {Point} from './general'

export enum Position {
    STRIKER,
    WINGER,
    MIDFIELDER,
    DEFENSE,
    GOALKEEPER
}

export class FieldSetup {
    public position: Position
    public options: { name: string, location: Point }[]
    private _selectedOptions: { name: string, location: Point }[] = []

    constructor(init: Partial<FieldSetup>) {
        Object.assign(this, init)
    }

    public updateSelection (option: { name: string, location: Point }) {
        if (this.isOptionSelected(option)) {
            this._selectedOptions = this._selectedOptions.filter((o: { name: string, location: Point }) => {
                return o !== option
            })
        } else this._selectedOptions.push(option)
    }

    public isOptionSelected (option: { name: string, location: Point }): boolean {
        return this._selectedOptions.includes(option)
    }

    public get selectedOptions (): { name: string, location: Point }[] {
        return this._selectedOptions
    }

    public get displayPosition () {
        switch (this.position) {
            case Position.DEFENSE:
                return 'Defense (B)'
            case Position.GOALKEEPER:
                return 'Goalkeeper (GK)'
            case Position.MIDFIELDER:
                return 'Midfielder (MF)'
            case Position.STRIKER:
                return 'Striker (ST)'
            case Position.WINGER:
                return 'Winger (W)'
            default: return 'N/A'
        }
    }
}

export const positions = [
    new FieldSetup({ position: Position.GOALKEEPER,
        options: [{ name: 'GK', location: new Point(0.93, 0.5) }
        ] }),
    new FieldSetup({ position: Position.DEFENSE,
        options: [
            { name: 'LB', location: new Point(0.795, 0.8) },
            { name: 'RB', location: new Point(0.795, 0.2) },
            { name: 'CB', location: new Point(0.795, 0.5) },
            { name: 'LCB', location: new Point(0.795, 0.65) },
            { name: 'RCB', location: new Point(0.795, 0.35) }
        ]
    }),
    new FieldSetup({ position: Position.MIDFIELDER,
        options: [
            { name: 'Box to Box - Right', location: new Point(0.5, 0.38) },
            { name: 'Box to Box - Left', location: new Point(0.5, 0.62) },
            { name: 'DM', location: new Point(0.577, 0.5) },
            { name: 'RDM', location: new Point(0.577, 0.38) },
            { name: 'LDM', location: new Point(0.577, 0.62) },
            { name: 'Playmaker', location: new Point(0.423, 0.5) },
        ] }),
    new FieldSetup({ position: Position.WINGER, options: [
            { name: 'LMW', location: new Point(0.5, 0.1) },
            { name: 'RMW', location: new Point(0.5, 0.9) },
            { name: 'RW', location: new Point(0.3, 0.8) },
            { name: 'LW', location: new Point(0.3, 0.2) }
        ]  }),
    new FieldSetup({ position: Position.STRIKER,
        options: [
            { name: 'False 9', location: new Point(0.3, 0.5) },
            { name: 'Classic 9', location: new Point(0.19, 0.5) },
            { name: 'ST', location: new Point(0.19, 0.39) },
            { name: 'ST', location: new Point(0.19, 0.6) }
        ]})
]
