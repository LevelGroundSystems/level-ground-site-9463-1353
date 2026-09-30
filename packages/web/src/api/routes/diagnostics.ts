import { ORPCError } from "@orpc/server";
import { desc } from "drizzle-orm";
import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const submitInput = z.object({
	name: z.string().min(1).max(120),
	company: z.string().min(1).max(160),
	email: z.string().email().max(200),
	phone: z.string().min(7).max(40),
	website: z.string().max(200).optional(),
	teamSize: z.string().min(1).max(80),
	focus: z.string().max(120).optional(),
	biggestDrag: z.string().max(200).optional(),
	notes: z.string().max(2000).optional(),
	source: z.string().max(60).optional(),
});

/** Passcode for the internal /leads view. Set LEADS_PASSCODE in the root .env. */
const passcode = () => process.env.LEADS_PASSCODE || "villar2026";

export const diagnostics = {
	submit: base.input(submitInput).handler(async ({ input }) => {
		const [row] = await db
			.insert(schema.diagnosticRequests)
			.values({
				...input,
				website: input.website?.trim() || null,
				focus: input.focus?.trim() || null,
				biggestDrag: input.biggestDrag?.trim() || null,
				notes: input.notes?.trim() || null,
				source: input.source?.trim() || "website",
			})
			.returning();

		return { id: row.id, createdAt: row.createdAt };
	}),

	list: base.input(z.object({ passcode: z.string() })).handler(async ({ input }) => {
		if (input.passcode !== passcode()) {
			throw new ORPCError("UNAUTHORIZED", { message: "Wrong passcode" });
		}
		return db
			.select()
			.from(schema.diagnosticRequests)
			.orderBy(desc(schema.diagnosticRequests.createdAt));
	}),
};
