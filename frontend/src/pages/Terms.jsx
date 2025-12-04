import React from "react";

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <header className="p-8 sm:p-12 border-b">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">VyaapaarNiti — Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            By accessing our website (<span className="font-medium">vyaapaarniti.in</span> / <span className="font-medium">vyaapaarniti.com</span>) and purchasing any
            subscription plan (Silver/Gold/Platinum), you agree to these Terms &amp; Conditions. Please read carefully.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href="#toc"
              className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium ring-1 ring-indigo-100 hover:bg-indigo-100"
            >
              Jump to content
            </a>
            <a
              href="mailto:support@vyaapaarniti.com"
              className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium ring-1 ring-green-100 hover:bg-green-100"
            >
              Contact support
            </a>
          </div>
        </header>

        <div className="p-6 sm:p-10 lg:grid lg:grid-cols-4 lg:gap-8">
          <nav className="hidden lg:block lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-500">On this page</h3>
            <ol id="toc" className="mt-4 space-y-2 text-sm text-gray-700">
              <li>
                <a href="#definition" className="hover:underline">1. Definition</a>
              </li>
              <li>
                <a href="#service-usage" className="hover:underline">2. Service Usage</a>
              </li>
              <li>
                <a href="#accuracy" className="hover:underline">3. Accuracy of Data</a>
              </li>
              <li>
                <a href="#no-refund" className="hover:underline">4. No Refund Policy</a>
              </li>
              <li>
                <a href="#fair-use" className="hover:underline">5. Fair Use Policy</a>
              </li>
              <li>
                <a href="#validity" className="hover:underline">6. Subscription Validity</a>
              </li>
              <li>
                <a href="#ip" className="hover:underline">7. Intellectual Property</a>
              </li>
              <li>
                <a href="#liability" className="hover:underline">8. Limitation of Liability</a>
              </li>
              <li>
                <a href="#account" className="hover:underline">9. Account &amp; Access</a>
              </li>
              <li>
                <a href="#payment" className="hover:underline">10. Payment Terms</a>
              </li>
              <li>
                <a href="#modification" className="hover:underline">11. Modification of Terms</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">12. Contact</a>
              </li>
            </ol>
          </nav>

          <section className="lg:col-span-3 prose prose-neutral max-w-none">
            <section id="definition">
              <h2>1. Definition</h2>
              <ul>
                <li>
                  <strong>“Platform”</strong> refers to <em>VyaapaarNiti.com</em> and <em>vyaapaarniti.in</em>.
                </li>
                <li>
                  <strong>“Buyer/User/Subscriber”</strong> refers to any individual or business purchasing our database access plans.
                </li>
                <li>
                  <strong>“Service”</strong> refers to business contact details, database access, or any information provided under our subscription plans.
                </li>
              </ul>
            </section>

            <section id="service-usage">
              <h2>2. Service Usage</h2>
              <p>
                After subscribing to any plan, the Buyer will receive access to search and download business contact details listed on
                our platform. The data provided is for <strong>business-to-business (B2B) marketing purposes only</strong>. Sharing, reselling, or
                redistributing the database to any third party is <strong>strictly prohibited</strong>.
              </p>
            </section>

            <section id="accuracy">
              <h2>3. Accuracy of Data</h2>
              <p>
                All data is collected from publicly available sources, online listings, and partner networks. VyaapaarNiti <strong>does not
                guarantee 100% accuracy</strong>, activity, or responsiveness of every contact number or email ID. Database quality may vary
                depending on location, industry, and available public information.
              </p>
            </section>

            <section id="no-refund">
              <h2>4. No Refund Policy</h2>
              <p>
                Once a plan is purchased, <strong>no refund, cancellation, reversal, or return</strong> is allowed, as the data is a digital
                product. Buyers are advised to review plan details carefully before purchasing.
              </p>
            </section>

            <section id="fair-use">
              <h2>5. Fair Use Policy</h2>
              <p>Users cannot:</p>
              <ul>
                <li>Use the data for illegal, fraudulent, or unethical activities.</li>
                <li>Spam or send harmful, abusive, or unsolicited communication.</li>
                <li>Upload, publish, or share platform data on any other website, app, or marketplace.</li>
              </ul>
              <p className="text-sm text-red-700">Violation may result in immediate suspension of your account without refund.</p>
            </section>

            <section id="validity">
              <h2>6. Subscription Validity</h2>
              <p>Each plan comes with a specific validity period. After the end of the subscription period, access will automatically expire unless renewed.</p>
            </section>

            <section id="ip">
              <h2>7. Intellectual Property Rights</h2>
              <p>
                All content, database structure, search tools, filters, and digital materials are the sole property of <strong>VyaapaarNiti</strong>.
                Unauthorized copying or duplication will attract legal action.
              </p>
            </section>

            <section id="liability">
              <h2>8. Limitation of Liability</h2>
              <p>
                VyaapaarNiti is <strong>not responsible</strong> for business losses due to inaccurate data, low response rate or unsuccessful
                marketing campaigns, or any direct or indirect damages caused by the use of our data. The Buyer uses the data <strong>at their own risk</strong>.
              </p>
            </section>

            <section id="account">
              <h2>9. Account &amp; Access</h2>
              <p>
                Subscribers must not share their login credentials. Any unusual activity may lead to suspension. One subscription is valid for use
                by <strong>one user only</strong>.
              </p>
            </section>

            <section id="payment">
              <h2>10. Payment Terms</h2>
              <p>
                All payments are processed online through secure payment gateways. GST and taxes may apply as per government rules.
              </p>
            </section>

            <section id="modification">
              <h2>11. Modification of Terms</h2>
              <p>
                VyaapaarNiti reserves the right to modify or update these Terms &amp; Conditions at any time. Continued use of the platform indicates
                acceptance of updated terms.
              </p>
            </section>

            <section id="contact">
              <h2>12. Contact</h2>
              <p>
                For support or queries:
                <br />
                <strong>Email:</strong> <a className="text-indigo-600 hover:underline" href="mailto:support@vyaapaarniti.com">support@vyaapaarniti.com</a>
                <br />
                <strong>Phone:</strong> <a className="text-indigo-600 hover:underline" href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
              </p>
            </section>

            <hr className="my-8" />

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-gray-600">Last updated: <time dateTime={new Date().toISOString()}>{new Date().toLocaleDateString()}</time></p>

              <div className="flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
                >
                  Print
                </button>

                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 rounded-lg ring-1 ring-gray-200 text-sm font-medium hover:bg-gray-50"
                >
                  Back to site
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>

    </main>
  );
}
