import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  // Replace with your actual WhatsApp number (include country code without +)
  const whatsappNumber = '917385416026'; // Example: 91XXXXXXXXXX
  
  const handleChatClick = () => {
    const message = 'Hi! I would like to know more about your services.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 
        bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 
        shadow-2xl hover:shadow-green-500/50 transition-all duration-300 
        hover:scale-110 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </button>
  );
};

export default WhatsAppChat;

