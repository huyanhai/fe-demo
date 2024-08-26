<template>
  <div class="message_box">
    <p>{{ message }}</p>
    <button @click="$emit('close')">关闭</button>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
});

defineEmits<{
  close: [];
}>();
</script>

<style lang="scss" scoped>
.message_box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
</style>
