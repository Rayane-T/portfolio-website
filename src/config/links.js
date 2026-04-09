export const RESUME_URL = "https://drive.google.com/file/d/resume/view?usp=sharing";

const match = RESUME_URL.match(/\/d\/([^/]+)/);

export const RESUME_EMBED_URL = match
	? `https://drive.google.com/file/d/${match[1]}/preview`
	: "";
