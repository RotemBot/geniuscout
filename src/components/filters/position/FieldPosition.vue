<template>
    <canvas id="field"></canvas>
</template>

<script lang="ts">
    import {Component, Model, Vue, Watch} from 'vue-property-decorator'
    import {createImgElementFromURL} from '../../../utils'
    import {FieldSetup, Point} from '../../../models'
    import {fabric} from 'fabric'
    import {IEvent} from 'fabric/fabric-impl'

    // tslint:disable-next-line: no-var-requires
    const field = require('../../../assets/images/football-field.jpg')

    @Component({name: 'field-position'})
    export default class FieldPosition extends Vue {
        private _canvas: fabric.Canvas = null as any
        private _vertical: boolean = false

        @Model('update')
        public selectedPosition: FieldSetup| null

        private async _initCanvas () {
            const img = await createImgElementFromURL(field)
            const screenRatio = this.windowWidth / this.windowHeight
            const dims = this._getCanvasDimensions(screenRatio, img.width, img.height)
            this._canvas = new fabric.Canvas(`field`, {
                imageSmoothingEnabled: true,
                containerClass: `${this.constructor.name}-canvas-wrapper`,
                stateful: false,
                selection: true,
                width: dims.width,
                height: dims.height,
                allowTouchScrolling: true
            })
            const fImage = new fabric.Image(img)
            const horizontal = {
                scaleX: this._canvas.width! / img.width,
                scaleY: this._canvas.height! / img.height
            }
            const vertical = {
                scaleX: this._canvas.width! / img.height,
                scaleY: this._canvas.height! / img.width,
                originX: 'center',
                originY: 'center',
                top: (this._canvas.height! / 2),
                left: (this._canvas.width! / 2),
                angle: 90
            }
            this._canvas.setBackgroundImage(
                fImage,
                this._canvas.renderAll.bind(this._canvas),
                this._vertical ? vertical : horizontal
            )
            this.onSelectedPositionChanged()
        }

        @Watch('selectedPosition')
        public onSelectedPositionChanged () {
            this._clearCanvas()
            if (this._canvas) {
                if (this.selectedPosition && this.selectedPosition.options) {
                    for (const option of this.selectedPosition.options) {
                        const top: number = this._vertical ? option.location.x * this._canvas.height! : option.location.y * this._canvas.height!
                        const left: number = this._vertical ? option.location.y * this._canvas.width! : option.location.x * this._canvas.width!
                        const active = this.selectedPosition!.isOptionSelected(option)
                        const point = new fabric.Circle({
                            originX: 'center',
                            originY: 'center',
                            top,
                            left,
                            radius: 10,
                            fill: active ? 'rgba(203,158,18,0.56)' : 'rgba(24,53,126,0.56)',
                            stroke: active ?'rgba(41,40,37,0.56)' : 'rgb(0,0,0)',
                            strokeWidth: active ? 2 : 1,
                            lockMovementX: true,
                            lockMovementY: true,
                            hoverCursor: 'pointer',
                            hasControls: false,
                            selectable: false
                        })
                        point.on('mouseup', this.handleClickOnPosition.bind(this))
                        // @ts-ignore
                        point.set({ option })
                        this._canvas.add(point)
                    }
                    this._canvas.requestRenderAll()
                }
            }
        }

        public handleClickOnPosition (e: IEvent) {
            const point = e.target!
            // @ts-ignore
            const option = point.option
            this.selectedPosition!.updateSelection(option)
            const active = this.selectedPosition!.isOptionSelected(option)
            point.set({
                fill: active ? 'rgba(203,158,18,0.56)' : 'rgba(24,53,126,0.56)',
                stroke: active ?'rgba(41,40,37,0.56)' : 'rgb(0,0,0)',
                strokeWidth: active ? 2 : 1
            })
            this.$emit('update', this.selectedPosition)
            this._canvas.requestRenderAll()
        }

        private _clearCanvas () {
            if (this._canvas) {
                this._canvas.remove(...this._canvas.getObjects())
                this._canvas.requestRenderAll()
            }
        }

        private _getCanvasDimensions (screenRatio: number, fieldWidth: number, fieldHeight: number): { width: number, height: number } {
            let ratio = fieldWidth / fieldHeight
            let percentage = 0.5
            if (screenRatio < 1) {
                // vertical
                ratio = fieldHeight / fieldWidth
                percentage = 0.8
                this._vertical = true
            }
            const width = this.windowWidth * percentage
            const height = width / ratio
            return {
                width,
                height
            }
        }

        public get windowWidth (): number {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }

        public get windowHeight (): number {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        public async mounted () {
            // @ts-ignore
            window.fieldPosition = this
            // @ts-ignore
            window.field = field
            await this._initCanvas()
        }

        public beforeDestroy () {
            // @ts-ignore
            window.fieldPoistion = undefined
        }

    }
</script>

<style lang="stylus" scoped>

</style>
