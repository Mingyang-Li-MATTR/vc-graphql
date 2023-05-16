import { z } from 'zod';

const authorisationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const requestParamSchema = z.object({
  mapFrom: z.string().optional(),
  required: z.boolean().optional(),
  defaultValue: z.string().optional(),
});

export const claimSourceSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  authorization: authorisationSchema,
  requestParameters: z.record(requestParamSchema),
});

export type GetClaimSourcesResBody = z.infer<typeof claimSourceSchema>;
