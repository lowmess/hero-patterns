export default function curtain (fill = 000000, opacity = 1) {
  return `url('data:image/svg+xml,%3Csvg width="44" height="12" viewBox="0 0 44 12" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
