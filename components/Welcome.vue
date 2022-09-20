<template>
  <div class="Welcome">
    <h1 class="Welcome__heading">An iconic<br />gateway building</h1>
    <p class="Welcome__text text-default">
      The Pioneer represents an attitude, a state of mind and a willingness
      to deliver positive change. That's why this is a workspace like no other.
      It is exemplar of architectural creativity, sustainable design and an
      interior specification focused on enabling high performance from happy
      and relaxed people
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
  background-color: var(--color-white);

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
