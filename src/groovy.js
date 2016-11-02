export default function groovy (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="24" height="40" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
