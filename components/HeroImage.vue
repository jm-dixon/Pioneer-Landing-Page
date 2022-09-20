<template>
  <div class="HeroImage">
    <img
      :src="imageDesktop"
      class="HeroImage__image"
    >
    <div class="HeroImage__logo-container">
      <img :src="logoUrlSvg">
      <p class="HeroImage__logo-text">
        COMING SOON
      </p>
    </div>
  </div>
</template>

<script>
import heroImageMobile from '~/assets/images/Pioneer/hero-image-mobile.jpg';
import heroImageDesktop from '~/assets/images/Pioneer/hero-image-desktop.png'
import logoUrl from '~/assets/images/pioneer-logo-01.svg';

export default {
  name: 'HeroImage',

  data() {
    return {
      imageMobile: heroImageMobile,
      imageDesktop: heroImageDesktop,
      logoUrlSvg: logoUrl
    };
  },
  computed: {

  }
}
</script>

<style lang="postcss">
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.HeroImage {
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.HeroImage__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 750px;
}

.HeroImage__logo-container {
  background-color: var(--color-primary);
  position: absolute;
  padding: 35px;
  width: 40%;
  height: auto;
  top: min(200px, 20vw);
  opacity: 0.9;
}

.HeroImage__logo-container img {
  height: 100%;
}

.HeroImage__logo-text {
  color: var(--color-secondary);
  text-align: center;
  font-size: 20px;
  padding: 1.2em 1em 0.5em 1em;
}
</style>
