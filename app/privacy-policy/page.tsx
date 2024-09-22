import { Metadata } from "next";
import Image from "next/image";
import TagButton from "../../components/Blog/TagButton";
import SharePost from "../../components/Blog/SharePost";

export const metadata: Metadata = {
  title: "Blog Details - Everything You Need to Know about Blog",
  description:
    "Explore the comprehensive guide to blog details page. Find all the information you need about blogs and their important details. Learn more here!",
  keywords: "[blog details, blogging details in hindi, discuss blog in detail]",
  robots: "all",
  // other metadata
};

const PrivacyPolicy = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
                </h2>
                <div className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <p>Last updated: September 23, 2024</p>
                  <p>
                    At MAA KALI CONSTRUCTION, we are committed to safeguarding
                    your privacy. This Privacy Policy outlines how we collect,
                    use, and protect your information when you interact with our
                    website and services.
                  </p>
                  <ol className="list-disc">
                    <li>
                      <p>
                        <strong>Information We Collect:</strong> We may collect
                        personal information, such as:
                        <ul>
                          <li>
                            <strong>Contact Information:</strong> Name, email
                            address, phone number, and physical address when you
                            inquire about our services.
                          </li>
                          <li>
                            <strong>Payment Information:</strong>
                            Financial data necessary for processing payments for
                            services.
                          </li>
                          <li>
                            <strong>Browsing Data:</strong> Cookies and other
                            tracking technologies to improve your browsing
                            experience.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>How We Use Your Information:</strong> We use the
                        collected information for purposes such as:
                        <ul>
                          <li>
                            Responding to your inquiries and providing requested
                            services.
                          </li>
                          <li>
                            Processing transactions and managing payments.
                          </li>
                          <li>
                            Improving our website and services based on user
                            behaviour and feedback.
                          </li>
                          <li>
                            Sending updates, newsletters, and promotional
                            materials, if opted-in.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Information Sharing:</strong> We do not sell,
                        rent, or trade your personal information. We may share
                        data with:
                        <ul>
                          <li>
                            <strong>Service Providers:</strong> Third-party
                            vendors who assist us in providing our services
                            (e.g., payment processors).
                          </li>
                          <li>
                            <strong>Legal Obligations:</strong> In cases where
                            disclosure is required by law, regulation, or court
                            order.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Data Security:</strong> We implement reasonable
                        security measures to protect your personal information
                        from unauthorized access, loss, or disclosure. However,
                        no method of transmission over the internet is entirely
                        secure, and we cannot guarantee absolute security.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Cookies and Tracking Technologies:</strong> Our
                        website uses cookies to collect browsing data and
                        improve user experience. You can manage cookie settings
                        through your browser.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Your Choices:</strong> You have the right to:
                        <ul>
                          <li>Opt out of marketing communications.</li>
                          <li>
                            Request access, correction, or deletion of your
                            personal data.
                          </li>
                          <li>Control cookie settings.</li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Third-Party Links:</strong> Our website may
                        contain links to third-party sites. We are not
                        responsible for the privacy practices or content of
                        those websites.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Children's Privacy:</strong> Our services are
                        not directed to individuals under 18, and we do not
                        knowingly collect personal information from minors.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Changes to this Policy:</strong> We may update
                        this policy from time to time. Any changes will be
                        posted on this page, and the updated policy will be
                        effective immediately.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Website</strong> refers to exmaple, accessible
                        from{" "}
                        <a
                          href="https://maakaliconstruction.vercel.app/"
                          rel="external nofollow noopener"
                        >
                          https://maakaliconstruction.vercel.app/
                        </a>
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
