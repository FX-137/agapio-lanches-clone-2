
import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#EED117] rounded-t-2xl">
          <h2 className="text-2xl font-bold text-[#E7252A]">
            {type === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
          </h2>
          <button 
            onClick={onClose}
            className="text-[#E7252A] hover:bg-[#C01E22] hover:text-white rounded-full p-2 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-gray-700 leading-relaxed whitespace-pre-line">
          {type === 'privacy' ? (
`1. Coleta de Dados
A Agapio Lanches respeita a sua privacidade. Não coletamos dados pessoais através deste site estático, exceto aqueles que você voluntariamente compartilha ao iniciar uma conversa no WhatsApp.

2. Uso das Informações
As informações fornecidas no chat (endereço, telefone, nome) são utilizadas exclusivamente para o processamento e entrega do seu pedido.

3. Cookies
Este site pode utilizar cookies técnicos essenciais para o funcionamento básico da navegação. Não utilizamos cookies de rastreamento publicitário de terceiros.

4. Contato
Para questões sobre privacidade, entre em contato através do nosso número oficial.`
          ) : (
`1. Aceitação dos Termos
Ao acessar e usar o cardápio digital da Agapio Lanches, você aceita e concorda em estar vinculado aos termos e provisões deste acordo.

2. Pedidos
Os pedidos realizados via WhatsApp estão sujeitos à confirmação de disponibilidade e tempo de entrega pelo atendente.

3. Preços
Os preços estão sujeitos a alteração sem aviso prévio. O preço final válido é o confirmado no momento do fechamento do pedido pelo WhatsApp.

4. Entregas
A área de entrega e taxas devem ser consultadas diretamente com o estabelecimento no momento do pedido.`
          )}
        </div>
        
        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#E7252A] hover:bg-[#C01E22] text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
