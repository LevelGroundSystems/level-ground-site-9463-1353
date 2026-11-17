import { Clock, Globe, Repeat, GraduationCap, Megaphone, Target } from "lucide-react";

/** Icon per service id — kept out of site.ts so that file stays plain data. */
export const serviceIcons = {
	websites: Globe,
	"social-media": Megaphone,
	"ai-training": GraduationCap,
	"lead-generation": Target,
	"lead-follow-up": Repeat,
	automation: Clock,
} as const;
