<template>
  <div class="Welcome">
    <h1 class="Welcome__heading">Welcome to<br>The Pattern Shop</h1>
    <p class="Welcome__text text-default">
      Reinvented for today's innovators, located in the heart of the vibrant city of Newcastle adjacent
      to Central Station, this extraordinary building with its remarkable 200-year history, is the ideal
      base for businesses looking to make their mark.
    </p>
    <p class="Welcome__text text-default">
      Offering flexible office spaces between 1,108 sqft and 32,367 sqft, across 4 floors, The Pattern
      Shop brings you industry leading digital connectivityity and best in class sustainability technology
      within spaces that exude soulful character. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style lang="postcss">
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.Welcome {
  @mixin interpolate padding-top, 5, 10;
  @mixin interpolate padding-bottom, 5, 10;

  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  background-color: var(--color-primary);

  @media (--phone-md) {
    padding-left: 8%;
    padding-right: 8%;
  }
}

.Welcome__heading {
  @mixin interpolate margin-bottom, 3, 5;

  padding-left: 8px;
}

.Welcome__text {
  line-height: 1.3;
}

.Welcome__text:not(:first-of-type) {
  margin-top: 2rem;
}

</style>