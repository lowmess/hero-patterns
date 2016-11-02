export default function flippedDiamonds (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"%3E%3Cpath d="M8 0v20L0 10M16 0v10L8 0M16 10v10H8"/%3E%3C/g%3E%3C/svg%3E')`
}
