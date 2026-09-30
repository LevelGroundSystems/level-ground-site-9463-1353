import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Free diagnostic requests submitted from the website.
 * The diagnostic is the funnel entry point: a 45-minute structured look at
 * where time and revenue leak, written up and handed over either way.
 */
export const diagnosticRequests = sqliteTable("diagnostic_requests", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	company: text("company").notNull(),
	email: text("email").notNull(),
	phone: text("phone").notNull(),
	website: text("website"),
	teamSize: text("team_size").notNull(),
	focus: text("focus"),
	biggestDrag: text("biggest_drag"),
	notes: text("notes"),
	source: text("source").notNull().default("website"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.$defaultFn(() => new Date()),
});
