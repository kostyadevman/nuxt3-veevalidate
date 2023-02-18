<template>
<div class="container" id="app">
    <loader v-if="loading"></loader>
    <ul
      v-else-if="comments.length"
      class="comments"
    >
        <comment 
          v-for="comment of comments" 
          :key="comment.id"
          v-bind:comment="comment"
          v-on:remove-comment="removeComment"
        ></comment>
    </ul>
    <p v-else>No comments</p>
  </div>
   
</template>

<script>
import Comment from '@/components/comment.vue';
import Loader from '@/components/loader.vue';

export default {
  name: 'comments',
  components: { Comment, Loader },
  data() {
      return {
        title: '',
        comments: [],
        loading: true
      }
    },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.comments = json;
          this.loading = false;
          
        }, 1000)
      })
  },
  methods: {
    removeComment(id) {
      this.comments = this.comments.filter(t => t.id !== id);
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin:20px;
  font-family: Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding:50px;
  border: 1px solid #dddfe2;
  border-radius: 3px; 
  color: #4b4f56;
  background:#fff;
}

.comments {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>