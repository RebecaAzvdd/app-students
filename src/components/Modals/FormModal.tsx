import React, { useEffect, useState } from "react";
import { createUser, User, updateUser } from "../../services/StudentsApiService";
import Modal from "../Modals/Modal";
import Button from "../Button/Button";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user?: User;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSuccess, user }) => {
    const [formData, setFormData] = useState<User>({
      nome: "",
      email: "",
      curso: "",
      periodo: "",
      turma: "",
      turno: "",
      endereco: "",
      telefone: "",
    });

    useEffect(() => {
      if (user) {
        setFormData(user);
      } else {
        setFormData({
          nome: "",
          email: "",
          curso: "",
          periodo: "",
          turma: "",
          turno: "",
          endereco: "",
          telefone: "",
        });
      }
    }, [user]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        if (user?._id) {
          await updateUser(user._id, formData); 
        } else {
          await createUser(formData); 
        }
        onSuccess(); 
        onClose(); 
      } catch (error) {
        console.error("Erro ao salvar usuário:", error);
      }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <h2 className="text-xl font-bold mb-4">Cadastrar Aluno</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required className="border p-2 w-full" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="curso" placeholder="Curso" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="periodo" placeholder="Período" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="turma" placeholder="Turma" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="turno" placeholder="Turno" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="telefone" placeholder="Telefone" onChange={handleChange} required className="border p-2 w-full" />
            
            <div className="flex justify-end gap-2">
              <Button label="Cancelar" color="red" size="md" onClick={onClose} />
              <Button label="Salvar" color="green" size="md" type="submit" />
            </div>
          </form>
        </Modal>
      );
    };

export default FormModal;