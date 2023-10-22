import { mergeSeo } from "../../../../lib/merge-seo";

export const metadata = mergeSeo({
  title: "Cloudpress Affiliate Program Terms of Service",
  description:
    "You can earn a commission of 30% for every customer you refer to us. Here are our terms.",
});

export default function Page() {
  return (
    <>
      <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
        <div className="max-w-lg mx-auto lg:max-w-4xl">
          <div>
            <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Cloudpress Affiliate Program Terms of Service
            </h1>
            <div className="prose max-w-none mt-8">
              <p>Welcome to our Cloudpress Affiliate Program!</p>

              <p>
                These Terms of Service (the &quot;Agreement&quot;) govern your
                participation in our affiliate program (the &quot;Program&quot;)
                and establish the terms and conditions of the Program. By
                participating in the Program, you agree to abide by these terms.
              </p>

              <ul>
                <li>
                  <strong>Self-referrals are not allowed.</strong> You are not
                  permitted to sign up for Cloudpress through your own affiliate
                  link. If we detect any self-referrals, your account will be
                  permanently banned and any commission earned will be
                  forfeited.
                </li>
                <li>
                  <strong>Abuse or attempting to mislead.</strong> We do not
                  tolerate attempts to abuse our affiliate system. Any attempt
                  to mislead, manipulate or defraud us or potential customers
                  will result in your account being permanently banned. This
                  includes posting fake discounts to coupon-sharing websites or
                  engaging in any other activity that violates our policies.
                </li>
                <li>
                  <strong>
                    No search engine ads, Facebook ads, or other ads that
                    compete with our own marketing.
                  </strong>{" "}
                  You are not allowed to run any search engine ads (especially
                  on branded terms or domain names), Facebook ads, or other ads
                  that would compete with our own marketing and potentially
                  cause confusion for customers. We reserve the right to
                  terminate your account if we detect any such activity.
                </li>
                <li>
                  <strong>
                    No pretending to be acting on behalf of us (i.e. as an
                    employee).
                  </strong>{" "}
                  You are not allowed to impersonate us or pretend to be acting
                  on our behalf. This includes posing as an employee or
                  representative of our company.
                </li>
                <li>
                  <strong>Changes to the Terms of Service.</strong> We reserve
                  the right to change the Terms of Service for our affiliate
                  program at any time. We will provide notice of any changes to
                  the Terms of Service on our website, and it is your
                  responsibility to review the changes and comply with the
                  updated terms.
                </li>
              </ul>
              <p>
                By participating in our affiliate program, you agree to comply
                with these terms and conditions. We reserve the right to
                terminate your participation in the Program at any time and for
                any reason if you violate these terms. If you have any questions
                about these terms or our affiliate program, please contact us at{" "}
                <a href="mailto:hello@usecloudpress.com">
                  hello@usecloudpress.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
