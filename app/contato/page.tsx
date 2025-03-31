import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Entre em Contato Conosco</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Informações de Contato</h2>
          
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-gray-600">📞</span>
            <p className="text-lg">+55 11 99999-9999</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-gray-600">📧</span>
            <p className="text-lg">contato@loja.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-gray-600">📍</span>
            <p className="text-lg">Rua Exemplo, 123 - Barbosa Ferraz, PR</p>
          </div>

          {/* Redes sociais */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <span className="text-3xl">🔵</span> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <span className="text-3xl">📸</span> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <span className="text-3xl">🐦</span> Twitter
            </a>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Envie-nos uma mensagem</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nome</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite sua mensagem"
                required
              />
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mapa com a localização de Barbosa Ferraz, PR */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nos Encontre</h2>
        <div className="relative w-full h-72">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.107101580163!2d-49.9115686842683!3d-23.742567759069358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e5422a02c8b61b%3A0x2d6b9b6c01a55d34!2sBarbosa%20Ferraz%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1630245691882!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Localização de Barbosa Ferraz"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
