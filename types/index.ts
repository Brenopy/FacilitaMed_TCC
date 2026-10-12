export type StatusDose = 'tomada' | 'atrasada' | 'nao_administrada' | 'pendente';

export interface Medicamento {
  id: number;
  nome: string;
  dosagem: string;
  quantidade: number;
  estoque: number;
  frequencia: string;
  ativo: boolean;
}

export interface HorarioMedicamento {
  id: number;
  medicamentoId: number;
  horario: string; // "HH:MM"
  diasSemana: string; // "todos" ou "seg,qua,sex"
}

export interface RegistroDose {
  id: number;
  medicamentoId: number;
  horarioId: number;
  dataHora: string; // ISO 8601
  status: StatusDose;
}