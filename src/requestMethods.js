import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVjNzA5MDQ0NGQ1NmFjOTY3ZTYxOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzExMjM4NywiZXhwIjoxNjc0MjE2Mzg3fQ.-_VQdq8tckoNdzdsJGKZ4PUPgrj0Qwp137HHyPZ4jio";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
