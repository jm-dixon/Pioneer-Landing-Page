<template>
  <div class="Signup">
    <h1 class="Signup__heading">Sign up<br>for updates</h1>
    <div class="Signup__name-wrapper">
      <input v-model="firstName" type="text" placeholder="First name">
      <input v-model="lastName" type="text" placeholder="Surname">
    </div>
    <input v-model="email" type="text" placeholder="Email address">
    <div class="Signup__terms-wrapper">
      <input id="terms-conditions" v-model="acceptedTermsConditions" type="checkbox">
      <label for="terms-conditions" class="Signup__terms-label">
        I agree for The Pattern Shop to use the submitted information
        for marketing and direct communications.
      </label>
    </div>
    <button type="submit" class="Signup__submit-button">Submit</button>
  </div> 
</template>

<script>
export default {
  name: 'Signup',

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

<style lang="postcss">
@import "~/assets/css/settings/media-queries.css";
@import "~/assets/css/mixins/utils.css";

.Signup {
  @mixin interpolate padding-top, 5, 10;
  @mixin interpolate padding-bottom, 5, 10;

  width: 100%;
  padding-left: 15%;
  padding-right: 15%;

  @media (--phone-md) {
    padding-left: 8%;
    padding-right: 8%;
  }
}

.Signup__heading {
  margin-bottom: var(--spacing-xl);
}

.Signup__name-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (--tablet) {
    flex-direction: row;
  }
}

.Signup__terms-wrapper {
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

input[type=text] {
  @mixin interpolate height, 4, 5.5;

  width: 100%;
  font-size: 2.4rem;
  padding: 14px 15px;
  border: 1px solid var(--color-light-grey);
}

input[type=text]::placeholder {
  @mixin interpolate font-size, 1.4, 1.8;

  font-family: var(--font-default);
}

input[type=checkbox] {
  width: 3.5rem;
  height: 3.5rem;
  /* stylelint-disable */
  aspect-ratio: 1;
  /* stylelint-enable */
  border: 1px solid var(--color-lighter-orange);
  cursor: pointer;
  padding: 10px;
  color: var(--color-grey);
  font-size: 3rem;
}

input[type=checkbox]:checked::after {
  content: '\00d7';
  position: relative;
  top: -13px;
  left: -2px;
}

.Signup__terms-label {
  @mixin interpolate font-size, 1.1, 1.3;

  line-height: 1.3;
  margin-left: 2rem;
  cursor: pointer;
}

.Signup__submit-button {
  @mixin interpolate font-size, 2, 2.6;
  @mixin interpolate padding-left, 5, 10;
  @mixin interpolate padding-right, 5, 10;
  @mixin interpolate padding-top, 1.2, 2;
  @mixin interpolate padding-bottom, 1.2, 2;

  margin-top: var(--spacing-lg);
  background-color: black;
  color: var(--color-primary);
}

</style>