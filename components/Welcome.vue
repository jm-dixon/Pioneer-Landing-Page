<template>
  <div class="Welcome">
    <h1 class="Welcome__heading">An iconic<br />gateway building</h1>
    <p class="Welcome__text text-default">
      The Pioneer represents an attitude, a state of mind and a willingness
      to deliver positive change. That's why this is a workspace like no other.
      It is exemplar of architectural creativity, sustainable design and an
      interior specification focused on enabling high performance from happy
      and relaxed people.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style lang="postcss" scoped>
@import '~/assets/css/settings/media-queries.css';
@import '~/assets/css/mixins/utils.css';

.Welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--spacing-md);
  text-align: center;

  @media (--laptop) {
    align-items: flex-start;
    row-gap: var(--spacing-lg);
    text-align: initial;
  }
}

.Welcome__text {
  line-height: 1.3;
  max-width: 50rem;
}

</style>
