import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Send us an email and we'll respond within 24 hours
              </p>
              <a href="mailto:info@certificateacademy.com" className="text-primary hover:underline text-sm">
                info@certificateacademy.com
              </a>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Speak with our support team directly
              </p>
              <a href="tel:+15551234567" className="text-primary hover:underline text-sm">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Come visit our campus location
              </p>
              <p className="text-sm">
                123 Education Street<br />
                Learning City, LC 12345<br />
                United States
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Office Hours</h3>
              <div className="text-sm space-y-1">
                <p className="text-muted-foreground">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM EST</p>
                <p className="text-muted-foreground mt-2">Saturday</p>
                <p>10:00 AM - 4:00 PM EST</p>
                <p className="text-muted-foreground mt-2">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl">Send Us a Message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john.doe@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block mb-2">Subject *</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="registration">Registration Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="payment">Payment Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Message *</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-40"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I would like to receive updates and promotional materials from Certificate Academy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-secondary rounded-xl p-8">
              <h3 className="text-xl mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2">How long does it take to complete a certificate program?</h4>
                  <p className="text-sm text-muted-foreground">
                    Most programs range from 10-16 weeks, depending on the course. You can study at your own pace with flexible scheduling options.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">Are the certificates recognized by employers?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, our certificates are industry-recognized and valued by employers across various sectors globally.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">What are the payment options available?</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer multiple payment options including credit/debit cards, bank transfers, and installment plans to make learning accessible.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">Can I get a refund if I need to withdraw?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we have a refund policy. Full refunds are available within the first 14 days of enrollment. Please review our terms for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="h-96 bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">123 Education Street, Learning City, LC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
