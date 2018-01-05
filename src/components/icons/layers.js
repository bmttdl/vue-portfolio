export default {
  name: 'Icon-Layers',
  props: {
    'Fill': {
      type: String,
      default: '#4a4a4a'
    }
  },
  template:
`<svg :fill="Fill" viewBox="0 0 512.001 512.001">
  <path d="M512,256.001c0-10.821-6.012-20.551-15.694-25.398l-38.122-19.061l38.122-19.06c0.001-0.001,0.004-0.002,0.004-0.002 c9.68-4.845,15.692-14.576,15.692-25.397c0-10.819-6.013-20.55-15.694-25.397L281.09,34.08 c-15.712-7.849-34.47-7.849-50.185,0.001L15.691,141.691C6.013,146.534,0,156.264,0,167.084c0,10.821,6.012,20.551,15.694,25.398 l38.121,19.06l-38.126,19.063C6.012,235.45,0,245.18,0,256.001s6.012,20.551,15.694,25.397l38.121,19.061l-38.118,19.059C6.02,324.353,0.004,334.08,0,344.902c-0.004,10.828,6.008,20.564,15.694,25.412l215.215,107.608 c7.856,3.925,16.471,5.886,25.09,5.886c8.619,0,17.238-1.963,25.095-5.887l215.215-107.608c9.682-4.845,15.695-14.582,15.691-25.41c-0.004-10.822-6.02-20.549-15.694-25.381l-38.122-19.061l38.126-19.063C505.988,276.552,512,266.822,512,256.001z M26.225,171.431c-2.339-1.171-2.687-3.226-2.687-4.346s0.35-3.175,2.683-4.343L241.429,55.138c4.563-2.28,9.568-3.418,14.573-3.418c5.003,0,10.007,1.139,14.567,3.417L485.776,162.74c2.337,1.17,2.687,3.225,2.687,4.345s-0.348,3.175-2.687,4.346L270.572,279.032c-9.125,4.558-20.019,4.558-29.139,0.001L26.225,171.431z M485.783,340.575c2.33,1.164,2.679,3.215,2.679,4.336c0.001,1.123-0.348,3.182-2.683,4.35L270.571,456.865c-9.125,4.558-20.019,4.559-29.139,0.001L26.225,349.262c-2.339-1.171-2.688-3.229-2.687-4.352c0-1.119,0.348-3.171,2.683-4.337l53.912-26.956l150.776,75.387c7.856,3.925,16.471,5.886,25.089,5.886c8.619,0,17.238-1.963,25.095-5.887l150.772-75.386L485.783,340.575z M485.778,260.345L270.571,367.949c-9.125,4.558-20.019,4.559-29.139,0.001L26.225,260.347c-2.339-1.17-2.687-3.225-2.687-4.345c0-1.122,0.348-3.175,2.683-4.344l53.912-26.956l150.776,75.387c7.855,3.925,16.472,5.886,25.089,5.886c8.617,0,17.237-1.962,25.094-5.888l150.774-75.386l53.908,26.954c2.339,1.171,2.687,3.225,2.687,4.346C488.462,257.121,488.113,259.176,485.778,260.345z" />
</svg>`
};