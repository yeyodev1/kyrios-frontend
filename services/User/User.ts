import type { AxiosResponse } from 'axios';

import APIBase from '../Base';
import type { User } from '@/typings/UserTypes';


class APIUsers extends APIBase {
  async login(email: string, password: string): Promise<AxiosResponse<User>> {
    return this.post('auth/login', { email: email, password: password })
  }

  async register(name: string, lastname: string, email: string, password: string, birthdate: string): Promise<AxiosResponse> {
    return this.post("auth/register", {
      name,
      lastname,
      email,
      password,
      birthdate,
    });
  }

  async getSession(): Promise<AxiosResponse<User>> {
    return this.get('users/profile')
  }

  async setUserTestAccessLevel(userId: string, testAccessLevel: string): Promise<AxiosResponse<any>> {
    return this.put('isotest/testAccessLevel', { id: userId, testAccessLevel });
  }

  async getUserTestAccessLevel(userId: string): Promise<AxiosResponse<any>> {
    return this.get(`isotest/testAccessLevel/${userId}`)
  }

  async getLastTest(userId: string): Promise<AxiosResponse<any>>{
    return this.get(`isotest/lastTest/${userId}`);
  }
  
}


export default APIUsers;