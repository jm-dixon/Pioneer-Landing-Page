<template>
  <div class="HeroLogo">
    <div class="HeroLogo__logo-wrapper">
      <img :src="logoUrl" class="HeroLogo__logo-img">
      <h3 class="HeroLogo__coming-soon">Coming Soon</h3>
    </div>
    <img :src="textureImgUrl" class="HeroLogo__texture-img">
  </div>
</template>

<script>
import PatternShopLogoUrl from '@/assets/images/pattern-shop-logo-01.svg';
import TextureUrl from '@/assets/images/texture.jpg';
import TextureHorizUrl from '@/assets/images/texture-horiz.jpg';

export default {
  name: 'HeroLogo',

  data() {
    return {
      logoUrl: PatternShopLogoUrl,
      textureUrl: TextureUrl,
      textureHorizUrl: TextureHorizUrl,
      textureImgUrl: TextureHorizUrl,
    };
  },

  computed: {
    isDesktopLg() {
      return this.$store.state.isDesktopLg;
    },
  },

  watch: {
    isDesktopLg: {
      handler(newVal) {
        this.textureImgUrl = newVal ? this.textureUrl : this.textureHorizUrl;
      },
      immediate: true,
    },
  },
}
</script>

<style lang="postcss">
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.HeroLogo {
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: white;

  @media (--desktop-lg) {
    flex-direction: row;
  }
}

.HeroLogo__logo-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
}

.HeroLogo__logo-img {
  @mixin interpolate padding-top, 3, 4;
  @mixin interpolate width, 10, 20;
}

.HeroLogo__texture-img {
  width: 100%;
  height: 8%;
  object-fit: cover;

  @media (--desktop-lg) {
    width: 7%;
    height: 100%;
  }
}

.HeroLogo__coming-soon {
  @mixin interpolate font-size, 2, 2.5;

  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--color-lighter-orange);

  @media (--desktop-lg) {
    font-size: 3.5rem;
    margin-top: 7rem;
    margin-bottom: 0;
  }
}
</style>