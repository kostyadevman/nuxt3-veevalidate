<template>
  <div id="app">
    <p>{{ propertyComputed }}</p>
    <button @click="toggleMouse">Toggle Mouse component</button>
    <mouse v-if="isMouseVisible"></mouse>
  </div>
</template>

<script>
import Mouse from '@/components/mouse.vue';

export default {
  components: { Mouse },
  data() {
    return {
        isMouseVisible: true,
        property: 'Blank'
    }
  },

  computed: {
    propertyComputed() {
      console.log('I change when this.property changes.')
      return this.property
    }
  },

  beforeCreate() {
    console.log('Nothing gets called before me!')
  },

  created() {
    this.property = 'Example property update.'
    console.log('propertyComputed will update, as this.property is now reactive.')
  },

  beforeMount() {
    console.log(`Reactiv property is:`, this.property)
  },

  methods: {
      toggleMouse () {
        this.isMouseVisible = !this.isMouseVisible
      }
  }
}
</script>

<style lang="scss" scoped>
#app {
  margin:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  margin: 50px;
  padding:50px;
  border: 1px solid #dddfe2;
  border-radius: 3px; 
  color: #4b4f56;
  background:#fff;
}

.container {
display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 100px;
  margin-top: 50px;
  border: 1px solid black;
}


</style>