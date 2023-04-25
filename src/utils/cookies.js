import cookie from "cookie";

export const setAuthCookie = (res, authToken) => {
	const cookieOptions = {
		//httpOnly: true,
		maxAge: 60 * 60 * 24 * 7, // Expires after 1 week
		path: "/"
	};

	res.setHeader(
		"Set-Cookie",
		cookie.serialize("authToken", authToken, cookieOptions)
	);
};

export const getAuthToken = (req) => {
	const cookies = cookie.parse(req.headers.cookie || "");

	if (!cookies.authToken) {
		return null;
	}

	return cookies.authToken;
};
