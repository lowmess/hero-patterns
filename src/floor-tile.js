export default function floorTile (fill = 000000, opacity = 1) {
  return `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 10h10v10H0V10zM10 0h10v10H10V0z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
