const baseURL: string = "http://localhost:8000";

/**
 * Return the cookies needed by "Sanctum", browser will handle them automatically.
 */
export const fetchCsrfTokenFromDefaultApi = async () => {
	await useFetch('/sanctum/csrf-cookie', {
		baseURL: baseURL,
		credentials: "include" // Allow browser to handle cookies
	});
};
