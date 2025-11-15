import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertCircle } from "lucide-react";

const PolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Patch Test Policy</h1>
            </div>
            
            <div className="space-y-6 text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Mandatory Patch Test Requirement</h2>
                <p className="mb-4">
                  At Marina Salon, client safety is our top priority. Any treatment involving the following services requires a mandatory patch test at least 24-48 hours before your appointment:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Eyebrow Lamination</li>
                  <li>Lash Lift & Tint</li>
                  <li>Hair Bleaching</li>
                  <li>Waxing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Important Notice</h2>
                <p className="mb-4">
                  <strong>Clients cannot proceed with these treatments without a valid patch test.</strong> This is a non-negotiable requirement for your safety and wellbeing.
                </p>
                <p>
                  If you book an appointment for any of these services without completing a patch test, we reserve the right to refuse service or reschedule your appointment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Client Responsibility & Liability</h2>
                <p className="mb-4">
                  If a client claims to have had a patch test but experiences an allergic reaction or adverse effects during or after the treatment, <strong>Marina Salon cannot be held responsible.</strong>
                </p>
                <p>
                  It is the client's responsibility to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Schedule and attend a patch test appointment in advance</li>
                  <li>Accurately disclose any allergies or skin sensitivities</li>
                  <li>Wait the full 24-48 hours after the patch test before booking the main treatment</li>
                  <li>Inform us immediately if any reaction occurs during the patch test period</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Booking Terms Alignment</h2>
                <p>
                  This policy is in accordance with our booking terms and conditions on Fresha. By booking any of the listed treatments, you acknowledge and agree to comply with this patch test requirement.
                </p>
              </section>

              <section className="bg-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How to Book a Patch Test</h3>
                <p className="mb-3">
                  To schedule your patch test, please contact us:
                </p>
                <ul className="space-y-2">
                  <li><strong>Phone:</strong> 0161 332 2350</li>
                  <li><strong>Email:</strong> hello@marinasalonbyfkz.co.uk</li>
                  <li><strong>Visit:</strong> 3-5 Keepers Quay, Manchester</li>
                </ul>
              </section>

              <p className="text-sm opacity-70 mt-8">
                Thank you for your understanding and cooperation. We look forward to providing you with safe, beautiful treatments.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
