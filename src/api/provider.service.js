'use strict';

const axios = require('axios').default;

const providerService = {
  async getUsers(providerURL, page = 1) {
    const {
      data: { data, page: currectPage, total_pages },
    } = await axios.get(`${providerURL}/users`, { params: { page } });

    const users = [];
    users.push(data);

    if (currectPage === total_pages) {
      return users;
    }

    users.push(...(await this.getUsers(providerURL, page + 1)));
    return users.flat();
  },
};

module.exports = providerService;
