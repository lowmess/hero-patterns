export default function aztec (fill = 000000, opacity = 1) {
  return `url('data:image/svg+xml,%3Csvg width="32" height="64" viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
