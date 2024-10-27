import { fetchCsrfTokenFromDefaultApi } from './fetchCsrfTokenFromDefaultApi'
import _get from 'lodash/get'

const csrfCookie: string = "XSRF-TOKEN";
const baseURL: string = "http://localhost:8000";

/**
 * Api call using nuxt `useFetch`
 *
 * @see {@link https://github.com/unjs/ohmyfetch#readme} ~ ohmyfetch Docs
 * @param url
 * @param options
 */
export const fetchDefaultApi = async (url: string, options?: {}) => {
	// First we verify if the `xsrf-token` is present on the browser cookies
	let token: string | null | undefined = _get(useCookie(csrfCookie), 'value');

	if (!token) {
		// If not present we will re fetch all cookies, the browser will
		// handle them automatically so we don't need to do anything
		await fetchCsrfTokenFromDefaultApi();

		// Load the new token value to use it in the `headers`
		token = _get(useCookie(csrfCookie), 'value');
	}

	// Here we will create a default set of headers for every request
	// if present we will also spread the `headers` set by the user
	// then we will delete them to avoid collision in next spread
	const headers: HeadersInit = {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"X-XSRF-TOKEN": token ?? '',
		...options
	};

	// At this point all the `headers` passed by the user where correctly
	// set in the defaults, now we will spread `options` to remove the
	// `headers` attribute so we don't spread it again in `useFetch`
	const opts = options ? (({ ...opts }) => opts)(options) : {};

	try {
		const response = await $fetch(url, {
			baseURL: baseURL,
			credentials: "include", // Allow browser to handle cookies
			headers,
			...opts
		});
		
		return response;
	} catch (error) {
		throw error;
	}
};
