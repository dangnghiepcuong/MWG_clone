import axios from '~/libs/axios'

export const getWelcome = () => axios.get(`/`);
