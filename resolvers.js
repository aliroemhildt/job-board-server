import { Job, Company } from './db.js';

export const resolvers = {
  Query: {
    job: (_root, { id }) => Job.findById(id),
    jobs: () => Job.findAll(),
    company: (_root, { id }) => Company.findById(id)
  },

  Mutation: {
    createJob: (_root, { title, companyId, description }) => {
      return Job.create({ title, companyId, description });
    }
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id)
  },

  Job: {
    company: (job) => Company.findById(job.companyId)
  }
}