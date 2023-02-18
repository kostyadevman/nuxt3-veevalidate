<template>
    <li class="comment">
        <div class="comment__wrapper">
          <p class="comment__name">{{comment.name}}</p>
          <a class="comment__email" href="mailto: {{comment.email}}">{{comment.email}}</a>
        </div>
        <p class="comment__body">{{comment.body}}</p>
        <button class="comment__delete" v-on:click="$emit('remove-comment', comment.id)">Удалить</button>
    </li>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss" scoped>
.comment {
  position : relative;
  margin-bottom: 40px;
  padding-bottom: 25px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__name,
  &__email {
    margin: 0;
    font-weight: 600;
    white-space: nowrap;
    font-size: 14px;
    line-height: 1.358;
    color: #365899;
  }

  &__name {
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__email {
    text-decoration: none;
    cursor: pointer;
  }

  &__body {
    margin: 4px 0;
    height: 50px;
    overflow: hidden;
    text-align: justify;
    text-overflow: ellipsis;
  }

  &__delete {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-left: 8px;
    background-color: #4267b2;
    border: 1px solid #4267b2;
    color: #fff;
    text-decoration: none;
    line-height: 22px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
