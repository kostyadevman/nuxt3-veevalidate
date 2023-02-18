<template>
  <div class='container'>Mouse component</div>
</template>

<script>
export default {
  mounted() {
    console.log('Add event handler')
    window.addEventListener("mousemove", this.printMousePosition);
  },

  methods: {
    printMousePosition(e) {
      console.log(`Current position (x, y): (${e.pageX}, ${e.pageY})`);
    }
  },
  beforeUnmount() {
    console.log('Remove event handler')
    window.removeEventListener('mousemove', this.printMousePosition);
  },
  unmounted(e) {
    console.log('Component unmounted');
  },
}
</script>

<style lang="scss" scoped>
</style>