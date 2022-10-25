<template>
  <div>
    <h1>Heading (XL)</h1>
    <h4>Heading (S)</h4>
    <KButton width="255" height="40">Button Primary (S)</KButton>
    <KButton width="255" height="40" variant="secondary"
      >Button Secondary(S)</KButton
    >
    <KButton width="255" height="40" variant="destructive"
      >Button Destructive (S)</KButton
    >
    <KButton width="255" height="48" isBig>Button Primary (L)</KButton>
    <KButton width="255" height="40" variant="secondary" isBig
      >Button Secondary(S)</KButton
    >
    <KButton width="255" height="40" variant="destructive" isBig
      >Button Destructive (S)</KButton
    >
    <KButton width="255" height="40" isDark>Button Primary (S)</KButton>
    <KButton width="255" height="40" variant="secondary" isDark
      >Button Secondary(S)</KButton
    >
    <KButton width="255" height="40" variant="destructive" isDark
      >Button Destructive (S)</KButton
    >
    <KButton width="255" height="48" isBig isDark>Button Primary (L)</KButton>
    <KButton width="255" height="40" variant="secondary" isBig isDark
      >Button Secondary(S)</KButton
    >
    <KButton width="255" height="40" variant="destructive" isBig isDark
      >Button Destructive (S)</KButton
    >
    <KCheckbox>Idle</KCheckbox>
    <KCheckbox>Idle</KCheckbox>
    <KCheckbox>Idle</KCheckbox>
    <KTextField placeholder="Enter task name"></KTextField>
    <KTextField placeholder="Enter task name"></KTextField>
    <KTextField
      placeholder="Enter task name"
      errorMessage="Can't be empty"
    ></KTextField>
    <KTextField
      placeholder="Enter task name"
      errorMessage="loooooooooooooooong text"
    ></KTextField>
    <KDropdown :items="['Todo', 'Doing', 'Done']"></KDropdown>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped></style>
