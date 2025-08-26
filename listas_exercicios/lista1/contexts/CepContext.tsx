import React, { createContext, useState, ReactNode } from "react";
import { CepData } from "../types/Cep";

interface CepContextType {
  resultado: CepData | null;
  historico: CepData[];
  consultarCep: (cep: string) => Promise<void>;
}

export const CepContext = createContext<CepContextType>({} as CepContextType);

import { buscarCep } from "../services/viacep";

export function CepProvider({ children }: { children: ReactNode }) {
  const [resultado, setResultado] = useState<CepData | null>(null);
  const [historico, setHistorico] = useState<CepData[]>([]);

  async function consultarCep(cep: string) {
    const data = await buscarCep(cep);
    setResultado(data);
    if (data) setHistorico((prev) => [...prev, data]);
  }

  return (
    <CepContext.Provider value={{ resultado, historico, consultarCep }}>
      {children}
    </CepContext.Provider>
  );
}