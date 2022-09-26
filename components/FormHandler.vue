<template>
  <form
    ref="form"
    class="FormHandler"
    @submit.prevent="handleSubmit"
  >
    <slot :form-data="formData" />
  </form>
</template>

<script>
export default {
  name: 'FormHandler',

  props: {
    default: {
      type: Object,
      default: null,
    },

    fields: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    formData: {},
  }),

  created() {
    if (!this.default) return;

    this.formData = { ...this.formData, ...this.default };
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', this.formData, this.reset);
    },

    reset() {
      this.$refs.form.reset();

      Object.keys(this.formData)
        .forEach((key) => this.$delete(this.formData, key));
    },
  },
};
</script>

<style lang="postcss" scoped>
/* Styles */
</style>
