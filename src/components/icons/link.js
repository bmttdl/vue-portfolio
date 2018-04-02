export default {
  name: 'Icon-link',
  props: {
    'Fill': {
      type: String,
      default: '4a4a4a'
    },
    'Stroke': {
      type: String,
      default:'none'
    },
    'Width': {
      type: Number,
      default: 1
    }
  },
  template:
`<svg :fill="Fill" :stroke="Stroke" :stroke-width="Width" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M29 6.41L17.59 5 12 11.59 6.51 5 5 7.41 10.59 12 5 17.59 6.41 19 12 13.41 18.59 19 19 17.59 13.41 12z" />
  <path d="M0 0h24v24H0z" fill="none" />
</svg>`
};