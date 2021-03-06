import { html } from '../vendor/preact.mjs'
import PageHeader from '../ui/header-page.mjs'

export default function Layout (props) {
  props = props || {}

  return html`
<div class="vh-100 o-hidden">
  <${PageHeader} ...${props}><//>
  ${props.children}
</div>
      `
}
