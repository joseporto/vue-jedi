<template>
  <div class='Jedi' :class="{branch: isBranch(content), leaf: !isBranch(content), loading: !loaded}">
    <div v-if="!loaded">{{i18n.strLoading}}</div>
    <div v-if="loaded" class="toggler" :class="{branch: isBranch(content), colapse: !colapsed, expand: colapsed}" v-on:click="toggleCollapse()"></div>
    <div v-if="loaded" class="json-content" :class="{editor:inputActive}">
      <div class="title" :class="{editor:inputActive}">
        {{title}}
        <span class="type" v-if="isBranch(content)">
          {{isArray(content) ? '[' + i18n.strArray + ']' : '{' + i18n.strObject + '}'}}
        </span>
      </div>
      <div v-if="!isBranch(content)" class="data">
        <span class="value" v-if="!isBoolean(content)" v-show="!inputActive" v-on:dblclick="toggleInput()">{{isNull(content) ? i18n.strNull : content}}</span>

        <input class="" v-if="!isBoolean(content) && inputActive" v-model="$parent.content[title]" v-on:keyup.enter="toggleInput()" v-on:blur="blurInput()" />
        <span class="boolean" v-if="isBoolean(content)" v-on:click="$parent.content[title] = !$parent.content[title]">{{!content ? i18n.strFalse : i18n.strTrue}}</span>
        <div class="controls">

        </div>
      </div>
      <div v-if="isBranch(content)">
        <Jedi v-for="(value, key) in nextData" :content="value" :title="`${key}`" :class="{colapsed: colapsed}" :key="key" :loaded="true"></Jedi>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Jedi',
  data () {
    return {
      colapsed: false,
      inputActive: false,
      i18n: {
        strLoading: 'loading...',
        strBoolean: 'boolean',
        strString: 'string',
        strNumber: 'number',
        strObject: 'object',
        strArray: 'array',
        strNull: 'null',
        strFalse: 'false',
        strTrue: 'true'
      }
    }
  },
  props: {
    content: {
      type: [Object, Array, String, Number, Boolean],
      default: () => {
        return {}
      }
    },
    title: String,
    loaded: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    nextData () {
      if (this.content instanceof Object || this.content instanceof Array) {
        return this.content
      }
      return null
    }
  },
  watch: {
    content () {
      this.loaded = true
    }
  },
  methods: {
    toggleInput () {
      this.toggling = this.inputActive
      this.inputActive = !this.inputActive
    },
    blurInput () {
      if(this.toggling) {
        this.toggling = false
        return
      }
      this.inputActive = !this.inputActive
    },
    toggleCollapse () {
      this.colapsed = !this.colapsed
    },
    isBranch (value) {
      return value instanceof Object || value instanceof Array
    },
    isObject (value) {
      return value instanceof Object
    },
    isArray (value) {
      return value instanceof Array
    },
    isString (value) {
      return typeof value === 'string'
    },
    getClass (value) {
      return typeof value
    },
    isNull (value) {
      return value === null
    },
    isBoolean (value) {
      return typeof value === 'boolean'
    },
    isPrimitive (value) {
      return !this.isObject(value) && !this.isArray(value)
    },
    remove (key) {
      if (this.isArray(this.content)) {
        this.content.splice(key, 1)
      } else {
        Vue.delete(this.content, key)
      }
    },
    clear (key) {
      this.content[key] = null
    },
    add () {
      this.content.push('new')
    },
    setType (type, key) {
      switch (type) {
        case 'string':
          this.content[key] = ''
          break
        case 'number':
          this.content[key] = 0
          break
        case 'object':
          this.content[key] = {}
          break
        case 'array':
          this.content[key] = []
          break
        case 'boolean':
          this.content[key] = false
          break
      }
    }
  }
}
</script>
