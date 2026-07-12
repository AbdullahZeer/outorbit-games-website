/** Ordered pitch deck registry — add a slide = new component + one entry here */
export type PitchSlideMeta = {
	id: string;
	title: string;
	/** Prefetch these image URLs when the slide (or neighbor) is active */
	prefetch?: string[];
};

export const pitchSlides: PitchSlideMeta[] = [
	{
		id: 'title',
		title: 'Title',
		prefetch: ['/hype/pitch/art/hero.webp'],
	},
	{
		id: 'hook',
		title: 'The Hook',
	},
	{
		id: 'opportunity',
		title: 'The Opportunity',
	},
	{
		id: 'overview',
		title: 'Game Overview',
		prefetch: ['/hype/pitch/art/hero-sm.webp'],
	},
	{
		id: 'loop',
		title: 'Day / Night Loop',
	},
	{
		id: 'features',
		title: 'Core Features',
	},
	{
		id: 'cast',
		title: 'The Patrol',
		prefetch: ['/hype/pitch/art/uniforms.webp'],
	},
	{
		id: 'yokai',
		title: 'The Threat',
		prefetch: ['/hype/pitch/art/yurei.webp'],
	},
	{
		id: 'positioning',
		title: 'Why This Lane',
	},
	{
		id: 'studio',
		title: 'Studio',
	},
	{
		id: 'status',
		title: 'Status & Contact',
	},
	{
		id: 'thanks',
		title: 'Thank You',
		prefetch: ['/hype/pitch/art/hero-sm.webp'],
	},
];

export const pitchSlideCount = pitchSlides.length;
