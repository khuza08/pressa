/**
 * Generates a WhatsApp subscription message with plan details
 * @param planName The name of the selected plan
 * @param planPrice The price of the selected plan
 * @param planFeatures The features included in the selected plan
 * @returns URL-encoded WhatsApp message string
 */
export const generateWhatsAppSubscriptionMessage = (
  planName: string,
  planPrice: string,
  planFeatures: string[]
): string => {
  const message = `Halo! Saya tertarik untuk berlangganan plan ${planName} seharga ${planPrice}.

Plan ini mencakup fitur-fitur berikut:
${planFeatures.map(feature => `• ${feature}`).join('\n')}

Mohon bantuannya untuk proses berlangganan.`;

  return encodeURIComponent(message);
};

/**
 * Generates a WhatsApp URL for subscription
 * @param phoneNumber The WhatsApp number to send the message to (without country code)
 * @param planName The name of the selected plan
 * @param planPrice The price of the selected plan
 * @param planFeatures The features included in the selected plan
 * @returns Complete WhatsApp URL
 */
export const getWhatsAppSubscriptionUrl = (
  phoneNumber: string,
  planName: string,
  planPrice: string,
  planFeatures: string[]
): string => {
  const message = generateWhatsAppSubscriptionMessage(planName, planPrice, planFeatures);
  // Using Indonesian country code (62) - this can be configured as needed
  const fullPhoneNumber = phoneNumber.startsWith('62') ? phoneNumber : `62${phoneNumber}`;
  return `https://wa.me/${fullPhoneNumber}?text=${message}`;
};