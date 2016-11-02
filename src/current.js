export default function current (fill = 000000, opacity = 0.8) {
  return `url('data:image/svg+xml,%3Csvg width="76" height="18" viewBox="0 0 76 18" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M32 18c-2.43-1.824-4-4.73-4-8 0-4.418-3.582-8-8-8H0V0h20c5.523 0 10 4.477 10 10 0 4.418 3.582 8 8 8h20c4.418 0 8-3.582 8-8 0-5.523 4.477-10 10-10v2c-4.418 0-8 3.582-8 8 0 3.27-1.57 6.176-4 8H32zM64 0c-1.67 1.256-3.748 2-6 2H38c-2.252 0-4.33-.744-6-2h32z" fill="%23${fill}" fill-opacity="${opacity}" fill-rule="evenodd"/%3E%3C/svg%3E')`
}
