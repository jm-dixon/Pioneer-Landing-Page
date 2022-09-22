export default {
  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      required: true,
    },

    isError: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: '',
    },
  },

  created() {
    this.checkHasID();
  },

  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },

    checkHasID() {
      if (Object.hasOwnProperty.call(this.$attrs, 'id')) return;
      throw new Error(`Form elements must have an 'id' attribute.`);
    },
  },
};
