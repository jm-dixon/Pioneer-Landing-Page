<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="TheFooter">
    <div class="TheFooter__company-logos">
      <a href="/" target="_blank">
        <LogoThePioneer class="TheFooter__logo text-color-white"/>
        <!-- <img :src="thePioneerLogo" class="TheFooter__the-pioneer-logo-img"> -->
      </a>
      <a href="https://www.foundersplacenewcastle.co.uk" target="_blank">
        <LogoFoundersPlace class="TheFooter__logo text-color-secondary"/>
        <!-- <img :src="foundersPlaceLogo"> -->
      </a>
    </div>
    <div class="TheFooter__social-links">
      <a
        v-for="icon in socialLinks"
        :key="icon.name"
        :href="icon.url"
      >
        <component
          :is="`Icon${icon.name}`"
          class="TheFooter__social-icon"
        />
      </a>
      <!-- <IconFacebook class="TheFooter__social-icon" />
      <IconTwitter class="TheFooter__social-icon" />
      <IconYoutube class="TheFooter__social-icon" />
      <IconInstagram class="TheFooter__social-icon" />
      <a
        v-for="(obj, key) in socialIcons"
        :key="key" :src="obj.url"
        :href="obj.externalUrl"
        target="_blank"
      >
        <img :src="obj.icon" class="TheFooter__social-icon-img">
      </a> -->
    </div>

    <div class="TheFooter__links-wrapper">
      <span class="TheFooter__links-item">
        &copy;The Pioneer
      </span>
      <NuxtLink
        v-for="item in navLinks" :key="item.name"
        :to="item.url"
        class="TheFooter__links-item"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',

  computed: {
    socialLinks() {
      return [
        { name: 'Instagram', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Youtube', url: '#' },
        { name: 'Facebook', url: '#' },
      ];
    },

    navLinks() {
      return [
        { name: 'Terms & Conditions', url: '#'},
      ];
    },
  }
}
</script>

<style lang="postcss" scoped>
@import '~/assets/css/settings/media-queries.css';
@import '~/assets/css/mixins/utils.css';

.TheFooter {
  width: 100%;
  background-color: var(--color-black);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: var(--spacing-xl);
  padding:
    var(--spacing-xl)
    var(--spacing-sm)
    var(--spacing-lg)
    var(--spacing-sm);

  @media (--laptop) {
    flex-direction: row;
    height: 22.5rem;
    padding: 0 11.5rem 0 8.5rem;
  }

  @media (--tablet) {
  }
}

.TheFooter__company-logos {
  display: flex;
  flex-direction: column;
  row-gap: var(--spacing-lg);
  align-items: center;
  width: 100%;

  @media (--laptop) {
    flex-direction: row;
    flex-grow: 1;
    column-gap: var(--spacing-xl);
    height: 100%;
  }
}

/* @mixin fluid-value height, 5.5, 6, 320, 768; */

.TheFooter__logo {
  height: 4.5rem;

  @media (--desktop-lg) {
    height: 5.5rem;
  }
}

.TheFooter__social-links {
  display: flex;
  column-gap: var(--spacing-sm);
  order: -1;
  color: var(--color-secondary);

  @media (--laptop) {
    order: initial;
  }
}

.TheFooter__social-icons-wrapper {
  order: -1;
  margin-top: var(--spacing-xl);

  @media (--laptop) {
    order: initial;
    text-align: center;
    margin-top: 0;
  }
}

.TheFooter__social-icons-wrapper a {
  display: inline-block;
  width: max-content;
}

.TheFooter__social-icon-img {
  margin: 0 var(--spacing-sm);
  width: 4.5rem;

  @media (--laptop) {
    width: 5rem;
  }

  @media (--desktop-lg) {
    margin: 0 var(--spacing-xs);
  }

  @media (--desktop-lg) {
    width: 5rem;
  }
}

.TheFooter__links-wrapper {
  display: flex;
  justify-content: center;
  column-gap: var(--spacing-md);
  width: 100%;

  @media (--phone-lg-min) {
    column-gap: var(--spacing-lg);
  }

  @media (--laptop) {
    position: absolute;
    right: 11.5rem;
    bottom: 5rem;
    width: max-content;
    margin-bottom: 0;
  }

  @media (--desktop-lg) {
    column-gap: var(--spacing-xl);
  }
}

.TheFooter__links-item {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;

  @media (--phone-sm) {
    font-size: 1.1rem;
  }
}

.TheFooter__social-icon {
  width: 5rem;
  height: auto;
}

</style>
