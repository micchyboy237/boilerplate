import type { Prisma, DocumentGroup } from "../../../database/node_modules/@prisma/client"
import type { PrismaClient } from "../../../database/node_modules/@prisma/client"

import { Request, Response, NextFunction } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"
import { ZodTypeAny } from "zod"

export interface FindManyRequest extends Request {
  prisma: PrismaClient
  query: Prisma.DocumentGroupFindManyArgs & ParsedQs
  outputValidation?: ZodTypeAny
  passToNext?: boolean
  locals?: {
    data?: DocumentGroup[]
    outputValidator?: ZodTypeAny
  }
}
export type FindManyMiddleware = RequestHandler<
  ParamsDictionary,
  any,
  any,
  Prisma.DocumentGroupFindManyArgs & ParsedQs,
  Record<string, any>
>

export async function DocumentGroupFindMany(req: FindManyRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation

    const data = await req.prisma.documentGroup.findMany(req.query as Prisma.DocumentGroupFindManyArgs)
    if (req.passToNext) {
      if (req.locals) req.locals.data = data
      next()
    } else if (outputValidator) {
      const validationResult = outputValidator.safeParse(data)
      if (validationResult.success) {
        return res.status(200).json(validationResult.data)
      } else {
        return res.status(400).json({ error: "Invalid data format", details: validationResult.error })
      }
    } else {
      return res.status(200).json(data)
    }
  } catch (error: unknown) {
    next(error)
  }
}
