import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const ExampleScalarFieldEnumSchema = z.enum(["id"]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// EXAMPLE SCHEMA
/////////////////////////////////////////

export const ExampleSchema = z.object({
  id: z.string().cuid(),
});

export type Example = z.infer<typeof ExampleSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// EXAMPLE
//------------------------------------------------------

export const ExampleSelectSchema: z.ZodType<Prisma.ExampleSelect> = z
  .object({
    id: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ExampleWhereInputSchema: z.ZodType<Prisma.ExampleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExampleWhereInputSchema),
        z.lazy(() => ExampleWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExampleWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExampleWhereInputSchema),
        z.lazy(() => ExampleWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  })
  .strict();

export const ExampleOrderByWithRelationInputSchema: z.ZodType<Prisma.ExampleOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleWhereUniqueInputSchema: z.ZodType<Prisma.ExampleWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid(),
    })
    .and(
      z
        .object({
          id: z.string().cuid().optional(),
          AND: z
            .union([
              z.lazy(() => ExampleWhereInputSchema),
              z.lazy(() => ExampleWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ExampleWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ExampleWhereInputSchema),
              z.lazy(() => ExampleWhereInputSchema).array(),
            ])
            .optional(),
        })
        .strict()
    );

export const ExampleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExampleOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ExampleCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ExampleMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ExampleMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ExampleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExampleScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ExampleScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ExampleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ExampleCreateInputSchema: z.ZodType<Prisma.ExampleCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
  })
  .strict();

export const ExampleUncheckedCreateInputSchema: z.ZodType<Prisma.ExampleUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ExampleUpdateInputSchema: z.ZodType<Prisma.ExampleUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  })
  .strict();

export const ExampleUncheckedUpdateInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ExampleCreateManyInputSchema: z.ZodType<Prisma.ExampleCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ExampleUpdateManyMutationInputSchema: z.ZodType<Prisma.ExampleUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ExampleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExampleUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const ExampleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExampleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExampleMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ExampleFindFirstArgsSchema: z.ZodType<Prisma.ExampleFindFirstArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindFirstOrThrowArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleFindManyArgsSchema: z.ZodType<Prisma.ExampleFindManyArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ExampleScalarFieldEnumSchema,
          ExampleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ExampleAggregateArgsSchema: z.ZodType<Prisma.ExampleAggregateArgs> =
  z
    .object({
      where: ExampleWhereInputSchema.optional(),
      orderBy: z
        .union([
          ExampleOrderByWithRelationInputSchema.array(),
          ExampleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ExampleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ExampleGroupByArgsSchema: z.ZodType<Prisma.ExampleGroupByArgs> = z
  .object({
    where: ExampleWhereInputSchema.optional(),
    orderBy: z
      .union([
        ExampleOrderByWithAggregationInputSchema.array(),
        ExampleOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ExampleScalarFieldEnumSchema.array(),
    having: ExampleScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ExampleFindUniqueArgsSchema: z.ZodType<Prisma.ExampleFindUniqueArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereUniqueInputSchema,
    })
    .strict();

export const ExampleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExampleFindUniqueOrThrowArgs> =
  z
    .object({
      select: ExampleSelectSchema.optional(),
      where: ExampleWhereUniqueInputSchema,
    })
    .strict();

export const ExampleCreateArgsSchema: z.ZodType<Prisma.ExampleCreateArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    data: z
      .union([ExampleCreateInputSchema, ExampleUncheckedCreateInputSchema])
      .optional(),
  })
  .strict();

export const ExampleUpsertArgsSchema: z.ZodType<Prisma.ExampleUpsertArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    where: ExampleWhereUniqueInputSchema,
    create: z.union([
      ExampleCreateInputSchema,
      ExampleUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ExampleUpdateInputSchema,
      ExampleUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ExampleCreateManyArgsSchema: z.ZodType<Prisma.ExampleCreateManyArgs> =
  z
    .object({
      data: z.union([
        ExampleCreateManyInputSchema,
        ExampleCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ExampleDeleteArgsSchema: z.ZodType<Prisma.ExampleDeleteArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    where: ExampleWhereUniqueInputSchema,
  })
  .strict();

export const ExampleUpdateArgsSchema: z.ZodType<Prisma.ExampleUpdateArgs> = z
  .object({
    select: ExampleSelectSchema.optional(),
    data: z.union([
      ExampleUpdateInputSchema,
      ExampleUncheckedUpdateInputSchema,
    ]),
    where: ExampleWhereUniqueInputSchema,
  })
  .strict();

export const ExampleUpdateManyArgsSchema: z.ZodType<Prisma.ExampleUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ExampleUpdateManyMutationInputSchema,
        ExampleUncheckedUpdateManyInputSchema,
      ]),
      where: ExampleWhereInputSchema.optional(),
    })
    .strict();

export const ExampleDeleteManyArgsSchema: z.ZodType<Prisma.ExampleDeleteManyArgs> =
  z
    .object({
      where: ExampleWhereInputSchema.optional(),
    })
    .strict();
