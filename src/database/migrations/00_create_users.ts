import Knex from "knex";

const name = 'users';

export async function up(knex: Knex) {
    return knex.schema.createTable(name, table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(name);
}