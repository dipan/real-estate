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

const CancellationPolicy = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Cancellation Policy
                </h2>
                <div className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  <p>Last updated: September 23, 2024</p>
                  <ol>
                    <li>
                      <p>
                        <strong>Notice Period:</strong>
                        <ul>
                          <li>
                            Specify the required notice period for project
                            cancellation. This could be a fixed number of days
                            or weeks.
                          </li>
                          <li>
                            Clearly state whether the notice period starts from
                            the date of the written cancellation request or the
                            date of the next scheduled work.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Cancellation Fees:</strong> Outline the
                        cancellation fees that will be charged. These may
                        include:
                        <ul>
                          <li>
                            Down payments: The full or partial refund of the
                            down payment may be subject to a cancellation fee.
                          </li>
                          <li>
                            Pre-paid materials: The cost of materials purchased
                            or ordered specifically for the project may be
                            deducted.
                          </li>
                          <li>
                            Work completed: A fee may be charged for the value
                            of work completed up to the cancellation date.
                          </li>
                          <li>
                            Lost profits: In some cases, a fee may be charged to
                            compensate for lost profits due to the cancellation.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Force Majeure:</strong> Define force majeure
                        events that could exempt both parties from liability for
                        cancellation. Examples include natural disasters, acts
                        of war, or government restrictions.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Dispute Resolution:</strong> Specify the method
                        for resolving disputes arising from the cancellation,
                        such as mediation or arbitration.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Refund Process:</strong> Outline the process for
                        refunding any applicable amounts, including the
                        timeframe and methods of payment.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Device</strong> means any device that can access
                        the Service such as a computer, a cellphone or a digital
                        tablet.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Personal Data</strong> is any information that
                        relates to an identified or identifiable individual.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Service</strong> refers to the Website.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Service Provider</strong> means any natural or
                        legal person who processes the data on behalf of the
                        Company. It refers to third-party companies or
                        individuals employed by the Company to facilitate the
                        Service, to provide the Service on behalf of the
                        Company, to perform services related to the Service or
                        to assist the Company in analyzing how the Service is
                        used.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Third-party Social Media Service</strong> refers
                        to any website or any social network website through
                        which a User can log in or create an account to use the
                        Service.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Usage Data</strong> refers to data collected
                        automatically, either generated by the use of the
                        Service or from the Service infrastructure itself (for
                        example, the duration of a page visit).
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>You</strong> means the individual accessing or
                        using the Service, or the company, or other legal entity
                        on behalf of which such individual is accessing or using
                        the Service, as applicable.
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

export default CancellationPolicy;
