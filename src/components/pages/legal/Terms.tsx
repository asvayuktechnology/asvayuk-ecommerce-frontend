import Link from "next/link";
import React from "react";

const TermsPage = () => {
  return (
    <>
      <div className="bannerbg flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom">
        <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
          <div className="w-full flex justify-center flex-col relative">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black">
              Terms & Conditions
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <h1 className="text-xl mb-4">
            <strong>Welcome to Asvayuk Ecommerce!</strong>
          </h1>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Asvayuk Ecommerce&#39;s Website, located at
            <Link href="https://asvayuktech.com/" target="_blank" className="text-[#00bc7d]">
              {" "}
              https://asvayuktech.com/
            </Link>
            . By accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Asvayuk Ecommerce if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            &#34Client&#34, &#34You&#34 and &#34Your&#34 refers to you, the person logging on to
            this website and compliant with the Company’s terms. &#34The Company&#34,
            &#34;Ourselves&#34;, &#34;We&#34;, &#34;Our&#34; and &#34;Us&#34;, refers to our Company. &#34;Party&#34;,
            &#34;Parties&#34;, or &#34;Us&#34;, refers to both the Client and ourselves. All
            terms refer to the offer, acceptance, and consideration of payment
            necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the purpose of meeting the
            Client’s needs in accordance with the prevailing law of the
            Netherlands.
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>Cookies</strong>
          </h1>
          <p>
            We employ the use of cookies. By accessing Asvayuk Ecommerce, you
            agreed to use cookies in agreement with the Asvayuk Ecommerce
            Privacy Policy. Most interactive websites use cookies to enable the
            functionality of certain areas and improve user experience. Some
            affiliate/advertising partners may also use cookies.
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>License</strong>
          </h1>
          <p>
            Unless otherwise stated, Asvayuk Ecommerce and/or its licensors own
            the intellectual property rights for all material on Asvayuk
            Ecommerce. All rights are reserved. You may access content from
            Asvayuk Ecommerce for your own personal use subject to restrictions
            set in these terms.
          </p>
          <p>
            <strong>You must not:</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              1. Identifiers (e.g. name, mailing address, email, phone, card
              numbers)
            </li>
            <li>2. Protected classifications (e.g. gender, age)</li>
            <li>3. Commercial data (e.g. purchase history)</li>
            <li>4. Network activity (e.g. browsing behavior)</li>
            <li>5. Geo-location data</li>
            <li>6. Audio, visual or electronic information</li>
            <li>7. Inferences drawn (e.g. preferences)</li>
          </ul>
          <p>
            Parts of this website allow users to post opinions and comments.
            Asvayuk Ecommerce does not filter, edit, or review comments prior to
            posting. Comments do not reflect the views of Asvayuk Ecommerce, and
            we shall not be liable for any damages resulting from posted
            comments.
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>Content Liability</strong>
          </h1>
          <p>
            We are not responsible for content that appears on your website. You
            agree to defend us against any claims arising from your website. No
            links should appear on any website that may be interpreted as
            libelous, obscene, criminal, or in violation of any third-party
            rights.
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>Your Privacy</strong>
          </h1>
          <p>
            Please read our{" "}
            <Link href="/privacy-policy" className="text-[#00bc7d] underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>Reservation of Rights</strong>
          </h1>
          <p>
            We reserve the right to request removal of all or specific links to
            our website. You agree to remove links upon request. We may amend
            these terms and our linking policy at any time. By continuing to
            link to our site, you agree to these terms.
          </p>

          <h1 className="text-xl mt-10 mb-4">
            <strong>Disclaimer</strong>
          </h1>
          <p>
            To the maximum extent allowed by law, we exclude all warranties
            related to our website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>1. Limit or exclude liability for death or personal injury</li>
            <li>
              2. Limit or exclude liability for fraud or misrepresentation
            </li>
            <li>3. Limit any liability not allowed under law</li>
            <li>4. Exclude any liability that cannot be excluded under law</li>
          </ul>
          <p>
            The limitations above apply to all liabilities including those
            arising in contract, tort, or statutory duty. As long as the website
            and its services are provided free of charge, we will not be liable
            for any loss or damage.
          </p>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default TermsPage;
