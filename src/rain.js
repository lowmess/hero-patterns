export default function rain (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
