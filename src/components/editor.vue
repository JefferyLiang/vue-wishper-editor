<template>
  <div class="whisper-editor-container flex-column" :style="{ 'font-size': `${fontSize}px`, 'color': fontColor }" @click.stop="editorInputFocusEvent">
    <div class="inner-container flex-column">
      <div ref="htmlContent" class="content-container">
        <div class="editor-item" v-for="(content, index) in content_arr" :key="index" style="width: 100%;padding: 3px 0px; min-height: 24px;position: relative;">
          <p v-if="content.type === 'text'">{{ content.text }}</p>
          <div v-if="content.type === 'image'" class="image-container" style="position: relative; width: calc(100% + 40px);margin-left: -25px;" @mouseover="hover_idx = index" @mouseout="hover_idx = -1">
            <div v-show="hover_idx === index" class="btn flex-column" @click.stop="removeImageItem(index)">
              <w-icon name="times"></w-icon>
            </div>
            <img :src="content.base64" style="width: 100%">
          </div>
        </div>
      </div>
      <div class="input-container flex-row">
        <input type="text" ref="editor-input" v-model="editor_input_str" @keyup.enter="inputEnterKeyUp" @keydown.delete="inputDeleteKeyDown" :placeholder="(content_arr.length === 0 && editor_input_str === '') ? placeholder : ''">
        <div class="insert-btn-group-container flex-row">
          <div v-show="editor_input_str.length === 0" class="image-btn-container" @click="uploadImage">
            <w-icon class="icon" name="camera"></w-icon>
            <input v-show="false" ref="imageUpload" type="file" @change="uploadAndAddToDom">
          </div>
        </div>
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
      editor_input_str: '',
      is_focus_input: false,
      content_arr: [],
      hover_idx: -1
    }
  },
  computed: {
    content_len () {
      console.log('in')
      return this.content_arr
    }
  },
  methods: {
    editorInputFocusEvent () {
      this.is_focus_input = true
      this.$refs['editor-input'].focus()
    },
    contentUpdateEvent () {
      setTimeout(() => {
        this.$emit('change', this.$refs.htmlContent.innerHTML)
      }, 0)
    },
    inputEnterKeyUp () {
      if (this.editor_input_str === '' || this.editor_input_str.length === 0) this.pushEmptyToContent()
      else {
        this.pushTextToContent(this.editor_input_str)
        this.editor_input_str = ''
      }
    },
    inputDeleteKeyDown () {
      if (this.content_arr.length === 0) return false
      if ((this.editor_input_str.length === 0 || this.editor_input_str === '')) {
        if (this.content_arr[this.content_arr.length - 1].type === 'empty' || this.content_arr[this.content_arr.length - 1].type === 'text') this.backToTheBeforeLine()
      }
    },
    backToTheBeforeLine () {
      this.editor_input_str = this.content_arr[this.content_arr.length - 1].text
      this.content_arr.pop()
      this.contentUpdateEvent()
    },
    pushEmptyToContent () {
      this.content_arr.push({
        type: 'empty',
        text: ''
      })
      this.contentUpdateEvent()
    },
    pushTextToContent (msg) {
      this.content_arr.push({
        type: 'text',
        text: msg
      })
      this.contentUpdateEvent()
    },
    uploadImage () {
      this.$refs.imageUpload.click()
      this.$refs.imageUpload
    },
    uploadAndAddToDom () {
      let reader = new FileReader()
      reader.readAsDataURL(this.$refs.imageUpload.files[0])
      reader.onload = (res) => {
        this.content_arr.push({
          type: 'image',
          base64: res.srcElement.result
        })
        this.contentUpdateEvent()
      }
    },
    removeImageItem (idx) {
      if (this.content_arr[idx].type !== 'image') return false
      this.content_arr.splice(idx, 1)
      this.contentUpdateEvent()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/public.scss';
.whisper-editor-container {
  width: 100%;
  min-height: 120px;
  position: relative;
  .inner-container {
    width: 100%;
    .content-container {
      width: 100%;
      .editor-item {
        > p {
          margin-top: 0px!important;
          margin-bottom: 5px;
          text-align: left;
        }
        .image-container {
          .btn {
            z-index: 10;
            position: absolute;
            top: -10px;
            left: 90%;
            width: 25px;
            height: 25px;
            cursor: pointer;
            background-color: $danger;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
input {
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
}
.icon {
  color: $font;
  cursor: pointer;
  transition: color .3s;
  &:hover {
    color: $mainFont;

  }
}
</style>
