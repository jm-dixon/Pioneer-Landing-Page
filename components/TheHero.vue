<template>
  <div class="TheHero">
    <div class="TheHero__image">
      <img src="images/hero-image-desktop.jpg">
    </div>
    <div class="TheHero__logo-container">
      <LogoThePioneer class="TheHero__logo"/>
      <p class="TheHero__coming-soon">
        COMING SOON
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>

<style lang="postcss" scoped>
@import '~/assets/css/mixins/media.css';
@import '~/assets/css/settings/media-queries.css';
@import '~/assets/css/mixins/utils.css';

.TheHero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--spacing-md));
  width: 100vw;
  padding: var(--spacing-md);

  @media (--tablet) {
    height: calc(100vh - var(--spacing-lg));
  }
}

.TheHero__image {
  @mixin media;
  @mixin media-full;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.TheHero__inner {
  @mixin media;
  @mixin media-full;
}

.TheHero__logo-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--spacing-md);
  width: min(100%, 34.5rem);
  height: auto;
  padding: var(--spacing-lg) var(--spacing-xl);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    opacity: 0.95;
  }

  @media (--phone-lg-min) {
    width: max-content;
  }

  @media (--tablet) {
    row-gap: var(--spacing-md);
    padding: var(--spacing-xl);
  }

  @media (--laptop) {
    row-gap: var(--spacing-xl);
    padding: 8rem 10rem;
  }

  @media (--desktop-xl) {
    row-gap: 7rem;
    padding: var(--spacing-3xl) var(--spacing-4xl);
  }
}

.TheHero__logo {
  width: auto;
  height: 4.5rem;
  color: var(--color-white);

  @media (--tablet) {
    height: 7rem;
  }

  @media (--laptop) {
    height: 9rem;
  }

  @media (--desktop-xl) {
    height: 11.8rem;
  }
}

.TheHero__coming-soon {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-secondary);

  @media (--laptop) {
    font-size: 3rem;
  }

  @media (--desktop-xl) {
    font-size: 4rem;
  }
}

/* .TheHero__logo-text {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 1.2em 1em 0.5em 1em;
  color: var(--color-secondary);
} */
</style>
