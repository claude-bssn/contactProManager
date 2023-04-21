const mongoose = require("mongoose");
const request = require("supertest");
const express = require("express");
const router = express.Router();
// const app = require("../app");

const contactApiController = require("../controllers/api/contactApiController");
const app = express();
const Contact = require("../models/contact");


// app.use(router);

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/", () => {
  router.route('/api').get(contactApiController.getContact);
  it("should return all contact", async () => {
    const res = await request(app.use(router)).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/:id", () => {
  router.route('/api/:id').get(contactApiController.getContactById);
  it("should return all contact", async () => {
    const res = await request(app.use(router)).get('/api/6331abc9e9ececcc2d449e44');
    expect(res.statusCode).toBe(200);
  });
});

describe("DELETE /api/delete/:id", () => {
  router.route('/api/delete/:id').delete(contactApiController.deleteContact);
  it("should delete a contact", async () => {
    const res = await request(app.use(router)).delete(
      "/api/delete/6331abc9e9ececcc2d449e44"
    );
    expect(res.statusCode).toBe(200);
  });
});