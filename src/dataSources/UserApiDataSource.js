import { RESTDataSource } from '@apollo/datasource-rest';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  getUsers = async () => {
    const response = await this.get(`/users`);
    console.log('response', response);

    return response;
  };

  getUserById = async (id) => {
    return {
      id: 'id',
      name: 'shridhar',
      email: 'shr@fa',
    };
  };
}
