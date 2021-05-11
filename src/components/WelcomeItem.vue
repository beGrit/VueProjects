<template>
<div>
  <transition appear>
    <h1>{{ value }}
    </h1>
  </transition>
</div>
</template>

<script>
export default {
  name: "WelcomeItem",
  props: {
    value
  }
}
</script>

<style scoped>

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>
