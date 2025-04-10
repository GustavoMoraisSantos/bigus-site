"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function PendingPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
      <Clock className="w-16 h-16 text-yellow-500 mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Pagamento em análise
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Seu pagamento está sendo processado. Isso pode levar alguns minutos.
        Você será notificado quando a transação for concluída.
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
