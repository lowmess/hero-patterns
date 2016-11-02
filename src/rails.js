export default function rails (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M16 6H6v4H4V6H2V4h2V0h2v4h10V0h2v4h2v2h-2v4h-2V6z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
