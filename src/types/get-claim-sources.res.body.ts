import { claimSourceSchema } from '@/schemas/claim-source.schema';
import { z } from 'zod';

export const getClaimSourcesResBodySchema = z.object({
  data: claimSourceSchema.array(),
});

export type GetClaimSourcesResBody = z.infer<
  typeof getClaimSourcesResBodySchema
>;
