import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '8049db6d46msh48911bd51c5d26ap18b1a6jsn8b0bfdf0368d'
		}
	})

	return data
}