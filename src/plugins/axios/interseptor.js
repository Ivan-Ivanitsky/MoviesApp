function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_KEY_MOVE,
    plot: "full",
  });
  return config;
}

function getData(res) {
  return res.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(getData);
}
