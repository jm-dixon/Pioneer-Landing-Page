<template>
  <div class="FormInput">
    <label
      :for="$attrs.id"
      class="FormInput__label"
    >
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :type="$attrs.type || 'text'"
      :autocomplete="$attrs.autocomplete || 'off'"
      :value="value"
      :aria-label="label"
      class="FormInput__input"
      @input="updateValue"
    >
  </div>
</template>

<script>
import FormMixin from '~/mixins/FormMixin';

export default {
  name: 'FormInput',

  mixins: [FormMixin],

  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '~/assets/css/mixins/field';

.FormInput__label {
  font-weight: 600;

  @media (--laptop) {
    font-size: 1.8rem;

    &:hover {
      cursor: pointer;
    }
  }
}

.FormInput__input {
  @mixin field;

  width: 100%;

  &::placeholder {
    opacity: 0.75;
  }
}
</style>
