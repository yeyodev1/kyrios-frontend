import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';


import APIUsers from '@/services/User/User';
import type { User } from '@/typings/UserTypes';

const router = useRouter(); 

const userService = new APIUsers(); 

interface Roostate {
  user: User | null,
  errorMessage: string | null,
  isLoading: boolean,
  passwordSent: boolean | null,
}

export const useUserStore = defineStore('UserStore', {
  state: (): Roostate => ({
    user: null,
    errorMessage: null,
    isLoading: false,
    passwordSent: null
  }),

  actions: {
    async login(email: string, password: string): Promise<void> {
      this.isLoading = true
      try {
        const response = await userService.login(email, password)
        this.user = response.data
    
        localStorage.setItem('access_token', this.user?.token!)
        // No realizar redirección aquí
      } catch (error: any) {
        if (error.status === 401) {
          this.errorMessage = 'Usuario o contraseña no válidos'
        }
      } finally {
        this.isLoading = false
      }
    },

    async register(name: string, lastname: string, email: string, password: string, birthdate: string): Promise<void> {
      this.isLoading = true;
      try {
        await userService.register(name, lastname, email, password, birthdate);
      } catch (error: any) {
        this.errorMessage = 'Ups, hay un problema con el correo, inténtalo más tarde :D';
        throw error;  
      } finally {
        this.isLoading = false;
      }
    },

    async getSession(): Promise<any> {
      this.isLoading = false;
      try {
        const response = await userService.getSession();
        this.user = response.data;
        return response.data;
      } catch (error: any) {
        console.error(error)
      } finally {
        this.isLoading = false;
      }
    },
    
    async logout(): Promise<void> {
      this.isLoading = true;
      try {
        localStorage.removeItem('access_token');
        this.user = null;
        await router.push('/');
      } catch (error: any) {
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async setUserTestAccessLevel(testAccessLevel: string): Promise<void> {
      this.isLoading = true;
      try {
        const response = await userService.setUserTestAccessLevel(this.user?._id!, testAccessLevel);
        if (this.user) {
          this.user.testAccessLevel = response.data.testAccessLevel;
        }
      } catch (error: any) {
        this.isLoading = false;
      }
    },
    
    async getUserTestAccessLevel(userId: string): Promise<any> {
      this.isLoading = true;
      try {
        console.log('id del usuario', userId)
        const response = await userService.getUserTestAccessLevel(userId);
        console.log('response', response)
        return response
      } catch (error: any) {
        this.errorMessage = error.message;
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async getLastTest(userId: string): Promise<any> {
      try {
        const response = await userService.getLastTest(userId);
        console.log('response of test', response)
        return response
      } catch (error) {
        console.error('error obteniendo el ultimo test')
      }
    }
  },
});
export default useUserStore;