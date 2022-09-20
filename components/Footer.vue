<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="Footer">
    <div class="Footer__company-logos">
      <nuxt-link to="/" class="Footer__pattern-shop-logo-wrapper">
        <img :src="patternShopLogo" class="Footer__pattern-shop-logo-img">
      </nuxt-link>
      <a href="/" target="_blank">
        <img :src="foundersPlaceLogo" class="Footer__founders-place-logo-img">
      </a>
      <a href="/" target="_blank">
        <img :src="thePioneerLogo" class="Footer__the-pioneer-logo-img">
      </a>
    </div>
    <div class="Footer__social-icons-wrapper">
      <a
        v-for="(obj, key) in socialIcons"
        :key="key" :src="obj.url"
        :href="obj.externalUrl"
        target="_blank"
      >
        <img :src="obj.icon" class="Footer__social-icon-img">
      </a>
    </div>

    <div v-if="footerLinks" class="Footer__links-wrapper">
      <a
        v-for="link in footerLinks" :key="link.text"
        :href="link.url"
        class="Footer__links-item"
        v-html="link.text"
      />
    </div>
  </div>
</template>

<script>
import PatternShopHorizLogoUrl from '@/assets/images/pattern-shop-logo-02-01.svg';
import FoundersPlaceLogoUrl from '@/assets/images/founders-place-logo-01.svg';
import ThePioneerLogoUrl from '@/assets/images/pioneer-logo-01.svg';
import InstagramIcon from '@/assets/images/insta-svg-y.svg';
import TwitterIcon from '@/assets/images/twitter-svg-y.svg';
import YoutubeIcon from '@/assets/images/youtube-svg-y.svg';
import FacebookIcon from '@/assets/images/facebook-svg-y.svg';

export default {
  name: 'Footer',

  data() {
    return {
      patternShopLogo: PatternShopHorizLogoUrl,
      foundersPlaceLogo: FoundersPlaceLogoUrl,
      thePioneerLogo: ThePioneerLogoUrl,
      socialIcons: {
        instagram: {
          icon: InstagramIcon,
          externalUrl: 'https://www.instagram.com/',
        },
        twitter: {
          icon: TwitterIcon,
          externalUrl: 'https://www.twitter.com/',
        },
        youtube: {
          icon: YoutubeIcon,
          externalUrl: 'https://www.youtube.com/',
        },
        facebook: {
          icon: FacebookIcon,
          externalUrl: 'https://www.facebook.com/',
        },
      },
      footerLinks: [
        { 
          text: '&copy;The Pattern Shop', 
          url: ''
        },
        { 
          text: 'Site Map', 
          url: '/'
        },
        { 
          text: 'Terms & Conditions', 
          url: '/'
        },
      ],
    };
  },
}
</script>

<style lang="postcss">
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.Footer {
  width: 100%;
  background-color: var(--color-black);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (--desktop-lg) {
    flex-direction: row;
  }
}

.Footer__company-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: var(--spacing-2xl);

  @media (--desktop-lg) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-grow: 1;
    width: 100rem;
    height: 100%;
    margin-bottom: 0;
  }
}

.Footer__company-logos img {
  margin-top: var(--spacing-lg);

  @media (--desktop-lg) {
    margin-top: 0;
    margin-left: var(--spacing-lg);
  }
}

.Footer__pattern-shop-logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (--desktop-lg) {
    display: inline-block;
    width: max-content;
  }
}

.Footer__pattern-shop-logo-img {
  @mixin fluid-value height, 7.5, 8.5, 320, 768;
}

.Footer__founders-place-logo-img {
  @mixin fluid-value height, 5.5, 6, 320, 768;
}

.Footer__the-pioneer-logo-img {
  @mixin fluid-value height, 5.5, 6, 320, 768;
}

.Footer__social-icons-wrapper {
  order: -1;
  margin-top: var(--spacing-xl);

  @media (--desktop-lg) {
    width: 23vw;
    text-align: center;
    order: initial;
    margin-top: 0;
  }
}

.Footer__social-icons-wrapper a {
  display: inline-block;
  width: max-content;
}

.Footer__social-icon-img {
  margin: 0 var(--spacing-sm);
  width: 5rem;

  @media (--desktop-lg) {
    margin: 0 var(--spacing-xs);
  }

  @media (--desktop-lg) {
    width: 5rem;
  }
}

.Footer__links-wrapper {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: var(--spacing-xl);

  @media (--desktop-lg) {
    display: block;
    position: absolute;
    right: 5.5%;
    bottom: 5rem;
    width: max-content;
    margin-bottom: 0;
  }
}

.Footer__links-item {
  font-size: 1.2rem;
  color: white;

  @media (--phone-sm) {
    font-size: 1.1rem;
  }

  @media (--desktop-lg) {
    margin-left: 7rem;
  }
}

</style>