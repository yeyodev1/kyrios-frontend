import type { AxiosResponse } from "axios";

import APIBase from '../Base';

class APITest extends APIBase {
  async createTest(testData: any): Promise<AxiosResponse<any>> {
    return this.post ('isotest/create', testData);
  }

  async getLastTest(userId: string): Promise<AxiosResponse<any>>{
    return this.get(`isotest/lastTest/${userId}`);
  }

  async setUserTestAccessLevel(userId: string, testAccessLevel: string): Promise<AxiosResponse<any>> {
    return this.put('isotest/testAccessLevel', { id: userId, testAccessLevel });
  }

  async getUserTestAccessLevel(userId: string): Promise<AxiosResponse<any>> {
    return this.get(`isotest/testAccessLevel/${userId}`)
  }
}

export default APITest;