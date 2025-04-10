"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Pagamento aprovado com sucesso!
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Seu pedido foi confirmado e será processado em breve. Agradecemos pela
        sua compra!
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
