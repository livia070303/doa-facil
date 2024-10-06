// src/components/FAQSection.jsx
import React from 'react';
import FAQItem from './FAQItem.jsx';

const FAQSection = () => {
  const faqData = [
    {
      question: 'Como posso criar uma conta?',
      answer: 'Para criar uma conta, clique em Registrar no canto superior direito e preencha o formulário.',
    },

    {
      question: 'Esqueci minha senha. O que devo fazer?',
      answer: 'Clique em Esqueceu a senha na página de login e siga as instruções para redefini-la.',
    },

    {
        question: 'Como posso cadastrar um produto para doação?',
    answer: 'Você pode cadastrar um produto acessando a aba "Doar" no menu principal, preenchendo as informações do item e enviando imagens. Lembre-se de incluir uma descrição detalhada e escolher a categoria adequada para facilitar a busca por quem precisa.',
    },

    {
        question: 'Quais tipos de produtos posso doar?',
        answer: 'Você pode doar uma variedade de itens, incluindo roupas, alimentos, móveis, produtos de higiene, eletrodomésticos e outros itens de utilidade pessoal. Certifique-se de que os produtos estejam em bom estado para uso.',
    },

    {
        question: 'Como posso solicitar um item que preciso?',
        answer: 'Para solicitar um item, acesse a aba "Preciso de Doação" e descreva o produto que você está procurando. O sistema sugerirá itens próximos que estejam disponíveis para doação e você poderá entrar em contato com o doador.',
    },

    {
        question: 'Como faço para entrar em contato com um doador?',
        answer: 'Após encontrar um item que lhe interesse, você pode enviar uma mensagem diretamente ao doador por meio da função de chat disponível no aplicativo. Assim, poderão combinar os detalhes da doação.',
    },

    {
        question: 'Posso doar ou receber itens em qualquer localidade?',
        answer: 'Sim, o aplicativo é projetado para conectar doadores e recebedores em várias regiões. Utilize o filtro de localização para encontrar ou oferecer doações perto de você.',
    },

    {
        question: 'Há algum custo para utilizar o aplicativo?',
        answer: 'Não, o uso do aplicativo é completamente gratuito. Tanto para cadastrar itens para doação quanto para solicitar produtos, não há cobrança envolvida.',
    },

    {
        question: 'Como faço para agendar a retirada de uma doação?',
        answer: 'Após entrar em contato com o doador ou recebedor, vocês podem combinar os detalhes da retirada diretamente pelo chat. O aplicativo facilita essa comunicação, mas o transporte deve ser organizado entre as partes.',
    },

    {
        question: 'É possível cancelar uma doação após tê-la cadastrado?',
        answer: 'Sim, se você já cadastrou um item para doação e deseja removê-lo, basta acessar o seu perfil de doador, encontrar o item na lista de doações e escolher a opção "Cancelar Doação".',
    },

    {
        question: 'Como garantir que as doações são seguras e confiáveis?',
        answer: 'Incentivamos que todos os usuários avaliem e deixem feedback sobre as doações recebidas ou feitas. Além disso, seguimos um rigoroso padrão de moderação de conteúdo para garantir que as doações e solicitações atendam às diretrizes do aplicativo.',
    },

    {
        question: 'Como posso editar as informações de um item que já cadastrei para doação?',
        answer: 'Para editar um item, acesse o seu perfil, localize o item na lista de doações cadastradas e clique na opção "Editar". Você poderá modificar a descrição, imagens, e até alterar a categoria do item.',
    },

    {
        question: 'Como o aplicativo define quem recebe um item de doação?',
        answer: 'O aplicativo permite que os doadores escolham diretamente para quem desejam doar, com base nos pedidos recebidos ou na localização dos usuários interessados.',
    },

    {
        question: 'Posso doar diretamente para ONGs cadastradas no aplicativo?',
        answer: 'Sim, você pode escolher doar diretamente para ONGs parceiras cadastradas na plataforma. Elas frequentemente organizam campanhas específicas para produtos de necessidade urgente.',
    },

    {
        question: 'O que acontece se eu não conseguir retirar o item no horário combinado?',
        answer: 'Caso ocorra um imprevisto e você não consiga retirar o item na data ou horário combinados, é importante informar o doador o mais rápido possível pelo chat do aplicativo para reagendar a retirada.',
    },

    {
        question: 'Há um limite para o número de itens que posso doar ou solicitar?',
        answer: 'Não, o aplicativo não impõe um limite no número de itens que você pode cadastrar para doar ou solicitar. No entanto, recomendamos que as doações sejam feitas de maneira responsável para beneficiar o maior número possível de pessoas.',
    },

    {
        question: 'Como posso acompanhar o status da minha doação ou solicitação?',
        answer: 'No seu perfil, você pode visualizar o status de cada item que cadastrou, seja para doação ou solicitação. Ali, é possível ver se a doação foi recebida, se alguém está interessado ou se a solicitação foi atendida.',
    },

    {
        question: 'Posso excluir meu perfil do aplicativo?',
        answer: 'Sim, se você desejar excluir seu perfil permanentemente, acesse as configurações da conta e selecione a opção "Excluir Perfil". Lembre-se de que ao fazer isso, todas as suas doações e solicitações também serão removidas.',
    },

    {
        question: 'O que devo fazer se eu encontrar um comportamento inadequado ou suspeito no aplicativo?',
        answer: 'Se você encontrar qualquer comportamento inadequado, como doações fraudulentas ou usuários desrespeitosos, entre em contato com a nossa equipe de suporte por meio do e-mail doafacil@gmail.com.',
    },

    {
        question: 'Como o aplicativo lida com a privacidade dos meus dados?',
        answer: 'A privacidade dos seus dados é uma prioridade. Utilizamos sistemas de criptografia e garantimos que suas informações pessoais, como e-mail e número de telefone, não sejam compartilhadas com terceiros sem o seu consentimento. Consulte nossa política de privacidade para mais detalhes.',
    },


    // Adicione mais itens conforme necessário
  ];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQSection;
