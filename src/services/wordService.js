import axios from 'axios';

function handleError(error) {
  const message = error.response?.data?.error || 'Error al validar la palabra';
  return { success: false, error: message };
}

export async function checkWordExists(word) {
  try {
    const response = await axios.get('https://word-api-hmlg.vercel.app/api/validate', {
      params: { word },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error);
  }
}