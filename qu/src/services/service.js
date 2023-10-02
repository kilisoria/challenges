import axios from 'axios';
import settings from "../resources/settings";

const endpointURL = (endpoint, id = undefined) => {
  return `${settings.SERVICE.BASE_URL}/${endpoint}${id ? `/${id}` : ''}`;
};

export const get = async (endpoint, params = {}) => {
  const requestEndpoint = endpointURL(endpoint);
  return await axios.get(requestEndpoint, {
    params,
  });
};
