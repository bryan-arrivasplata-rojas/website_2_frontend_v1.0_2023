const apiUrl = process.env.REACT_APP_API_URL;

export const Http = async (endpoint) => {
  try {
    const response = await fetch(apiUrl + endpoint);
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};