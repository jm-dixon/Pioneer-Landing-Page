<template>
  <div class="SignupForm">
    <h2 class="SignupForm__heading text-h1">
      Sign up for updates
    </h2>
    <FormHandler class="SignupForm__form">
      <div class="SignupForm__field-row">
        <FormInput
          id="signup-first-name"
          label="First name"
        />
        <FormInput
          id="signup-surname"
          label="Surname"
        />
      </div>
      <FormInput
        id="signup-email"
        label="Email address"
      />
      <div class="SignupForm__terms">
        <input
          id="signup-terms-conditions"
          v-model="acceptedTermsConditions"
          type="checkbox"
          class="SignupForm__terms-checkbox"
        >
        <label
          for="signup-terms-conditions"
          class="SignupForm__terms-label"
        >
          I agree for The Pioneer to use the submitted information
          for marketing and direct communications.
        </label>
      </div>
      <button
        type="submit"
        class="SignupForm__submit-button"
      >
        Submit
      </button>
    </FormHandler>
  </div>
</template>

<script scoped>
export default {
  name: 'SignupForm',

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      acceptedTermsConditions: false,
    };
  },
}
</script>

<style lang="postcss" scoped>
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.SignupForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--spacing-lg);

  @media (--laptop) {
    align-items: flex-start;
    row-gap: var(--spacing-xl);
  }
}

.SignupForm__heading {
  text-align: center;

  @media (--laptop) {
    max-width: 42rem;
    text-align: initial;
  }
}

.SignupForm__form {
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
  max-width: 50rem;

  @media (--laptop) {
    max-width: unset;
  }
}

.SignupForm__field-row {
  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;

  @media (--laptop) {
    flex-direction: row;
    column-gap: var(--spacing-md-sm);

    & > * {
      flex: 1;
    }
  }
}

.SignupForm__submit-button {
  width: 27.5rem;
  height: 6rem;
  font-size: 2.4rem;
  margin: 0 auto;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);

  @media (--laptop) {
    margin: unset;
  }
}

.SignupForm__name-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (--tablet) {
    flex-direction: row;
  }
}

.SignupForm__terms {
  display: flex;
  align-items: center;
  column-gap: var(--spacing-md-sm);
}

.SignupForm__terms-checkbox {
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid var(--color-secondary);

  &:hover {
    cursor: pointer;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    background: var(--color-secondary);
    transform: translate(-50%, -50%);
  }
}

.SignupForm__terms-label {
  /* @mixin interpolate font-size, 1.1, 1.3; */

  flex: 1;
  line-height: 1.3;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
}
</style>
