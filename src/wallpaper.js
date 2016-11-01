export default function wallpaper (fill = 000000, opacity = 1) {
  return `url('data:image/svg+xml,%3Csvg width="84" height="16" viewBox="0 0 84 16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M78 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM30 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM10 0h2v16h-2V0zm6 0h4v16h-4V0zM2 0h4v16H2V0zm50 0h2v16h-2V0zM38 0h2v16h-2V0zm28 0h2v16h-2V0zm-8 0h6v16h-6V0zM42 0h6v16h-6V0z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
