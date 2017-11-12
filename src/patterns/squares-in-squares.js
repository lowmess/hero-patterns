import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const squaresInSquares = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2270%22%20height%3D%2270%22%20viewBox%3D%220%200%2070%2070%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Esquares-in-squares%3C%2Ftitle%3E%3Cg%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h35v35H0V0zm5%205h25v25H5V5zm5%205h15v15H10V10zm5%205h5v5h-5v-5zM40%205h25v25H40V5zm5%205h15v15H45V10zm5%205h5v5h-5v-5zM70%2035H35v35h35V35zm-5%205H40v25h25V40zm-5%205H45v15h15V45zm-5%205h-5v5h5v-5zM30%2040H5v25h25V40zm-5%205H10v15h15V45zm-5%205h-5v5h5v-5z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`
