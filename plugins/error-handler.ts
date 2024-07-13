export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // clearError({ redirect: '/about' });
    // handle error, e.g. report to a service
  };

  // Also possible
});
