export default function pixelDots (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
