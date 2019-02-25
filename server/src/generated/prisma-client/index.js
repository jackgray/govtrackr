"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Bill",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "Politician",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/jack-gray/server2/dev`
});
exports.prisma = new exports.Prisma();
