<template>
  <div class="wishper-editor-container flex-column">
    <div class="inner-container flex-column">
      <div class="content-container" :style="{ 'font-size': `${fontSize}px` }">
        <!-- content begin -->
        <div class="content-inner"
        contenteditable="true" 
        @keyup.delete="deleteKeyUpEvent"
        @keydown.delete="stopDeleteEvent($event)"
        @keyup.enter="enterKeyUpEvent"
        @click="setIconGroupLocation"
        @keyup.down="directionKeyUpEvent"
        @keyup.up="directionKeyUpEvent"
        @keyup.left="directionKeyUpEvent"
        @keyup.right="directionKeyUpEvent"
        @input="setIconGroupLocation"
        @blur="editorBlur">
          <div ref="contentHTML"
          class="content"
          @click.stop="editorClick">
            <p><br></p>
          </div>
          <!-- tool begin -->
          <div contenteditable="false" v-show="show_icon_group" class="tools icon-btn-group-container flex-row" :style="{ top: `${icon_group_top}px` }">
            <div class="icon-item" @click.stop="openUploadImageInput">
              <w-icon name="camera" :scale="`${fontSize / 14}`"></w-icon>
              <input type="file" ref="uploadImageInput" maxlength="1" accept="image/png, image/jpeg, image/jpg" @change="getTheUploadImage" v-show="false">
            </div>
          </div>
          <!-- <div class="tools image-close-btn flex-row">
            <w-icon name="times"></w-icon>
          </div> -->
          <!-- end -->
        </div>
        <!-- content end -->
      </div>
    </div>
  </div>
</template>

<script>
// vue-awesome icon
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/camera'
// import vue-awesome
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'w-editor',
  components: {
    'w-icon': Icon
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String
    },
    'fontSize': {
      type: Number,
      default: () => 14
    },
    'fontColor': {
      type: String,
      default: () => '#303133'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      icon_group_top: 14,
      show_icon_group: false,
      content_len: 1,
      is_focus: false,
      focus_item_idx: 0
      // close_btn_top: 0
    }
  },
  methods: {
    deleteKeyUpEvent () {
      // stop the delete when nothing
      // if don't stop it, the <p> would be delete.
      this.content_len = this.getContentChildLength()
    },
    enterKeyUpEvent () {
      this.content_len++
      this.focus_item_idx = this.getFocusEditorItem()
    },
    directionKeyUpEvent () {
      this.setIconGroupLocation()
      this.focus_item_idx = this.getFocusEditorItem()
    },
    stopDeleteEvent (ev) {
      if (this.content_len === 1 && this.show_icon_group) ev.preventDefault()
    },
    editorClick () {
      this.setIconGroupLocation()
      this.is_focus = true
      this.focus_item_idx = this.getFocusEditorItem()
    },
    editorBlur () {
      this.is_focus = false
      this.show_icon_group = false
    },
    getFocusEditorItem () {
      let range = this.getSelectionRange()
      let { parentNode } = range.commonAncestorContainer
      for (let idx = 0; idx < parentNode.children.length ; idx++) {
        let item = parentNode.children[idx]
        if (item.offsetTop === this.icon_group_top) {
          return idx
        }
      }
    },
    openUploadImageInput () {
      this.$refs.uploadImageInput.click()
    },
    getTheUploadImage () {
      let reader = new FileReader()
      reader.readAsDataURL(this.$refs.uploadImageInput.files[0])
      reader.onload = (res) => {
        this.insertImageToDom(res.srcElement.result, this.focus_item_idx)
      }
    },
    insertImageToDom (src, idx) {
      let p = document.createElement('p')
      p.style.margin = 0
      let image = document.createElement('img')
      image.src = src
      image.style.width = 'calc(100% + 40px)'
      image.style.marginLeft = '-20px'
      let dom = this.$refs.contentHTML.childNodes[idx]
      p.appendChild(image)
      dom.parentNode.insertBefore(p, dom)
      setTimeout(() => {
        // add image  hover event
        // image.addEventListener('mouseover', () => {
        //   console.log(image.offsetTop)
        // })
        this.setIconGroupLocation()
        let range = this.getSelectionRange()
        range.setStart(dom, 0)
      })
    },
    getSelectionRange () {
      let selection = window.getSelection()
      return selection.getRangeAt(0)
    },
    getContentChildLength () {
      let p_dom_item_total = 0
      let parent = this.$refs.contentHTML
      for (let item of parent.children) {
        if (item.nodeName === 'P') p_dom_item_total++;
      }
      return p_dom_item_total
    },
    setIconGroupLocation () {
      let range = this.getSelectionRange()
      // update the icon gourp location
      this.icon_group_top = range.commonAncestorContainer.offsetTop
      this.show_icon_group = (range.commonAncestorContainer.textContent === '' ? true : false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/public.scss';
.wishper-editor-container{
  width: 100%;
}
.content-container{
  text-align: left;
  position: relative;
  .content-inner {
    &:focus {
      outline: none;
    }
    .content {
      padding: 0px 20px;
    }
  }
}
.icon-btn-group-container{
  position: absolute;
  right: 20px;
  justify-content: center;
  align-items: center;
  .icon-item{
    cursor: pointer;
    margin: {
      left: 5px;
      right: 5px;
    }
  }
}
.image-close-btn{
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: $danger;
  border-radius: 50%;
  cursor: pointer;
  right: 30px;
}
</style>
