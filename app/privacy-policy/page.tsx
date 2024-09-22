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
                  <p>Last updated: May 29, 2024</p>
                  <p>
                    This Privacy Policy describes Our policies and procedures on
                    the collection, use and disclosure of Your information when
                    You use the Service and tells You about Your privacy rights
                    and how the law protects You.
                  </p>
                  <p>
                    We use Your Personal data to provide and improve the
                    Service. By using the Service, You agree to the collection
                    and use of information in accordance with this Privacy
                    Policy. This Privacy Policy has been created with the help
                    of the{" "}
                    <a
                      href="https://www.example.com/privacy-policy-generator/"
                      target="_blank"
                    >
                      Privacy Policy Generator
                    </a>
                    .
                  </p>
                  <h2>Interpretation and Definitions</h2>
                  <h3>Interpretation</h3>
                  <p>
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                  <h3>Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="list-inside list-disc">
                    <li>
                      <p>
                        <strong>Account</strong> means a unique account created
                        for You to access our Service or parts of our Service.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Affiliate</strong> means an entity that
                        controls, is controlled by or is under common control
                        with a party, where "control" means ownership of 50% or
                        more of the shares, equity interest or other securities
                        entitled to vote for election of directors or other
                        managing authority.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Company</strong> (referred to as either "the
                        Company", "We", "Us" or "Our" in this Agreement) refers
                        to exmaple.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Cookies</strong> are small files that are placed
                        on Your computer, mobile device or any other device by a
                        website, containing the details of Your browsing history
                        on that website among its many uses.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Country</strong> refers to: Gujarat, India
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
                        <strong>Website</strong> refers to exmaple,
                        accessible from{" "}
                        <a
                          href="https://www.example.com/"
                          rel="external nofollow noopener"
                          target="_blank"
                        >
                          https://www.example.com/
                        </a>
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
                  </ul>
                  <h2>Collecting and Using Your Personal Data</h2>
                  <h3>Types of Data Collected</h3>
                  <h4>Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <ul>
                    <li>
                      <p>Email address</p>
                    </li>
                    <li>
                      <p>Usage Data</p>
                    </li>
                  </ul>
                  <h4>Usage Data</h4>
                  <p>
                    Usage Data is collected automatically when using the
                    Service.
                  </p>
                  <p>
                    Usage Data may include information such as Your Device's
                    Internet Protocol address (e.g. IP address), browser type,
                    browser version, the pages of our Service that You visit,
                    the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device.
                  </p>
                  <h4>Information from Third-Party Social Media Services</h4>
                  <p>
                    The Company allows You to create an account and log in to
                    use the Service through the following Third-party Social
                    Media Services:
                  </p>
                  <ul>
                    <li>Google</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                  <p>
                    If You decide to register through or otherwise grant us
                    access to a Third-Party Social Media Service, We may collect
                    Personal data that is already associated with Your
                    Third-Party Social Media Service's account, such as Your
                    name, Your email address, Your activities or Your contact
                    list associated with that account.
                  </p>
                  <p>
                    You may also have the option of sharing additional
                    information with the Company through Your Third-Party Social
                    Media Service's account. If You choose to provide such
                    information and Personal Data, during registration or
                    otherwise, You are giving the Company permission to use,
                    share, and store it in a manner consistent with this Privacy
                    Policy.
                  </p>
                  <h4>Tracking Technologies and Cookies</h4>
                  <p>
                    We use Cookies and similar tracking technologies to track
                    the activity on Our Service and store certain information.
                    Tracking technologies used are beacons, tags, and scripts to
                    collect and track information and to improve and analyze Our
                    Service. The technologies We use may include:
                  </p>
                  <ul>
                    <li>
                      <strong>Cookies or Browser Cookies.</strong> A cookie is a
                      small file placed on Your Device. You can instruct Your
                      browser to refuse all Cookies or to indicate when a Cookie
                      is being sent. However, if You do not accept Cookies, You
                      may not be able to use some parts of our Service. Unless
                      you have adjusted Your browser setting so that it will
                      refuse Cookies, our Service may use Cookies.
                    </li>
                    <li>
                      <strong>Web Beacons.</strong> Certain sections of our
                      Service and our emails may contain small electronic files
                      known as web beacons (also referred to as clear gifs,
                      pixel tags, and single-pixel gifs) that permit the
                      Company, for example, to count users who have visited
                      those pages or opened an email and for other related
                      website statistics (for example, recording the popularity
                      of a certain section and verifying system and server
                      integrity).
                    </li>
                  </ul>
                  <p>
                    Cookies can be "Persistent" or "Session" Cookies. Persistent
                    Cookies remain on Your personal computer or mobile device
                    when You go offline, while Session Cookies are deleted as
                    soon as You close Your web browser. You can learn more about
                    cookies on{" "}
                    <a
                      href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                      target="_blank"
                    >
                      TermsFeed website
                    </a>{" "}
                    article.
                  </p>
                  <p>
                    We use both Session and Persistent Cookies for the purposes
                    set out below:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Necessary / Essential Cookies</strong>
                      </p>
                      <p>Type: Session Cookies</p>
                      <p>Administered by: Us</p>
                      <p>
                        Purpose: These Cookies are essential to provide You with
                        services available through the Website and to enable You
                        to use some of its features. They help to authenticate
                        users and prevent fraudulent use of user accounts.
                        Without these Cookies, the services that You have asked
                        for cannot be provided, and We only use these Cookies to
                        provide You with those services.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>
                          Cookies Policy / Notice Acceptance Cookies
                        </strong>
                      </p>
                      <p>Type: Persistent Cookies</p>
                      <p>Administered by: Us</p>
                      <p>
                        Purpose: These Cookies identify if users have accepted
                        the use of cookies on the Website.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Functionality Cookies</strong>
                      </p>
                      <p>Type: Persistent Cookies</p>
                      <p>Administered by: Us</p>
                      <p>
                        Purpose: These Cookies allow us to remember choices You
                        make when You use the Website, such as remembering your
                        login details or language preference. The purpose of
                        these Cookies is to provide You with a more personal
                        experience and to avoid You having to re-enter your
                        preferences every time You use the Website.
                      </p>
                    </li>
                  </ul>
                  <p>
                    For more information about the cookies we use and your
                    choices regarding cookies, please visit our Cookies Policy
                    or the Cookies section of our Privacy Policy.
                  </p>
                  <h3>Use of Your Personal Data</h3>
                  <p>
                    The Company may use Personal Data for the following
                    purposes:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>To provide and maintain our Service</strong>,
                        including to monitor the usage of our Service.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>To manage Your Account:</strong> to manage Your
                        registration as a user of the Service. The Personal Data
                        You provide can give You access to different
                        functionalities of the Service that are available to You
                        as a registered user.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>For the performance of a contract:</strong> the
                        development, compliance and undertaking of the purchase
                        contract for the products, items or services You have
                        purchased or of any other contract with Us through the
                        Service.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>To contact You:</strong> To contact You by
                        email, telephone calls, SMS, or other equivalent forms
                        of electronic communication, such as a mobile
                        application's push notifications regarding updates or
                        informative communications related to the
                        functionalities, products or contracted services,
                        including the security updates, when necessary or
                        reasonable for their implementation.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>To provide You</strong> with news, special
                        offers and general information about other goods,
                        services and events which we offer that are similar to
                        those that you have already purchased or enquired about
                        unless You have opted not to receive such information.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>To manage Your requests:</strong> To attend and
                        manage Your requests to Us.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>For business transfers:</strong> We may use Your
                        information to evaluate or conduct a merger,
                        divestiture, restructuring, reorganization, dissolution,
                        or other sale or transfer of some or all of Our assets,
                        whether as a going concern or as part of bankruptcy,
                        liquidation, or similar proceeding, in which Personal
                        Data held by Us about our Service users is among the
                        assets transferred.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>For other purposes</strong>: We may use Your
                        information for other purposes, such as data analysis,
                        identifying usage trends, determining the effectiveness
                        of our promotional campaigns and to evaluate and improve
                        our Service, products, services, marketing and your
                        experience.
                      </p>
                    </li>
                  </ul>
                  <p>
                    We may share Your personal information in the following
                    situations:
                  </p>
                  <ul>
                    <li>
                      <strong>With Service Providers:</strong> We may share Your
                      personal information with Service Providers to monitor and
                      analyze the use of our Service, to contact You.
                    </li>
                    <li>
                      <strong>For business transfers:</strong> We may share or
                      transfer Your personal information in connection with, or
                      during negotiations of, any merger, sale of Company
                      assets, financing, or acquisition of all or a portion of
                      Our business to another company.
                    </li>
                    <li>
                      <strong>With Affiliates:</strong> We may share Your
                      information with Our affiliates, in which case we will
                      require those affiliates to honor this Privacy Policy.
                      Affiliates include Our parent company and any other
                      subsidiaries, joint venture partners or other companies
                      that We control or that are under common control with Us.
                    </li>
                    <li>
                      <strong>With business partners:</strong> We may share Your
                      information with Our business partners to offer You
                      certain products, services or promotions.
                    </li>
                    <li>
                      <strong>With other users:</strong> when You share personal
                      information or otherwise interact in the public areas with
                      other users, such information may be viewed by all users
                      and may be publicly distributed outside. If You interact
                      with other users or register through a Third-Party Social
                      Media Service, Your contacts on the Third-Party Social
                      Media Service may see Your name, profile, pictures and
                      description of Your activity. Similarly, other users will
                      be able to view descriptions of Your activity, communicate
                      with You and view Your profile.
                    </li>
                    <li>
                      <strong>With Your consent</strong>: We may disclose Your
                      personal information for any other purpose with Your
                      consent.
                    </li>
                  </ul>
                  <h3>Retention of Your Personal Data</h3>
                  <p>
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to the
                    extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and enforce our
                    legal agreements and policies.
                  </p>
                  <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <p>
                    The Company will also retain Usage Data for internal
                    analysis purposes. Usage Data is generally retained for a
                    shorter period of time, except when this data is used to
                    strengthen the security or to improve the functionality of
                    Our Service, or We are legally obligated to retain this data
                    for longer time periods.
                  </p>
                  <h3>Transfer of Your Personal Data</h3>
                  <p>
                    Your information, including Personal Data, is processed at
                    the Company's operating offices and in any other places
                    where the parties involved in the processing are located. It
                    means that this information may be transferred to — and
                    maintained on — computers located outside of Your state,
                    province, country or other governmental jurisdiction where
                    the data protection laws may differ than those from Your
                    jurisdiction.
                  </p>
                  <p>
                    Your consent to this Privacy Policy followed by Your
                    submission of such information represents Your agreement to
                    that transfer.
                  </p>
                  <p>
                    The Company will take all steps reasonably necessary to
                    ensure that Your data is treated securely and in accordance
                    with this Privacy Policy and no transfer of Your Personal
                    Data will take place to an organization or a country unless
                    there are adequate controls in place including the security
                    of Your data and other personal information.
                  </p>
                  <h3>Delete Your Personal Data</h3>
                  <p>
                    You have the right to delete or request that We assist in
                    deleting the Personal Data that We have collected about You.
                  </p>
                  <p>
                    Our Service may give You the ability to delete certain
                    information about You from within the Service.
                  </p>
                  <p>
                    You may update, amend, or delete Your information at any
                    time by signing in to Your Account, if you have one, and
                    visiting the account settings section that allows you to
                    manage Your personal information. You may also contact Us to
                    request access to, correct, or delete any personal
                    information that You have provided to Us.
                  </p>
                  <p>
                    Please note, however, that We may need to retain certain
                    information when we have a legal obligation or lawful basis
                    to do so.
                  </p>
                  <h3>Disclosure of Your Personal Data</h3>
                  <h4>Business Transactions</h4>
                  <p>
                    If the Company is involved in a merger, acquisition or asset
                    sale, Your Personal Data may be transferred. We will provide
                    notice before Your Personal Data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                  <h4>Law enforcement</h4>
                  <p>
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or
                    in response to valid requests by public authorities (e.g. a
                    court or a government agency).
                  </p>
                  <h4>Other legal requirements</h4>
                  <p>
                    The Company may disclose Your Personal Data in the good
                    faith belief that such action is necessary to:
                  </p>
                  <ul>
                    <li>Comply with a legal obligation</li>
                    <li>
                      Protect and defend the rights or property of the Company
                    </li>
                    <li>
                      Prevent or investigate possible wrongdoing in connection
                      with the Service
                    </li>
                    <li>
                      Protect the personal safety of Users of the Service or the
                      public
                    </li>
                    <li>Protect against legal liability</li>
                  </ul>
                  <h3>Security of Your Personal Data</h3>
                  <p>
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
                  </p>
                  <h2>Children's Privacy</h2>
                  <p>
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                  </p>
                  <p>
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent's consent
                    before We collect and use that information.
                  </p>
                  <h2>Links to Other Websites</h2>
                  <p>
                    Our Service may contain links to other websites that are not
                    operated by Us. If You click on a third party link, You will
                    be directed to that third party's site. We strongly advise
                    You to review the Privacy Policy of every site You visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </p>
                  <h2>Changes to this Privacy Policy</h2>
                  <p>
                    We may update Our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                  </p>
                  <p>
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the "Last updated" date at the top of this Privacy
                    Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                  <h2>Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, You can
                    contact us:
                  </p>
                  <ul>
                    <li>By email: info@techinfoguider.com</li>
                  </ul>
                </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-primary dark:text-white">
                      malesuada
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
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
