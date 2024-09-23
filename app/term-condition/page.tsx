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

const TermCondition = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Term Condition
                </h2>
                <div className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <p>Last updated: September 23, 2024</p>
                  <ol className="list-decimal">
                    <li>
                      <p>
                        <strong>Scope of Services:</strong> Clearly define the
                        specific services to be provided by the construction
                        company, including the project scope, timeline, and
                        deliverables.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Payment Terms:</strong> Outline the payment
                        schedule, including:
                        <ul className="list-disc pl-6">
                          <li>Down payments</li>
                          <li>Progress payments</li>
                          <li>Final payment</li>
                          <li>Payment terms (e.g., net 30 days)</li>
                          <li>Late payment penalties</li>
                          <li>Lien waivers</li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Project Modifications:</strong> Establish
                        procedures for requesting and approving changes to the
                        project scope, including how such changes will affect
                        the contract price and timeline.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Permits and Licenses:</strong> Specify who is
                        responsible for obtaining and maintaining necessary
                        permits and licenses.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Insurance:</strong> Require the construction
                        company to carry adequate insurance coverage, such as
                        general liability, workers' compensation, and property
                        insurance.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Warranties:</strong> Outline the warranties
                        provided by the construction company for materials,
                        workmanship, and defects.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Governing Law:</strong> Specify the governing
                        law that will apply to the contract.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Entire Agreement:</strong> State that the
                        contract constitutes the entire agreement between the
                        parties and supersedes all prior or contemporaneous
                        communications, representations, or agreements, whether
                        oral or written.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Confidentiality:</strong> Address the
                        confidentiality of proprietary information exchanged
                        between the parties.
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

export default TermCondition;
