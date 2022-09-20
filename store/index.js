export const state = () => ({
  isDesktopLg: false,
});

export const mutations = {
  setisDesktopLg(state, payload) {
    state.isDesktopLg = payload;
  },
}