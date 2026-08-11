// react-leaflet v4 ships ESM only, which Jest under CRA cannot transform.
// Tests get these lightweight stand-ins instead of a real Leaflet map.
const passthrough = (name) => {
  const Component = ({ children }) => children ?? null
  Component.displayName = name
  return Component
}

export const MapContainer = passthrough('MapContainer')
export const TileLayer = passthrough('TileLayer')
export const Marker = passthrough('Marker')
export const Popup = passthrough('Popup')
