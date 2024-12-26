import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      password: '',
    };
  },
  actions: {

    updateUsername(username: string) {
      this.username = username;
    },
    updatePassword(password: string) {
      this.password = password;
    },
  },
});
