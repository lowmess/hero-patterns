export default function houndstooth (fill = 000000, opacity = 1) {
  return `url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"%3E%3Ctitle%3Ehoundstooth%3C/title%3E%3Cg fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"%3E%3Cpath d="M0 18h6l6-6v6h6l-6 6H0M24 18v6h-6M24 0l-6 6h-6l6-6M12 0v6L0 18v-6l6-6H0V0"/%3E%3C/g%3E%3C/svg%3E')`
}
