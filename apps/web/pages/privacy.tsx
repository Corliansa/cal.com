import type { NextPage } from "next";
import Link from "next/link";

import { APP_NAME, LOGO, SUPPORT_MAIL_ADDRESS } from "@calcom/lib/constants";

export const Privacy: NextPage = () => {
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
            <h1 className="mb-2 text-4xl font-bold">Privacy & Policy</h1>
            <div className="mt-4 flex flex-col gap-4">
              <p>
                {APP_NAME} is committed to protecting the privacy of our users in compliance with the General
                Data Protection Regulation (GDPR). This Privacy Policy describes how we collect, use, and
                share your personal information.
              </p>

              <p>
                <strong>Information We Collect:</strong> We collect personal information only with your
                explicit consent and when it is necessary to provide our services, such as your name, email
                address, and content that you create using the Service.
              </p>
              <p>
                <strong>Use of Information:</strong> We use your personal information to provide our services,
                to communicate with you, and to improve our website and services. You have the right to
                access, correct, or delete your personal information at any time, and we will make reasonable
                efforts to accommodate your requests.
              </p>
              <p>
                <strong>Cookies:</strong> {APP_NAME} uses cookies to enhance your experience on our website.
                Cookies are small files that are stored on your device and help us to remember your
                preferences and improve our website. You can choose to disable cookies in your browser
                settings.
              </p>
              <p>
                <strong>Security:</strong> {APP_NAME} takes reasonable measures to protect your personal
                information from unauthorized access, use, or disclosure. We use encryption, access controls,
                and other security measures to safeguard your data. However, we cannot guarantee the security
                of your personal information.
              </p>
              <p>
                <strong>Data Retention:</strong> We retain your personal information only for as long as
                necessary to provide our services or as required by law. You have the right to request that we
                delete your personal information, and we will make reasonable efforts to accommodate your
                request.
              </p>
              <p>
                <strong>Children&apos;s Privacy:</strong> {APP_NAME} is not intended for use by children under
                the age of 16. We do not knowingly collect personal information from children under the age of
                16.
              </p>
              <p>
                <strong>Third-Party Services:</strong> {APP_NAME} may use third-party services, such as
                analytics tools, to help us improve our website and services. These third-party services may
                collect and use your personal information in accordance with their own privacy policies. We
                will only work with third-party services that comply with GDPR.
              </p>
              <p>
                <strong>Changes to Privacy Policy:</strong> {APP_NAME} may update this Privacy Policy from
                time to time. We will notify you of any material changes to this Privacy Policy, and we
                encourage you to review this Privacy Policy periodically.
              </p>
              <p>
                If you have any questions or concerns about our Privacy Policy or how we handle your personal
                information, please don&apos;t hesitate to contact us at {SUPPORT_MAIL_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
