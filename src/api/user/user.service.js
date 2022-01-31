'use strict';

const format = require('pg-format');

const { pg } = require('../../db');

const userService = {
  async getUsers({ first_name, last_name }) {
    const query = {
      text: 'SELECT * FROM users',
    };

    if (first_name || last_name) {
      query.values = [first_name, last_name];

      const operator = first_name && last_name ? 'AND' : 'OR';

      query.text = `${query.text} WHERE first_name = $1 ${operator} last_name = $2`;
    }

    const { rows } = await pg.query(query);
    return rows;
  },

  async saveUsers(data) {
    const users = data.map((el) =>
      Object.values({
        email: el.email,
        first_name: el.first_name,
        last_name: el.last_name,
        avatar: el.avatar,
      }),
    );

    const query = format(
      `
    INSERT INTO
      users (email, first_name, last_name, avatar)
    VALUES
      %L
    ON CONFLICT DO NOTHING
    `,
      users,
    );

    await pg.query(query);
  },
};

module.exports = userService;
