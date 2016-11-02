export default function slantedStars (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 15l15 15H0V15zM15 0l15 15V0H15z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
