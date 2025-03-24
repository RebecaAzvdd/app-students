import React, { useEffect, useState } from "react";
import { listUsers, deleteUser, User, updateUser } from "../../services/StudentsApiService";
import Button from "../Button/Button";
import FormModal from "../Modals/FormModal";

const Table: React.FC = () => {
  const [students, setStudents] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await listUsers();
      setStudents(data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (error) {
      console.error("Erro ao deletar aluno:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Alunos Cadastrados</h2>
        <Button label="Criar Aluno" color="green" size="md" onClick={() => setIsModalOpen(true)} />
      </div>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={fetchStudents} />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Nome</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Curso</th>
              <th className="border border-gray-300 px-4 py-2">Período</th>
              <th className="border border-gray-300 px-4 py-2">Turma</th>
              <th className="border border-gray-300 px-4 py-2">Turno</th>
              <th className="border border-gray-300 px-4 py-2">Telefone</th>
              <th className="border border-gray-300 px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{student.nome}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.curso}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.periodo}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.turma}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.turno}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.telefone}</td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                    <Button label="Editar" color="blue" size="sm" onClick={() => alert("em progresso")} />
                    <Button label="Deletar" color="red" size="sm" onClick={() => handleDelete(student._id ?? "")} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center p-4 text-gray-500">Nenhum aluno cadastrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
