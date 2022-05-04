import { createControlComponent } from '@cea3/react-leaflet-core'
import { Control } from 'leaflet'

export type ZoomControlProps = Control.ZoomOptions

export const ZoomControl = createControlComponent<
  Control.Zoom,
  ZoomControlProps
>(function createZoomControl(props) {
  return new Control.Zoom(props)
})
