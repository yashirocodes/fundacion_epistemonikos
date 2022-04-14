<template>
  <div class="home">
    {{inditators}}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState(["inditators"]),
  },
}
</script>
