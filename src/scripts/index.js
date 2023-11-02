import '../scss/utils/fonts.scss'
import '../scss/style.scss'
import { header, navigation, sidebar, slider } from './modules'
import { collapse } from './ui'
import { index } from './page'

function initialization() {
  index()
  header()
  navigation()
  slider()
  collapse()
}
initialization()

