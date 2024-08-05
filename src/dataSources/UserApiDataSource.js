import { RESTDataSource } from '@apollo/datasource-rest';

//https://jsonplaceholder.typicode.com/guide/

/**
 * Tasks;
 * 1. fetch posts associated with the user
 * 2. fetch todos associated with user
 */

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  getUsers = async () => {
    const response = await this.get(`/users`);
    return response;
  };

  getUserById = async (id) => {
    const response = await this.get(`/users/${id}`);
    return response;
  };
}
