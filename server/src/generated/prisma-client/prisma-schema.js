module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBill {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregatePolitician {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bill {
  id: ID!
  code: String
  summary: String
  sponsor: Politician
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  yeas(where: PoliticianWhereInput, orderBy: PoliticianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Politician!]
  nays(where: PoliticianWhereInput, orderBy: PoliticianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Politician!]
}

type BillConnection {
  pageInfo: PageInfo!
  edges: [BillEdge]!
  aggregate: AggregateBill!
}

input BillCreateInput {
  code: String
  summary: String
  sponsor: PoliticianCreateOneWithoutBillsInput
  likes: LikeCreateManyWithoutBillInput
  comments: CommentCreateManyWithoutBillInput
  yeas: PoliticianCreateManyWithoutYeasInput
  nays: PoliticianCreateManyWithoutNaysInput
}

input BillCreateManyWithoutNaysInput {
  create: [BillCreateWithoutNaysInput!]
  connect: [BillWhereUniqueInput!]
}

input BillCreateManyWithoutSponsorInput {
  create: [BillCreateWithoutSponsorInput!]
  connect: [BillWhereUniqueInput!]
}

input BillCreateManyWithoutYeasInput {
  create: [BillCreateWithoutYeasInput!]
  connect: [BillWhereUniqueInput!]
}

input BillCreateOneWithoutCommentsInput {
  create: BillCreateWithoutCommentsInput
  connect: BillWhereUniqueInput
}

input BillCreateOneWithoutLikesInput {
  create: BillCreateWithoutLikesInput
  connect: BillWhereUniqueInput
}

input BillCreateWithoutCommentsInput {
  code: String
  summary: String
  sponsor: PoliticianCreateOneWithoutBillsInput
  likes: LikeCreateManyWithoutBillInput
  yeas: PoliticianCreateManyWithoutYeasInput
  nays: PoliticianCreateManyWithoutNaysInput
}

input BillCreateWithoutLikesInput {
  code: String
  summary: String
  sponsor: PoliticianCreateOneWithoutBillsInput
  comments: CommentCreateManyWithoutBillInput
  yeas: PoliticianCreateManyWithoutYeasInput
  nays: PoliticianCreateManyWithoutNaysInput
}

input BillCreateWithoutNaysInput {
  code: String
  summary: String
  sponsor: PoliticianCreateOneWithoutBillsInput
  likes: LikeCreateManyWithoutBillInput
  comments: CommentCreateManyWithoutBillInput
  yeas: PoliticianCreateManyWithoutYeasInput
}

input BillCreateWithoutSponsorInput {
  code: String
  summary: String
  likes: LikeCreateManyWithoutBillInput
  comments: CommentCreateManyWithoutBillInput
  yeas: PoliticianCreateManyWithoutYeasInput
  nays: PoliticianCreateManyWithoutNaysInput
}

input BillCreateWithoutYeasInput {
  code: String
  summary: String
  sponsor: PoliticianCreateOneWithoutBillsInput
  likes: LikeCreateManyWithoutBillInput
  comments: CommentCreateManyWithoutBillInput
  nays: PoliticianCreateManyWithoutNaysInput
}

type BillEdge {
  node: Bill!
  cursor: String!
}

enum BillOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  summary_ASC
  summary_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BillPreviousValues {
  id: ID!
  code: String
  summary: String
}

input BillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  AND: [BillScalarWhereInput!]
  OR: [BillScalarWhereInput!]
  NOT: [BillScalarWhereInput!]
}

type BillSubscriptionPayload {
  mutation: MutationType!
  node: Bill
  updatedFields: [String!]
  previousValues: BillPreviousValues
}

input BillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BillWhereInput
  AND: [BillSubscriptionWhereInput!]
  OR: [BillSubscriptionWhereInput!]
  NOT: [BillSubscriptionWhereInput!]
}

input BillUpdateInput {
  code: String
  summary: String
  sponsor: PoliticianUpdateOneWithoutBillsInput
  likes: LikeUpdateManyWithoutBillInput
  comments: CommentUpdateManyWithoutBillInput
  yeas: PoliticianUpdateManyWithoutYeasInput
  nays: PoliticianUpdateManyWithoutNaysInput
}

input BillUpdateManyDataInput {
  code: String
  summary: String
}

input BillUpdateManyMutationInput {
  code: String
  summary: String
}

input BillUpdateManyWithoutNaysInput {
  create: [BillCreateWithoutNaysInput!]
  delete: [BillWhereUniqueInput!]
  connect: [BillWhereUniqueInput!]
  disconnect: [BillWhereUniqueInput!]
  update: [BillUpdateWithWhereUniqueWithoutNaysInput!]
  upsert: [BillUpsertWithWhereUniqueWithoutNaysInput!]
  deleteMany: [BillScalarWhereInput!]
  updateMany: [BillUpdateManyWithWhereNestedInput!]
}

input BillUpdateManyWithoutSponsorInput {
  create: [BillCreateWithoutSponsorInput!]
  delete: [BillWhereUniqueInput!]
  connect: [BillWhereUniqueInput!]
  disconnect: [BillWhereUniqueInput!]
  update: [BillUpdateWithWhereUniqueWithoutSponsorInput!]
  upsert: [BillUpsertWithWhereUniqueWithoutSponsorInput!]
  deleteMany: [BillScalarWhereInput!]
  updateMany: [BillUpdateManyWithWhereNestedInput!]
}

input BillUpdateManyWithoutYeasInput {
  create: [BillCreateWithoutYeasInput!]
  delete: [BillWhereUniqueInput!]
  connect: [BillWhereUniqueInput!]
  disconnect: [BillWhereUniqueInput!]
  update: [BillUpdateWithWhereUniqueWithoutYeasInput!]
  upsert: [BillUpsertWithWhereUniqueWithoutYeasInput!]
  deleteMany: [BillScalarWhereInput!]
  updateMany: [BillUpdateManyWithWhereNestedInput!]
}

input BillUpdateManyWithWhereNestedInput {
  where: BillScalarWhereInput!
  data: BillUpdateManyDataInput!
}

input BillUpdateOneWithoutCommentsInput {
  create: BillCreateWithoutCommentsInput
  update: BillUpdateWithoutCommentsDataInput
  upsert: BillUpsertWithoutCommentsInput
  delete: Boolean
  disconnect: Boolean
  connect: BillWhereUniqueInput
}

input BillUpdateOneWithoutLikesInput {
  create: BillCreateWithoutLikesInput
  update: BillUpdateWithoutLikesDataInput
  upsert: BillUpsertWithoutLikesInput
  delete: Boolean
  disconnect: Boolean
  connect: BillWhereUniqueInput
}

input BillUpdateWithoutCommentsDataInput {
  code: String
  summary: String
  sponsor: PoliticianUpdateOneWithoutBillsInput
  likes: LikeUpdateManyWithoutBillInput
  yeas: PoliticianUpdateManyWithoutYeasInput
  nays: PoliticianUpdateManyWithoutNaysInput
}

input BillUpdateWithoutLikesDataInput {
  code: String
  summary: String
  sponsor: PoliticianUpdateOneWithoutBillsInput
  comments: CommentUpdateManyWithoutBillInput
  yeas: PoliticianUpdateManyWithoutYeasInput
  nays: PoliticianUpdateManyWithoutNaysInput
}

input BillUpdateWithoutNaysDataInput {
  code: String
  summary: String
  sponsor: PoliticianUpdateOneWithoutBillsInput
  likes: LikeUpdateManyWithoutBillInput
  comments: CommentUpdateManyWithoutBillInput
  yeas: PoliticianUpdateManyWithoutYeasInput
}

input BillUpdateWithoutSponsorDataInput {
  code: String
  summary: String
  likes: LikeUpdateManyWithoutBillInput
  comments: CommentUpdateManyWithoutBillInput
  yeas: PoliticianUpdateManyWithoutYeasInput
  nays: PoliticianUpdateManyWithoutNaysInput
}

input BillUpdateWithoutYeasDataInput {
  code: String
  summary: String
  sponsor: PoliticianUpdateOneWithoutBillsInput
  likes: LikeUpdateManyWithoutBillInput
  comments: CommentUpdateManyWithoutBillInput
  nays: PoliticianUpdateManyWithoutNaysInput
}

input BillUpdateWithWhereUniqueWithoutNaysInput {
  where: BillWhereUniqueInput!
  data: BillUpdateWithoutNaysDataInput!
}

input BillUpdateWithWhereUniqueWithoutSponsorInput {
  where: BillWhereUniqueInput!
  data: BillUpdateWithoutSponsorDataInput!
}

input BillUpdateWithWhereUniqueWithoutYeasInput {
  where: BillWhereUniqueInput!
  data: BillUpdateWithoutYeasDataInput!
}

input BillUpsertWithoutCommentsInput {
  update: BillUpdateWithoutCommentsDataInput!
  create: BillCreateWithoutCommentsInput!
}

input BillUpsertWithoutLikesInput {
  update: BillUpdateWithoutLikesDataInput!
  create: BillCreateWithoutLikesInput!
}

input BillUpsertWithWhereUniqueWithoutNaysInput {
  where: BillWhereUniqueInput!
  update: BillUpdateWithoutNaysDataInput!
  create: BillCreateWithoutNaysInput!
}

input BillUpsertWithWhereUniqueWithoutSponsorInput {
  where: BillWhereUniqueInput!
  update: BillUpdateWithoutSponsorDataInput!
  create: BillCreateWithoutSponsorInput!
}

input BillUpsertWithWhereUniqueWithoutYeasInput {
  where: BillWhereUniqueInput!
  update: BillUpdateWithoutYeasDataInput!
  create: BillCreateWithoutYeasInput!
}

input BillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  sponsor: PoliticianWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  yeas_every: PoliticianWhereInput
  yeas_some: PoliticianWhereInput
  yeas_none: PoliticianWhereInput
  nays_every: PoliticianWhereInput
  nays_some: PoliticianWhereInput
  nays_none: PoliticianWhereInput
  AND: [BillWhereInput!]
  OR: [BillWhereInput!]
  NOT: [BillWhereInput!]
}

input BillWhereUniqueInput {
  id: ID
}

type Comment {
  id: ID!
  createdAt: DateTime!
  content: String!
  bill: Bill
  author: User
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  content: String!
  bill: BillCreateOneWithoutCommentsInput
  author: UserCreateOneInput
  likes: LikeCreateManyWithoutCommentInput
}

input CommentCreateManyWithoutBillInput {
  create: [CommentCreateWithoutBillInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneWithoutLikesInput {
  create: CommentCreateWithoutLikesInput
  connect: CommentWhereUniqueInput
}

input CommentCreateWithoutBillInput {
  content: String!
  author: UserCreateOneInput
  likes: LikeCreateManyWithoutCommentInput
}

input CommentCreateWithoutLikesInput {
  content: String!
  bill: BillCreateOneWithoutCommentsInput
  author: UserCreateOneInput
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  content: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  content: String
  bill: BillUpdateOneWithoutCommentsInput
  author: UserUpdateOneInput
  likes: LikeUpdateManyWithoutCommentInput
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentUpdateManyWithoutBillInput {
  create: [CommentCreateWithoutBillInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutBillInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutBillInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneWithoutLikesInput {
  create: CommentCreateWithoutLikesInput
  update: CommentUpdateWithoutLikesDataInput
  upsert: CommentUpsertWithoutLikesInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
}

input CommentUpdateWithoutBillDataInput {
  content: String
  author: UserUpdateOneInput
  likes: LikeUpdateManyWithoutCommentInput
}

input CommentUpdateWithoutLikesDataInput {
  content: String
  bill: BillUpdateOneWithoutCommentsInput
  author: UserUpdateOneInput
}

input CommentUpdateWithWhereUniqueWithoutBillInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutBillDataInput!
}

input CommentUpsertWithoutLikesInput {
  update: CommentUpdateWithoutLikesDataInput!
  create: CommentCreateWithoutLikesInput!
}

input CommentUpsertWithWhereUniqueWithoutBillInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutBillDataInput!
  create: CommentCreateWithoutBillInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  bill: BillWhereInput
  author: UserWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Like {
  id: ID!
  bill: Bill
  comment: Comment
  user: User!
}

type LikeConnection {
  pageInfo: PageInfo!
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  bill: BillCreateOneWithoutLikesInput
  comment: CommentCreateOneWithoutLikesInput
  user: UserCreateOneInput!
}

input LikeCreateManyWithoutBillInput {
  create: [LikeCreateWithoutBillInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutCommentInput {
  create: [LikeCreateWithoutCommentInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutBillInput {
  comment: CommentCreateOneWithoutLikesInput
  user: UserCreateOneInput!
}

input LikeCreateWithoutCommentInput {
  bill: BillCreateOneWithoutLikesInput
  user: UserCreateOneInput!
}

type LikeEdge {
  node: Like!
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LikePreviousValues {
  id: ID!
}

input LikeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LikeScalarWhereInput!]
  OR: [LikeScalarWhereInput!]
  NOT: [LikeScalarWhereInput!]
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
  AND: [LikeSubscriptionWhereInput!]
  OR: [LikeSubscriptionWhereInput!]
  NOT: [LikeSubscriptionWhereInput!]
}

input LikeUpdateInput {
  bill: BillUpdateOneWithoutLikesInput
  comment: CommentUpdateOneWithoutLikesInput
  user: UserUpdateOneRequiredInput
}

input LikeUpdateManyWithoutBillInput {
  create: [LikeCreateWithoutBillInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutBillInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutBillInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateManyWithoutCommentInput {
  create: [LikeCreateWithoutCommentInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutCommentInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutCommentInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateWithoutBillDataInput {
  comment: CommentUpdateOneWithoutLikesInput
  user: UserUpdateOneRequiredInput
}

input LikeUpdateWithoutCommentDataInput {
  bill: BillUpdateOneWithoutLikesInput
  user: UserUpdateOneRequiredInput
}

input LikeUpdateWithWhereUniqueWithoutBillInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutBillDataInput!
}

input LikeUpdateWithWhereUniqueWithoutCommentInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutCommentDataInput!
}

input LikeUpsertWithWhereUniqueWithoutBillInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutBillDataInput!
  create: LikeCreateWithoutBillInput!
}

input LikeUpsertWithWhereUniqueWithoutCommentInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutCommentDataInput!
  create: LikeCreateWithoutCommentInput!
}

input LikeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  bill: BillWhereInput
  comment: CommentWhereInput
  user: UserWhereInput
  AND: [LikeWhereInput!]
  OR: [LikeWhereInput!]
  NOT: [LikeWhereInput!]
}

input LikeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBill(data: BillCreateInput!): Bill!
  updateBill(data: BillUpdateInput!, where: BillWhereUniqueInput!): Bill
  updateManyBills(data: BillUpdateManyMutationInput!, where: BillWhereInput): BatchPayload!
  upsertBill(where: BillWhereUniqueInput!, create: BillCreateInput!, update: BillUpdateInput!): Bill!
  deleteBill(where: BillWhereUniqueInput!): Bill
  deleteManyBills(where: BillWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createLike(data: LikeCreateInput!): Like!
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  createPolitician(data: PoliticianCreateInput!): Politician!
  updatePolitician(data: PoliticianUpdateInput!, where: PoliticianWhereUniqueInput!): Politician
  updateManyPoliticians(data: PoliticianUpdateManyMutationInput!, where: PoliticianWhereInput): BatchPayload!
  upsertPolitician(where: PoliticianWhereUniqueInput!, create: PoliticianCreateInput!, update: PoliticianUpdateInput!): Politician!
  deletePolitician(where: PoliticianWhereUniqueInput!): Politician
  deleteManyPoliticians(where: PoliticianWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Politician {
  id: ID!
  name: String!
  party: String
  bills(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill!]
  yeas(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill!]
  nays(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill!]
}

type PoliticianConnection {
  pageInfo: PageInfo!
  edges: [PoliticianEdge]!
  aggregate: AggregatePolitician!
}

input PoliticianCreateInput {
  name: String!
  party: String
  bills: BillCreateManyWithoutSponsorInput
  yeas: BillCreateManyWithoutYeasInput
  nays: BillCreateManyWithoutNaysInput
}

input PoliticianCreateManyWithoutNaysInput {
  create: [PoliticianCreateWithoutNaysInput!]
  connect: [PoliticianWhereUniqueInput!]
}

input PoliticianCreateManyWithoutYeasInput {
  create: [PoliticianCreateWithoutYeasInput!]
  connect: [PoliticianWhereUniqueInput!]
}

input PoliticianCreateOneWithoutBillsInput {
  create: PoliticianCreateWithoutBillsInput
  connect: PoliticianWhereUniqueInput
}

input PoliticianCreateWithoutBillsInput {
  name: String!
  party: String
  yeas: BillCreateManyWithoutYeasInput
  nays: BillCreateManyWithoutNaysInput
}

input PoliticianCreateWithoutNaysInput {
  name: String!
  party: String
  bills: BillCreateManyWithoutSponsorInput
  yeas: BillCreateManyWithoutYeasInput
}

input PoliticianCreateWithoutYeasInput {
  name: String!
  party: String
  bills: BillCreateManyWithoutSponsorInput
  nays: BillCreateManyWithoutNaysInput
}

type PoliticianEdge {
  node: Politician!
  cursor: String!
}

enum PoliticianOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  party_ASC
  party_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PoliticianPreviousValues {
  id: ID!
  name: String!
  party: String
}

input PoliticianScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  party: String
  party_not: String
  party_in: [String!]
  party_not_in: [String!]
  party_lt: String
  party_lte: String
  party_gt: String
  party_gte: String
  party_contains: String
  party_not_contains: String
  party_starts_with: String
  party_not_starts_with: String
  party_ends_with: String
  party_not_ends_with: String
  AND: [PoliticianScalarWhereInput!]
  OR: [PoliticianScalarWhereInput!]
  NOT: [PoliticianScalarWhereInput!]
}

type PoliticianSubscriptionPayload {
  mutation: MutationType!
  node: Politician
  updatedFields: [String!]
  previousValues: PoliticianPreviousValues
}

input PoliticianSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PoliticianWhereInput
  AND: [PoliticianSubscriptionWhereInput!]
  OR: [PoliticianSubscriptionWhereInput!]
  NOT: [PoliticianSubscriptionWhereInput!]
}

input PoliticianUpdateInput {
  name: String
  party: String
  bills: BillUpdateManyWithoutSponsorInput
  yeas: BillUpdateManyWithoutYeasInput
  nays: BillUpdateManyWithoutNaysInput
}

input PoliticianUpdateManyDataInput {
  name: String
  party: String
}

input PoliticianUpdateManyMutationInput {
  name: String
  party: String
}

input PoliticianUpdateManyWithoutNaysInput {
  create: [PoliticianCreateWithoutNaysInput!]
  delete: [PoliticianWhereUniqueInput!]
  connect: [PoliticianWhereUniqueInput!]
  disconnect: [PoliticianWhereUniqueInput!]
  update: [PoliticianUpdateWithWhereUniqueWithoutNaysInput!]
  upsert: [PoliticianUpsertWithWhereUniqueWithoutNaysInput!]
  deleteMany: [PoliticianScalarWhereInput!]
  updateMany: [PoliticianUpdateManyWithWhereNestedInput!]
}

input PoliticianUpdateManyWithoutYeasInput {
  create: [PoliticianCreateWithoutYeasInput!]
  delete: [PoliticianWhereUniqueInput!]
  connect: [PoliticianWhereUniqueInput!]
  disconnect: [PoliticianWhereUniqueInput!]
  update: [PoliticianUpdateWithWhereUniqueWithoutYeasInput!]
  upsert: [PoliticianUpsertWithWhereUniqueWithoutYeasInput!]
  deleteMany: [PoliticianScalarWhereInput!]
  updateMany: [PoliticianUpdateManyWithWhereNestedInput!]
}

input PoliticianUpdateManyWithWhereNestedInput {
  where: PoliticianScalarWhereInput!
  data: PoliticianUpdateManyDataInput!
}

input PoliticianUpdateOneWithoutBillsInput {
  create: PoliticianCreateWithoutBillsInput
  update: PoliticianUpdateWithoutBillsDataInput
  upsert: PoliticianUpsertWithoutBillsInput
  delete: Boolean
  disconnect: Boolean
  connect: PoliticianWhereUniqueInput
}

input PoliticianUpdateWithoutBillsDataInput {
  name: String
  party: String
  yeas: BillUpdateManyWithoutYeasInput
  nays: BillUpdateManyWithoutNaysInput
}

input PoliticianUpdateWithoutNaysDataInput {
  name: String
  party: String
  bills: BillUpdateManyWithoutSponsorInput
  yeas: BillUpdateManyWithoutYeasInput
}

input PoliticianUpdateWithoutYeasDataInput {
  name: String
  party: String
  bills: BillUpdateManyWithoutSponsorInput
  nays: BillUpdateManyWithoutNaysInput
}

input PoliticianUpdateWithWhereUniqueWithoutNaysInput {
  where: PoliticianWhereUniqueInput!
  data: PoliticianUpdateWithoutNaysDataInput!
}

input PoliticianUpdateWithWhereUniqueWithoutYeasInput {
  where: PoliticianWhereUniqueInput!
  data: PoliticianUpdateWithoutYeasDataInput!
}

input PoliticianUpsertWithoutBillsInput {
  update: PoliticianUpdateWithoutBillsDataInput!
  create: PoliticianCreateWithoutBillsInput!
}

input PoliticianUpsertWithWhereUniqueWithoutNaysInput {
  where: PoliticianWhereUniqueInput!
  update: PoliticianUpdateWithoutNaysDataInput!
  create: PoliticianCreateWithoutNaysInput!
}

input PoliticianUpsertWithWhereUniqueWithoutYeasInput {
  where: PoliticianWhereUniqueInput!
  update: PoliticianUpdateWithoutYeasDataInput!
  create: PoliticianCreateWithoutYeasInput!
}

input PoliticianWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  party: String
  party_not: String
  party_in: [String!]
  party_not_in: [String!]
  party_lt: String
  party_lte: String
  party_gt: String
  party_gte: String
  party_contains: String
  party_not_contains: String
  party_starts_with: String
  party_not_starts_with: String
  party_ends_with: String
  party_not_ends_with: String
  bills_every: BillWhereInput
  bills_some: BillWhereInput
  bills_none: BillWhereInput
  yeas_every: BillWhereInput
  yeas_some: BillWhereInput
  yeas_none: BillWhereInput
  nays_every: BillWhereInput
  nays_some: BillWhereInput
  nays_none: BillWhereInput
  AND: [PoliticianWhereInput!]
  OR: [PoliticianWhereInput!]
  NOT: [PoliticianWhereInput!]
}

input PoliticianWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  published: Boolean
  title: String!
  content: String
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  bill(where: BillWhereUniqueInput!): Bill
  bills(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bill]!
  billsConnection(where: BillWhereInput, orderBy: BillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BillConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  like(where: LikeWhereUniqueInput!): Like
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  politician(where: PoliticianWhereUniqueInput!): Politician
  politicians(where: PoliticianWhereInput, orderBy: PoliticianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Politician]!
  politiciansConnection(where: PoliticianWhereInput, orderBy: PoliticianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PoliticianConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bill(where: BillSubscriptionWhereInput): BillSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  politician(where: PoliticianSubscriptionWhereInput): PoliticianSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    