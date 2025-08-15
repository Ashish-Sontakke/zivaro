import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  // Organization model - represents a company using the platform
  Organization: a
    .model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      website: a.string(),
      // Relationships will be created automatically
    })
    .authorization((allow) => [allow.group("admin")]),

  // Job model - represents a job posting
  Job: a
    .model({
      id: a.id(),
      title: a.string(),
      description: a.string(),
      skills: a.string().array(),
      status: a.enum(["ACTIVE", "CLOSED"]),
      organizationId: a.id(), // Foreign key to Organization
    })
    .secondaryIndexes((index) => [index("organizationId")])
    .authorization((allow) => [allow.group("admin")]),

  // Candidate model - represents a job applicant
  Candidate: a
    .model({
      id: a.id(),
      name: a.string(),
      email: a.string(),
      phone: a.string(),
      resume: a.string(), // URL to resume file
    })
    .authorization((allow) => [allow.owner()]),

  // Interview model - represents an AI interview session
  Interview: a
    .model({
      id: a.id(),
      jobId: a.id(), // Foreign key to Job
      candidateId: a.id(), // Foreign key to Candidate
      score: a.float(), // Overall interview score
      status: a.enum(["PENDING", "COMPLETED", "CANCELLED"]),
      feedback: a.string(),
      completedAt: a.datetime(),
      responses: a.json(), // Store interview Q&A as JSON
    })
    .identifier(["jobId"])
    .secondaryIndexes((index) => [index("candidateId")])
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
