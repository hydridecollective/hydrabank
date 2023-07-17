export default async function Page() {
    return (
        <section className="flex flex-col gap-y-6 w-full h-full p-16 pt-16">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mb-4">
            <b className="bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">
              Legal (Terms of Service)
            </b>
          </h1>
          <div className="flex flex-col md:gap-y-4">
            <h2 className="text-2xl font-medium">Terms of Service</h2>
            <h3>
              <span className="text-error text-lg font-bold">
                <strong>Effective Date: July 17th, 2023</strong>
              </span>
            </h3>
            <p>
              These Terms of Service ("Terms") govern your use of the services provided by Hydride ("Collective"), including the system administration services provided by Hydrabank ("Hydrabank"). Please read these Terms carefully before using our services.
            </p>
            <h3 className="text-lg font-medium">1. Intellectual Property</h3>
            <p>
              All intellectual property rights related to the services provided by Hydride, including but not limited to software, documentation, and any custom configurations, remain the property of Hydride or its licensors. You shall not reproduce, distribute, modify, or create derivative works of any part of the services without prior written consent from Hydride.
            </p>
            <h3 className="text-lg font-medium">2. Acceptance of Terms</h3>
            <p>
              By accessing or using the services provided by Hydrabank, you agree to be bound by these Terms. If you do not agree to these Terms, you may not order our services.
            </p>
            <h3 className="text-lg font-medium">3. Services</h3>
            <h3 className="text-md font-medium">3.1 System Administration Services</h3>
            <p>
              Hydride provides system administration services through its subsidiary, Hydrabank. These services include, but are not limited to, server management, network administration, security audits, and advice on best practices.
            </p>
            <h3 className="text-md font-medium">3.2 Your compliance with Security Protocols</h3>
            <p>
              Hydrabank strongly recommends that you follow our security protocols, including enabling two-factor authentication (2FA) and implementing our recommended security measures. While we strive to provide secure services, we cannot be held responsible for breaches or security incidents resulting from your failure to implement these protocols unless it can be proven to be our fault.
            </p>
            <h3 className="text-lg font-medium">4. Payments and Refunds</h3>
            <h3 className="text-md font-medium">4.1 Payment</h3>
            <p>
              You agree to pay the fees for the services provided by Hydride as outlined in the agreed-upon service agreement. Payment terms and methods will be specified in the agreement.
            </p>
            <h3 className="text-md font-medium">4.2 No Refunds or Chargebacks</h3>
            <p>
              Once the services have been completed, refunds or chargebacks will not be permitted unless otherwise agreed upon in writing between you and the collective founder "Dani". It is your responsibility to review and confirm the completion of services before making the final payment.
            </p>
            <h3 className="text-lg font-medium">5. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Hydride, its managers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to damages for loss of profits, data, or business.
            </p>
            <h3 className="text-lg font-medium">6. Governing Law and Jurisdiction</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any disputes arising out of or relating to these Terms or the services provided by Hydride shall be exclusively resolved in the state and federal courts located in California.
            </p>
            <h3 className="text-lg font-medium">7. Miscellaneous</h3>
            <h3 className="text-md font-medium">7.1 Entire Agreement</h3>
            <p>
              These Terms constitute the entire agreement between you and Hydride regarding the use of our services and supersede any prior agreements or understandings.
            </p>
            <h3 className="text-md font-medium">7.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be deemed severed from the Terms without affecting the validity and enforceability of the remaining provisions.
            </p>
            <h3 className="text-md font-medium">7.3 Modifications</h3>
            <p>
              Hydrabank reserves the right to modify or update these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes.
            </p>
            <p> </p>
            <p>
              By using our services, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you have any questions or concerns, please contact us at legal@hydride.dev.
            </p>
          </div>
        </div>
      </section>
    );
  }
  