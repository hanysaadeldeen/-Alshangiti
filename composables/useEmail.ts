import emailjs from "@emailjs/browser";

export const useEmail = () => {
  const sendEmail = async (formData: {
    FullName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await emailjs.send(
        "service_dd4io2n",
        "template_zd9oprr",
        {
          fullName: formData.FullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "gtQMwdnFpnpuqd312"
      );
      return response;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  return { sendEmail };
};
