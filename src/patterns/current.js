import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const current = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2276%22%20height%3D%2218%22%20viewBox%3D%220%200%2076%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Ecurrent%3C%2Ftitle%3E%3Cpath%20d%3D%22M31.999%2018C29.571%2016.176%2028%2013.271%2028%2010c0-4.418-3.582-8-8-8H0V0h20c5.523%200%2010%204.477%2010%2010%200%204.418%203.582%208%208%208h20c4.418%200%208-3.582%208-8%200-5.523%204.477-10%2010-10v2c-4.418%200-8%203.582-8%208%200%203.271-1.57%206.176-3.999%208H31.999zM64.001%200C62.329%201.256%2060.251%202%2058%202H38c-2.252%200-4.33-.744-6.001-2h32.002z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
