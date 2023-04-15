import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { getServerSession } from "@calcom/features/auth/lib/getServerSession";
import { APP_NAME, COMPANY_NAME, LOGO } from "@calcom/lib/constants";

export const Index: NextPage<{ session: { user: { id?: string } } }> = ({ session }) => {
  const { push } = useRouter();
  return (
    <div className="isolate min-h-screen bg-white text-gray-700">
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <h1 className="text-5xl font-semibold tracking-tight sm:text-center sm:text-7xl">
              Scheduling infrastructure for everyone.
            </h1>
            <p className="my-6 text-lg leading-8 text-gray-600 sm:text-center">
              Connect your favorite apps. {APP_NAME} works with all apps already in your scheduling flow
              ensuring everything works perfectly together.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  if (!session?.user?.id) {
                    void push("/auth/login");
                  } else {
                    void push("/event-types");
                  }
                }}
                className="rounded-md bg-gray-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Get started
              </button>
              <Link href="/auth/login" className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
            <hr className="mt-6 mb-3 border-gray-300" />
            <div className="flex items-center justify-between text-xs">
              <div>
                &copy; {new Date().getFullYear()}{" "}
                <Link href="https://go.cal.com/credits" target="_blank" className="hover:underline">
                  {COMPANY_NAME}
                </Link>
              </div>
              <div className="flex gap-2">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
  const session = await getServerSession({ req, res });

  return { props: { session: { user: { id: session?.user.id ?? null } } } };
}

export default Index;
