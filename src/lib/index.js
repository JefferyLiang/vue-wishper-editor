import EditorComponent from '../components/editor'

const WishperEditor = {
  install (Vue, options) {
    Vue.component(EditorComponent.name, EditorComponent)
  }
}

export default WishperEditor