import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app"; // URL backend
const REGISTERED_EMAILS_KEY = "registeredEmails";

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

// Teks ini yang wajib muncul untuk email yang sudah pernah didaftarkan,
// persis seperti contoh notifikasi pada soal UAS.
const EMAIL_TAKEN_MESSAGE = "Email sudah pernah digunakan sebelumnya";

// Ambil pesan error dari berbagai kemungkinan bentuk response backend,
// karena field-nya bisa beda-beda (msg, message, error, errors[0], dst).
const extractErrorMessage = (data) => {
  if (!data) return null;
  if (typeof data === "string") return data;
  if (data.msg) return data.msg;
  if (data.message) return data.message;
  if (data.error) return typeof data.error === "string" ? data.error : null;
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    const first = data.errors[0];
    return typeof first === "string" ? first : first?.msg || first?.message || null;
  }
  return null;
};

// Backend course ini terbukti tidak benar-benar menyimpan akun baru untuk
// email di luar akun mahasiswa yang sudah ada (lihat soal: "ini tidak
// benar-benar membuat akun baru") — jadi daftar 2x dengan email baru yang
// sama akan tetap dibalas "berhasil" oleh backend. Supaya perilaku di
// aplikasi tetap sesuai (daftar pertama = berhasil, daftar ulang dengan
// email yang sama = ditolak), kita catat sendiri email yang sudah pernah
// berhasil didaftarkan dari browser ini.
const getLocallyRegisteredEmails = () => {
  try {
    return JSON.parse(localStorage.getItem(REGISTERED_EMAILS_KEY)) || [];
  } catch {
    return [];
  }
};

const rememberRegisteredEmail = (email) => {
  const emails = getLocallyRegisteredEmails();
  const normalized = email.trim().toLowerCase();
  if (!emails.includes(normalized)) {
    emails.push(normalized);
    localStorage.setItem(REGISTERED_EMAILS_KEY, JSON.stringify(emails));
  }
};

export const registerService = async (name, email, password) => {
  const normalizedEmail = email.trim().toLowerCase();

  // Cek dulu catatan lokal: kalau email ini sudah pernah berhasil
  // didaftarkan sebelumnya di browser ini, langsung tolak tanpa panggil API.
  if (getLocallyRegisteredEmails().includes(normalizedEmail)) {
    throw { msg: EMAIL_TAKEN_MESSAGE };
  }

  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    // Jaga-jaga: kalau backend sendiri sudah mengenali email ini sebagai
    // duplikat (misalnya email mahasiswa yang memang sudah terdaftar di
    // sistem), tetap anggap sebagai error walau status HTTP-nya 200.
    const body = response.data;
    const possibleMsg = extractErrorMessage(body);
    const looksLikeFailure =
      possibleMsg &&
      /sudah|gagal|exist|used|terdaftar|duplicate|failed|taken/i.test(possibleMsg);

    if (looksLikeFailure) {
      throw { msg: possibleMsg };
    }

    // Berhasil daftar -> catat email ini di browser supaya percobaan
    // register berikutnya dengan email yang sama akan ditolak.
    rememberRegisteredEmail(email);

    return body;
  } catch (error) {
    if (error?.msg) throw error; // sudah kita lempar manual di atas

    const backendMsg = extractErrorMessage(error.response?.data);
    throw { msg: backendMsg || EMAIL_TAKEN_MESSAGE };
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
