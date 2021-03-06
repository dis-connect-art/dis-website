module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    allRoutes: [
      "/",
      "/francesca_gotti",
      "/omer_ipekci",
      "/francesco_romero",
      "/connect",
      "/outro",
    ],
    breakpoints: {
      mobile: 480,
      tablet: 758,
    },
  },
};
