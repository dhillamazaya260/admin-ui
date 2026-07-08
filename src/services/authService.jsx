import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app"; // URL backend

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password }, 
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: "Login gagal" };
  }
};

export const registerService = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    // Jaga-jaga: sebagian API demo tetap balas status 200 walau email
    // sudah terpakai, cuma beda di pesan body-nya. Jadi selain mengandalkan
    // status HTTP, kita cek juga kata kunci "gagal/sudah/used/exist" di
    // pesan body supaya tetap kedeteksi sebagai error.
    const body = response.data;
    const possibleMsg = body?.msg || body?.message || body?.error;
    const looksLikeFailure =
      possibleMsg &&
      /sudah|gagal|exist|used|terdaftar|duplicate|failed/i.test(possibleMsg);

    if (looksLikeFailure) {
      throw { msg: possibleMsg };
    }

    return body;
  } catch (error) {
    if (error?.msg) throw error; // sudah kita lempar manual di atas
    throw error.response?.data || { msg: "Register gagal" };
  }
};

export const logoutService = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(`${API_URL}/logout`, 
     {},
	   {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
     }
    );
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};