const API_BASE_URL = 'http://localhost:5000';

export async function getFornecedores() {
  try {
    const response = await fetch(`${API_BASE_URL}/fornecedores`);
    if (!response.ok) throw new Error('Erro ao buscar fornecedores');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}