<template>
  <KHeaderBar></KHeaderBar>
  <KSideBar></KSideBar>
  <router-view></router-view>
</template>

<script>
import KHeaderBar from "./components/KHeaderBar.vue";
import KSideBar from "./components/KSideBar.vue";

export default {
  components: { KHeaderBar, KSideBar },
};
</script>
<style lang="scss" scoped></style>
