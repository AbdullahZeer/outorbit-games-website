/** Shared copy and links for HYPE: Highschool Yokai Patrol & Exorcism. */

export const gameTitle = "HYPE: Highschool Yokai Patrol & Exorcism";

export const steamAppUrl = "https://store.steampowered.com/app/4637410/";

/**
 * Wishlist links. utm_source stays `outorbit`; pass a distinct content id per placement.
 */
export function steamUrl(content: string) {
	const url = new URL(steamAppUrl);
	url.searchParams.set("utm_source", "outorbit");
	url.searchParams.set("utm_content", content);
	return url.toString();
}

/**
 * TRAILER PLACEHOLDER
 * Paste a YouTube video id here when the trailer is final (the id only, not the full URL).
 * Leave this empty to hide the embed on /hype.
 *
 * Example: export const trailerYouTubeId = "xxxxxxxxxxx";
 */
export const trailerYouTubeId = "";

export const hypeDescription =
	"HYPE: Highschool Yokai Patrol & Exorcism is a 1–4 player online co-op horror game. Follow the rumors by day and seal the curse after dark. Coming soon on Steam.";

export const screenshots = [
	{
		src: "/hype/screenshots/01.webp",
		width: 1600,
		height: 900,
		alt: "Students with flashlights face a pale yokai in a red-lit school hallway, a paper charm hanging in the foreground.",
	},
	{
		src: "/hype/screenshots/02.webp",
		width: 1600,
		height: 900,
		alt: "A student with a flashlight stands in a dark classroom while a long-haired yokai waits by the windows.",
	},
	{
		src: "/hype/screenshots/03.webp",
		width: 1600,
		height: 900,
		alt: "Three club members with flashlights in a dark classroom, a yokai lingering behind them.",
	},
	{
		src: "/hype/screenshots/04.webp",
		width: 1600,
		height: 900,
		alt: "First-person view down a school hallway, flashlight on, red paper charms on the walls, a yokai ahead.",
	},
	{
		src: "/hype/screenshots/05.webp",
		width: 1600,
		height: 900,
		alt: "A yokai stands in a dark school corridor hung with red paper charms.",
	},
	{
		src: "/hype/screenshots/06.webp",
		width: 1600,
		height: 900,
		alt: "A student shines a flashlight on a pale yokai in a dark hallway.",
	},
	{
		src: "/hype/screenshots/07.webp",
		width: 1600,
		height: 900,
		alt: "Two club members with flashlights face a tall yokai in a school hallway.",
	},
] as const;
