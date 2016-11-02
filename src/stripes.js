export default function stripes (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="40" height="1" viewBox="0 0 40 1" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v1H0z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
