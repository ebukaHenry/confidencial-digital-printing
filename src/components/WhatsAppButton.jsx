const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';

export default function WhatsAppButton({ children = 'Chat on WhatsApp', className = '' }) {
  const message = encodeURIComponent(
    'Hello Confidencial Digital World, I would like to enquire about your printing and design services.'
  );

  const href = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    : '#contact';

  return (
    <a
      href={href}
      target={WHATSAPP_NUMBER ? '_blank' : undefined}
      rel={WHATSAPP_NUMBER ? 'noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
  );
}
