<template>
  <div class="Home">
    <HeroLogo />
    <HeroImage />
    <Welcome />
    <Signup />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      mediaQueryList: null,
    };
  },

  mounted() {
    const mediaQuery = '(min-width: 1440px)';
    this.mediaQueryList = window.matchMedia(mediaQuery);

    this.mediaQueryList.addEventListener('change', this.handleChange);
    this.$store.commit('setisDesktopLg', this.mediaQueryList.matches);
  },

  beforeDestroy() {
    this.mediaQueryList.removeEventListener('change', this.handleChange);
  },

  methods: {
    handleChange(event) {
      this.$store.commit('setisDesktopLg', event.matches);
    },
  }
}
</script>

<style lang="postcss">
@import "~/assets/css/main.css";
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.Home {
  width: 100%;
  height: 100vh;

  @media (--desktop-lg) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80rem auto 30rem;
  }
}

.HeroLogo {
  @mixin interpolate height, 45, 65;

  width: 100%;

  @media (--desktop-lg) {
    height: 80rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}

.HeroImage {
  @mixin interpolate height, 45, 65;

  @media (--desktop-lg) {
    height: 80rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
}

.Welcome {
  height: max-content;

  @media (--desktop-lg) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}

.Signup {
  height: max-content;

  @media (--desktop-lg) {
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}

.Footer {
  height: max-content;

  @media (--desktop-lg) {
    height: 100%;
    grid-column: 1 / span 2;
    grid-row: 3 / 4;
  }
}

</style>
