import { createControlComponent } from '@cea3/react-leaflet-core'
import { Control } from 'leaflet'

export type ScaleControlProps = Control.ScaleOptions

export const ScaleControl = createControlComponent<
  Control.Scale,
  ScaleControlProps
>(function createScaleControl(props) {
  return new Control.Scale(props)
})
