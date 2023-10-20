"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is the commission percentage?",
    answer:
      "You earn a 30% commission for the lifetime of any subscription you refer.",
  },
  {
    question: "How long will I get paid for a subscription I referred?",
    answer:
      "You will get paid as long as the subscription is active. When a customer cancels their subscription, your commission will stop as well.",
  },
  {
    question: "How long is the cookie valid?",
    answer:
      "Our affiliate cookie is valid for 60 days. If someone signs up for a Cloudpress account during those 60 days, the referral will be attributed to you.",
  },
  {
    question: "Must referrals upgrade to a paid subscription within 60 days?",
    answer:
      "No. They only need to sign up for a Cloudpress account within the 60 days the cookie is valid for us to track the referral. If they upgrade to a paid subscription any time after that, you will earn a commission.",
  },
  {
    question: "How do I get paid?",
    answer: (
      <>
        You get paid every month via{" "}
        <a
          href="https://wise.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:text-blue-500"
        >
          Wise
        </a>
        .
      </>
    ),
  },
  {
    question: "What are the payment terms?",
    answer:
      "Our payment terms are Net-30. For example, all commissions earned during March, are paid out on the 30th of April.",
  },
  {
    question: "Is there a minimum payment threshold?",
    answer:
      "Yes, the minimum threshold is $50. You will only get paid once your earnings exceed this threshold.",
  },
  {
    question: "How is your affiliate program managed?",
    answer: (
      <>
        We use{" "}
        <a
          href="https://tolt.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:text-blue-500"
        >
          Tolt
        </a>{" "}
        to manage our affiliate program.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
