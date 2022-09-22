<template>
  <div class="Home">
    <!-- <TheHero /> -->
    <div class="Home__body container grid">
      <Welcome />
      <SignupForm />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="postcss">
@import '~/assets/css/settings/media-queries.css';

.Home__body {
  --grid-row-gap: var(--spacing-xl);

  padding-top: var(--spacing-md);
  padding-bottom: 7.5rem;

  /* align-self: center; */

  @media (--laptop) {
    --grid-columns: 2;
    --grid-column-gap: var(--spacing-lg);

    text-align: initial;
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-2xl);
  }
}
</style>
