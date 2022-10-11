<template>
  <div>
    <h1>Heading (XL)</h1>
    <h4>Heading (S)</h4>
    <KButton>Button Primary (S)</KButton>
    <KButton variant="secondary">Button Secondary(S)</KButton>
    <KButton variant="destructive">Button Destructive (S)</KButton>
    <KButton isBig>Button Primary (L)</KButton>
    <KButton variant="secondary" isBig>Button Secondary(S)</KButton>
    <KButton variant="destructive" isBig>Button Destructive (S)</KButton>
  </div>
</template>

<script>
import KButton from "./components/KButton.vue";

export default {
  components: {
    KButton,
  },
};
</script>
<style lang="scss" scoped></style>
