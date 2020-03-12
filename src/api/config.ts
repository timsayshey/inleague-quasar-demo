import axios from 'axios';
import { Notify } from 'quasar';

export const api = (() => {
  const instance = axios.create({
    baseURL: 'https://qa.api.inleague.io/v1'
    //baseURL: 'http://localhost:3124/v1'
  });

  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      let message = error.message;
      if (error.response.data.messages !== undefined) {
        message = error.response.data.messages;
      }
      Notify.create({
        message,
        color: 'negative',
        actions: [
          {
            label: 'Dismiss',
            color: 'white'
          }
        ]
      });
    }
  );

  return instance;
})();
