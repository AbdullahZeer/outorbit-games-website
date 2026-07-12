/** Ordered pitch deck registry — matches Pitch Deck_polden_draft (14 slides) */
export type PitchSlideMeta = {
	id: string;
	title: string;
	/** Prefetch these image URLs when the slide (or neighbor) is active */
	prefetch?: string[];
};

export const pitchSlides: PitchSlideMeta[] = [
	{
		id: 'cover',
		title: 'Cover',
		prefetch: ['/hype/pitch/art/cover.webp'],
	},
	{
		id: 'elevator',
		title: 'Elevator Pitch',
	},
	{
		id: 'trailer',
		title: 'Trailer',
		prefetch: ['/hype/pitch/art/trailer.webp'],
	},
	{
		id: 'fantasy',
		title: 'Game Fantasy',
		prefetch: ['/hype/pitch/art/ref-dandadan.webp', '/hype/pitch/art/cast-group.webp'],
	},
	{
		id: 'day-loop',
		title: 'Gameplay Loop — Day',
		prefetch: ['/hype/pitch/art/day-strip.webp'],
	},
	{
		id: 'night-loop',
		title: 'Gameplay Loop — Night',
		prefetch: ['/hype/pitch/art/night-strip.webp'],
	},
	{
		id: 'case-engine',
		title: 'Yokai Case Engine',
		prefetch: ['/hype/pitch/art/yurei.webp'],
	},
	{
		id: 'visual-identity',
		title: 'Visual Identity',
	},
	{
		id: 'audience',
		title: 'Audience & Cultural Timing',
	},
	{
		id: 'vtuber',
		title: 'Creator / VTuber Fit',
		prefetch: ['/hype/pitch/art/vtuber-thumb.webp'],
	},
	{
		id: 'market',
		title: 'Market Opportunity',
	},
	{
		id: 'timeline',
		title: 'Production Timeline',
	},
	{
		id: 'ask',
		title: 'The Ask',
	},
	{
		id: 'team',
		title: 'The Team',
		prefetch: [
			'/hype/pitch/art/team-1.webp',
			'/hype/pitch/art/team-geniro.webp',
			'/hype/pitch/art/team-chillifish.webp',
			'/hype/pitch/art/team-4.webp',
		],
	},
];

export const pitchSlideCount = pitchSlides.length;
