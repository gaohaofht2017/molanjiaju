<template>
  <div>
    <m-header></m-header>
    <m-nav></m-nav>
    <div class="banner_image">
      <img src="@/assets/images/banner.png">
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from '@/components/header/header.vue'
import mNav from '@/components/common/nav.vue'
import mFooter from '@/components/footer/footer.vue'
export default {
  name: "home",
  components: { mHeader, mNav, mFooter }
}
</script>

<style lang="scss" scoped>
  .banner_image{
    img{
      max-width: 100%;
    }
  }
</style>
