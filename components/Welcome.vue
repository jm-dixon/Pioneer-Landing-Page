<template>
  <div class="Welcome">
    <h1 class="Welcome__heading">Behind every pioneer lies a human story and it was from this very site
    in Newcastle that the inventive spirit of George and Robert Stephenson transformed the world</h1>
    <p class="Welcome__text text-default">
      Today, we're welcoming a new generation of innovators to a workplace that brings
      people, collaboration, and wellbeing together. Adjacent to Newcastle's Central Station with
      spaces that are light, healthy and effecient, with outdoor and rooftop terraces
      commanding views across the River Tyne. The Pioneer, is an exemplar of architectural
      creativity and human-centric, sustainable design, welcomes companies with vision and
      desire for quality.<br /><br />The landscape may have changed but the spirit of the place
      has not. To find out more sign up.
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
