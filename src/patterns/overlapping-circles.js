import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const overlappingCircles = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M50%2050c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010s-10-4.477-10-10%204.477-10%2010-10zM10%2010c0-5.523%204.477-10%2010-10s10%204.477%2010%2010-4.477%2010-10%2010c0%205.523-4.477%2010-10%2010S0%2025.523%200%2020s4.477-10%2010-10zm10%208c4.418%200%208-3.582%208-8s-3.582-8-8-8-8%203.582-8%208%203.582%208%208%208zm40%2040c4.418%200%208-3.582%208-8s-3.582-8-8-8-8%203.582-8%208%203.582%208%208%208z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
