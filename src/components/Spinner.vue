<template>
  <div class="Spinner">
    <div class="Spinner-wheel"></div>
  </div>
</template>
<script>

export default {
  name: 'Spinner',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.Spinner {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  .Spinner-wheel {
    animation: spin 1s ease-in-out infinite;
    border: 3px solid fade-out($colorBorderStrong, 0.6);
    border-radius: 50%;
    border-top-color: $colorBorderStrong;
    display: block;
    height: 24px;
    width: 24px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
