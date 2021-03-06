import { html } from '../vendor/preact.mjs'
import BeginURI from '../util/begin-uri.mjs'
import joinClasses from '../util/join-classes.mjs'
const defaultClass = `
pt-4
pr-1
pb-4
pl-1
mt-3
mt-none-lg
mr0
mb-2
mb-none-lg
ml-3
ml-none-lg
order1
order-initial-lg
fw-medium
fs-off-scale
ta-c
upper
br-pill
bg-p26
c-p25
c-h3
c-a5
bg-a7
transition-all
`
// let inWindow = typeof window !== 'undefined'
export default function GlobalLoginLink (props) {
  props = props || {}
  let mergedClass = joinClasses(
    defaultClass,
    props.class,
    props.active
      ? 'active'
      : ''
  )
  // let location = inWindow
  //   ? window.location
  //   : BeginURI('docs','')
  let href = BeginURI(`login`)
  return html`
<a
  href="${href}"
  class="${mergedClass}"
  style="max-width: 6rem;"
>
  Login
</a>
  `
}
