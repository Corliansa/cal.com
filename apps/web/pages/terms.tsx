import type { NextPage } from "next";
import Link from "next/link";

import { APP_NAME, LOGO, SUPPORT_MAIL_ADDRESS } from "@calcom/lib/constants";

export const Terms: NextPage = () => {
  return (
    <div className="isolate min-h-screen bg-white text-gray-700">
      <div className="px-6 pt-12 lg:px-8">
        <div>
          <nav className="flex h-9 justify-center" aria-label="Global">
            <div className="flex justify-center" aria-label="Global">
              <Link href="/" className="mb-auto">
                <span className="sr-only">{APP_NAME}</span>
                <img className="h-4" src={LOGO} alt={`${APP_NAME} Logo`} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="mb-2 text-4xl font-bold">Terms & Conditions</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p>By using {APP_NAME}, you agree to be bound by the following terms and conditions:</p>
              <p>
                <strong>Use of the Service:</strong> {APP_NAME} provides a cover letter generator tool to help
                users create professional and effective cover letters. You may use the Service only for lawful
                purposes and in accordance with these Terms.
              </p>
              <p>
                <strong>User Content:</strong> You retain all rights to any content that you create using the
                Service. By using the Service, you grant {APP_NAME} a non-exclusive, royalty-free,
                transferable, sub-licensable, worldwide license to use, store, display, reproduce, modify, and
                distribute your content for the purpose of providing the Service.
              </p>
              <p>
                <strong>Intellectual Property:</strong> All content and materials on {APP_NAME}, including
                text, graphics, logos, and images, are the property of {APP_NAME} and are protected by
                copyright law. You may not use or reproduce any content from our website without our express
                written permission.
              </p>
              <p>
                <strong>Disclaimer:</strong> {APP_NAME} strives to provide accurate and up-to-date
                information, but we cannot guarantee the accuracy or completeness of the information on our
                website. We do not accept liability for any loss or damage that may arise from using our
                website or the tools and services we offer, except for liability that cannot be excluded or
                limited by German law.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> In accordance with German law, {APP_NAME} or its
                affiliates, partners, or suppliers shall be liable for damages only in cases of intent or
                gross negligence, except for liability that cannot be excluded or limited by German law. The
                liability for slight negligence shall be excluded.
              </p>
              <p>
                <strong>Indemnification:</strong> You agree to indemnify and hold {APP_NAME} and its
                affiliates, partners, and suppliers harmless from any claim or demand, including reasonable
                attorneys&apos; fees, made by any third party due to or arising out of your use of the
                Service, your violation of these Terms, or your violation of any rights of another.
              </p>
              <p>
                <strong>Modification of Terms:</strong> {APP_NAME} may modify these Terms at any time, and
                your continued use of the Service after such modifications shall be deemed acceptance of such
                modifications.
              </p>
              <p>
                <strong>Termination:</strong> {APP_NAME} may terminate your access to the Service at any time
                without notice, in our sole discretion.
              </p>
              <p>
                <strong>Governing Law and Jurisdiction:</strong> These Terms shall be governed by and
                construed in accordance with the laws of Germany. Any legal action arising out of or in
                connection with these Terms shall be brought exclusively in the courts of Germany.
              </p>
              <p>
                If you have any questions or concerns about our Terms and Conditions, please don&apos;t
                hesitate to contact us at {SUPPORT_MAIL_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
