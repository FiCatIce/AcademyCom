import { useState } from 'react';
import { Calendar, User, Mail, Phone, MapPin, CreditCard, CheckCircle } from 'lucide-react';

export function Registration() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl mb-4">Program Registration</h1>
            <p className="text-muted-foreground text-lg">
              Complete the form below to enroll in your chosen program
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                        step >= stepNumber
                          ? 'bg-primary border-primary text-primary-foreground'
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      {step > stepNumber ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        stepNumber
                      )}
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground">
                      Step {stepNumber}
                    </span>
                  </div>
                  {stepNumber < totalSteps && (
                    <div
                      className={`flex-1 h-0.5 mb-6 transition-colors ${
                        step > stepNumber ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            {step === 1 && (
              <div>
                <h2 className="text-2xl mb-6">Personal Information</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">First Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2">Last Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-24"
                        placeholder="Street address, City, State, ZIP"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Date of Birth *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl mb-6">Program Selection</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2">Select Program *</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Choose a program</option>
                      <option value="digital-marketing">Digital Marketing Certificate</option>
                      <option value="project-management">Project Management Certificate</option>
                      <option value="data-analytics">Data Analytics Certificate</option>
                      <option value="ux-ui-design">UX/UI Design Certificate</option>
                      <option value="financial-management">Financial Management Certificate</option>
                      <option value="cybersecurity">Cybersecurity Fundamentals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">Start Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select start date</option>
                        <option value="2026-05-01">May 1, 2026</option>
                        <option value="2026-06-01">June 1, 2026</option>
                        <option value="2026-07-01">July 1, 2026</option>
                        <option value="2026-08-01">August 1, 2026</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Learning Format *</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="format" value="online" className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Online Learning</div>
                          <div className="text-sm text-muted-foreground">
                            100% online with flexible schedule
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="format" value="hybrid" className="w-4 h-4" />
                        <div>
                          <div className="font-medium">Hybrid</div>
                          <div className="text-sm text-muted-foreground">
                            Mix of online and in-person sessions
                          </div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="format" value="in-person" className="w-4 h-4" />
                        <div>
                          <div className="font-medium">In-Person</div>
                          <div className="text-sm text-muted-foreground">
                            Traditional classroom experience
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Previous Education</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select highest education level</option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="doctorate">Doctorate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select an option</option>
                      <option value="search">Search Engine</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Friend Referral</option>
                      <option value="ad">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl mb-6">Payment Information</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-secondary">
                    <h3 className="mb-4">Order Summary</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Program Fee</span>
                        <span className="font-semibold">$1,299</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Registration Fee</span>
                        <span className="font-semibold">$99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Discount (Early Bird)</span>
                        <span className="font-semibold text-green-600">-$200</span>
                      </div>
                      <div className="pt-2 border-t border-border flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold text-xl">$1,198</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Payment Method *</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="payment" value="card" className="w-4 h-4" />
                        <CreditCard className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="payment" value="bank" className="w-4 h-4" />
                        <CreditCard className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Bank Transfer</span>
                      </label>
                      <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border cursor-pointer hover:bg-accent transition-colors">
                        <input type="radio" name="payment" value="installment" className="w-4 h-4" />
                        <CreditCard className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Installment Plan (3 months)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Card Number *</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">CVV *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" id="terms" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the terms and conditions, privacy policy, and refund policy of Certificate Academy
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-border">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-lg bg-secondary hover:bg-accent transition-colors"
                >
                  Previous
                </button>
              )}
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Next Step
                </button>
              ) : (
                <button className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Complete Registration
                </button>
              )}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@certificateacademy.com" className="text-primary hover:underline">
              support@certificateacademy.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
