export default defineAppConfig({
  ui: {
    primary: "waikawa-gray",
    colors: ["waikawa-gray"],
    color: {
      variant: {
        solid:
          "shadow-lg text-primary dark:text-green-900 bg-{color}-50 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
      },
    },
  },
});
