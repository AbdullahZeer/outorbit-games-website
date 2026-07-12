/**
 * Client controller for /pitch — password gate + slide navigation.
 * Soft gate: compares SHA-256 of input to build-time hash.
 */

const STORAGE_KEY = 'hype_pitch_ok';
const COOKIE_NAME = 'hype_pitch_ok';

async function sha256Hex(text: string): Promise<string> {
	const data = new TextEncoder().encode(text);
	const digest = await crypto.subtle.digest('SHA-256', data);
	return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readUnlocked(): boolean {
	try {
		if (sessionStorage.getItem(STORAGE_KEY) === '1') return true;
	} catch {
		/* ignore */
	}
	return document.cookie.split(';').some((c) => c.trim().startsWith(`${COOKIE_NAME}=1`));
}

function setUnlocked(): void {
	try {
		sessionStorage.setItem(STORAGE_KEY, '1');
	} catch {
		/* ignore */
	}
	const secure = location.protocol === 'https:' ? '; Secure' : '';
	document.cookie = `${COOKIE_NAME}=1; Path=/pitch; SameSite=Lax${secure}`;
}

function prefetchUrls(urls: string[]): void {
	for (const href of urls) {
		if (!href || document.querySelector(`link[data-pitch-pre="${href}"]`)) continue;
		const link = document.createElement('link');
		link.rel = 'prefetch';
		link.as = 'image';
		link.href = href;
		link.dataset.pitchPre = href;
		document.head.appendChild(link);
	}
}

function initDeck(root: HTMLElement): void {
	const count = Number(root.dataset.slideCount || '1');
	const prefetchMap = JSON.parse(root.dataset.prefetch || '[]') as string[][];
	const metaTitles = JSON.parse(root.dataset.titles || '[]') as string[];
	const panels = [...root.querySelectorAll<HTMLElement>('.pitch-slide-panel')];
	const titleEl = document.getElementById('pitch-slide-title');
	const counterEl = document.getElementById('pitch-slide-counter');
	const prevBtn = document.getElementById('pitch-prev') as HTMLButtonElement | null;
	const nextBtn = document.getElementById('pitch-next') as HTMLButtonElement | null;

	let index = 0;
	let touchX: number | null = null;

	const show = (next: number) => {
		index = Math.max(0, Math.min(count - 1, next));
		panels.forEach((panel, i) => {
			const active = i === index;
			panel.hidden = !active;
			panel.classList.toggle('pitch-slide-active', active);
		});
		if (counterEl) counterEl.textContent = `${index + 1} / ${count}`;
		if (titleEl && metaTitles[index]) titleEl.textContent = metaTitles[index];
		if (prevBtn) prevBtn.disabled = index === 0;
		if (nextBtn) nextBtn.disabled = index === count - 1;

		const nearby = [index - 1, index, index + 1].filter((i) => i >= 0 && i < count);
		for (const i of nearby) prefetchUrls(prefetchMap[i] ?? []);
	};

	prevBtn?.addEventListener('click', () => show(index - 1));
	nextBtn?.addEventListener('click', () => show(index + 1));

	window.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
			e.preventDefault();
			show(index + 1);
		} else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
			e.preventDefault();
			show(index - 1);
		} else if (e.key === 'Home') {
			e.preventDefault();
			show(0);
		} else if (e.key === 'End') {
			e.preventDefault();
			show(count - 1);
		}
	});

	root.addEventListener(
		'touchstart',
		(e) => {
			touchX = e.changedTouches[0]?.clientX ?? null;
		},
		{ passive: true },
	);
	root.addEventListener(
		'touchend',
		(e) => {
			if (touchX == null) return;
			const x = e.changedTouches[0]?.clientX ?? touchX;
			const dx = x - touchX;
			touchX = null;
			if (Math.abs(dx) < 48) return;
			if (dx < 0) show(index + 1);
			else show(index - 1);
		},
		{ passive: true },
	);

	show(0);
}

async function initGate(): Promise<void> {
	const gate = document.getElementById('pitch-gate');
	const deck = document.getElementById('pitch-deck');
	if (!gate || !deck) return;

	const expected = gate.dataset.passwordHash || '';

	const unlock = () => {
		gate.hidden = true;
		deck.hidden = false;
		initDeck(deck);
	};

	if (expected && readUnlocked()) {
		unlock();
		return;
	}

	gate.hidden = false;
	deck.hidden = true;

	const form = document.getElementById('pitch-gate-form') as HTMLFormElement | null;
	const error = document.getElementById('pitch-gate-error');
	const input = document.getElementById('pitch-password') as HTMLInputElement | null;

	form?.addEventListener('submit', async (e) => {
		e.preventDefault();
		const value = input?.value ?? '';
		const hash = await sha256Hex(value);
		if (!expected || hash !== expected) {
			error?.classList.remove('hidden');
			input?.select();
			return;
		}
		error?.classList.add('hidden');
		setUnlocked();
		unlock();
	});
}

void initGate();
