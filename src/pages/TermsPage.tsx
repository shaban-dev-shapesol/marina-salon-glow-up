import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Terms & Conditions</h1>
            </div>
            
            <div className="space-y-6 text-foreground/90">
              <p className="text-sm opacity-70">
                Last Updated: November 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Booking Policies</h2>
                <div className="space-y-3">
                  <p>
                    All appointments at Marina Salon must be booked through our official booking platform on Fresha or by calling our reception at 0161 332 2350.
                  </p>
                  <p>
                    When you book an appointment, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate contact information</li>
                    <li>Arrive on time for your scheduled appointment</li>
                    <li>Notify us at least 24 hours in advance if you need to reschedule</li>
                    <li>Complete any required patch tests before certain treatments</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Cancellation Policy</h2>
                <div className="space-y-3">
                  <p>
                    We understand that plans change. However, to respect our staff's time and allow other clients to book, we require:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>24 hours notice</strong> for appointment cancellations or rescheduling</li>
                    <li><strong>48 hours notice</strong> for package or multiple service bookings</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Late Cancellation Fee:</strong> Cancellations made with less than 24 hours notice may incur a cancellation fee of up to 50% of the service cost.
                  </p>
                  <p>
                    <strong>No-Show Policy:</strong> Clients who do not show up for their appointment without prior notice will be charged the full service cost and may be required to pay a deposit for future bookings.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Refund Policy</h2>
                <div className="space-y-3">
                  <p>
                    We are committed to your satisfaction. Our refund policy is as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Dissatisfaction:</strong> If you are not satisfied with your service, please notify us within 48 hours. We will offer a complimentary correction or adjustment.</li>
                    <li><strong>Product Purchases:</strong> Unopened retail products may be returned within 14 days with receipt for a full refund.</li>
                    <li><strong>Opened Products:</strong> Opened products can be exchanged within 7 days if you experience an adverse reaction.</li>
                    <li><strong>Gift Cards:</strong> Non-refundable but can be transferred to another person.</li>
                  </ul>
                  <p className="mt-3">
                    Refunds will be processed using the original payment method within 5-10 business days.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
                <div className="space-y-3">
                  <p>
                    Payment is due at the time of service unless otherwise arranged.
                  </p>
                  <p>
                    We accept:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cash</li>
                    <li>Credit and Debit Cards (Visa, Mastercard, American Express)</li>
                    <li>Contactless Payments (Apple Pay, Google Pay)</li>
                    <li>Gift Cards and Vouchers</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Deposits:</strong> Some services may require a deposit at the time of booking, which will be deducted from your final bill.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. General Salon Rules</h2>
                <div className="space-y-3">
                  <p>
                    To ensure a pleasant experience for all clients, we ask that you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Arrive on time (late arrivals may result in shortened service time or rescheduling)</li>
                    <li>Keep mobile phone usage to a minimum during treatments</li>
                    <li>Inform us of any allergies, medical conditions, or skin sensitivities</li>
                    <li>Supervise children at all times if they accompany you</li>
                    <li>Treat our staff and fellow clients with respect and courtesy</li>
                    <li>Do not consume outside food or beverages (complimentary refreshments are provided)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Health & Safety</h2>
                <div className="space-y-3">
                  <p>
                    Your health and safety are our top priorities:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Please inform us if you are pregnant, have any medical conditions, or are taking medications that may affect treatments</li>
                    <li>Patch tests are mandatory for certain services (see our Patch Test Policy)</li>
                    <li>We reserve the right to refuse service if we believe it may pose a health risk</li>
                    <li>Please reschedule if you are feeling unwell</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Client Responsibilities</h2>
                <div className="space-y-3">
                  <p>
                    As a valued client, you are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing accurate information about hair history, previous treatments, and allergies</li>
                    <li>Following aftercare instructions provided by our stylists</li>
                    <li>Communicating any concerns during your appointment</li>
                    <li>Maintaining reasonable expectations about service outcomes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Liability Limitations</h2>
                <div className="space-y-3">
                  <p>
                    While we strive for excellence in every service:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Marina Salon is not liable for allergic reactions when proper patch tests were not completed as required</li>
                    <li>We are not responsible for hair or skin conditions caused by failure to follow aftercare instructions</li>
                    <li>Color results may vary based on individual hair condition and history</li>
                    <li>Personal belongings are the client's responsibility; we are not liable for lost or stolen items</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Photography & Social Media</h2>
                <div className="space-y-3">
                  <p>
                    We may occasionally photograph services for promotional purposes. If you do not wish to be photographed or have your images used on social media, please inform us at the start of your appointment.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Changes to Terms</h2>
                <div className="space-y-3">
                  <p>
                    Marina Salon reserves the right to modify these terms and conditions at any time. Updated terms will be posted on our website and in the salon. Continued use of our services constitutes acceptance of the updated terms.
                  </p>
                </div>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Questions About Our Terms?</h3>
                <p className="mb-3">
                  If you have any questions about these terms and conditions, please contact us:
                </p>
                <ul className="space-y-2">
                  <li><strong>Phone:</strong> 0161 332 2350</li>
                  <li><strong>Email:</strong> hello@marinasalonbyfkz.co.uk</li>
                  <li><strong>Address:</strong> 3-5 Keepers Quay, Manchester</li>
                </ul>
              </section>

              <p className="text-sm opacity-70 mt-8">
                By booking an appointment or using our services, you acknowledge that you have read, understood, and agree to these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
