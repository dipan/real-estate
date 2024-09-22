import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have a question or need more information? Feel free to reach out to us. Our team is ready to assist you with your construction project. You can contact us by phone, email, or using the form below."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
