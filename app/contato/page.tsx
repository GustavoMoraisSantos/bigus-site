"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-10 rounded-3xl text-center shadow-md mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Entre em Contato
        </h1>
        <p className="text-lg text-gray-600">
          Fale com a gente para dúvidas, pedidos especiais ou parcerias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="space-y-6 border border-gray-300 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Informações
          </h2>

          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" />
            <p className="text-lg">+55 (41) 9 9630-1244</p>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" />
            <p className="text-lg">contato@loja.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-500" />
            <p className="text-lg">Rua Exemplo, 123 - Barbosa Ferraz, PR</p>
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-pink-600 hover:text-pink-800"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Envie-nos uma mensagem
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <textarea
              rows={6}
              placeholder="Digite sua mensagem"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mapa com localização */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Nossa Localização
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.107101580163!2d-49.9115686842683!3d-23.742567759069358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e5422a02c8b61b%3A0x2d6b9b6c01a55d34!2sBarbosa%20Ferraz%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1630245691882!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Localização de Barbosa Ferraz"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
