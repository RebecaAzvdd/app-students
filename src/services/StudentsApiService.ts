import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

export interface User {
    _id?: string;
    nome: string;
    email: string;
    curso: string;
    periodo: string;
    turma: string;
    turno: string;
    endereco: string;
    telefone: string;
    createdAt?: string;
    updatedAt?: string;
  }

  export const createUser = async (userData: User): Promise<User> => {
    try {
      const response = await axios.post(`${apiUrl}/students`, userData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response ? error.response.data.erro : error.message);
    }
  };
  
  export const listUsers = async (): Promise<User[]> => {
    try {
      const response = await axios.get(`${apiUrl}/students`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response ? error.response.data.erro : error.message);
    }
  };

  export const findUserById = async (id: string): Promise<User> => {
    try {
      const response = await axios.get(`${apiUrl}/students/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response ? error.response.data.erro : error.message);
    }
  };
  
  export const updateUser = async (id: string, userData: User): Promise<User> => {
    try {
      const response = await axios.put(`${apiUrl}/students/${id}`, userData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response ? error.response.data.erro : error.message);
    }
  };
  
  export const deleteUser = async (id: string): Promise<{ mensagem: string }> => {
    try {
      const response = await axios.delete(`${apiUrl}/students/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response ? error.response.data.erro : error.message);
    }
};