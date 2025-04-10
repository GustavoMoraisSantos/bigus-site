"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function FailurePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
      <XCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        O pagamento falhou ou foi recusado
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Infelizmente não conseguimos concluir seu pagamento. Pode ter ocorrido
        uma falha na transação ou ela foi recusada pelo seu banco.
        <br />
        Tente novamente ou entre em contato com o suporte se o problema
        persistir.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Voltar para a loja
      </Link>
    </div>
  );
}
