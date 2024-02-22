import axios from "axios";

const url = import.meta.env.VITE_API_URL;
const portUserService = import.meta.env.VITE_PORT_USER_SERVICE;
const portAuthService = import.meta.env.VITE_PORT_AUTH_SERVICE;
const portDonationService = import.meta.env.VITE_PORT_DONATION_SERVICE;
const portReceiveService = import.meta.env.VITE_PORT_RECEIVE_SERVICE;

export const apiUserService = axios.create({
  baseURL: `${url}:${portUserService}`,
});

export const apiAuthService = axios.create({
  baseURL: `${url}:${portAuthService}`,
});

export const apiDonationService = axios.create({
  baseURL: `${url}:${portDonationService}`,
});

export const apiReceiveService = axios.create({
  baseURL: `${url}:${portReceiveService}`,
});
