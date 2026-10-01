"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Upload, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

type Step = 1 | 2 | 3 | 4 | 5 | 6; // 6 is success state

const styles = ["Minimal", "Cinematic", "Premium", "Bold", "Traditional", "Futuristic", "Playful", "Elegant", "Not Sure"];
const budgets = ["₹2K–₹5K", "₹5K–₹10K", "₹10K–₹25K", "₹25K+", "Not sure yet"];
const deadlines = ["ASAP", "Within a week", "2–4 weeks", "Flexible", "Custom Date"];

export default function ProjectBuilder() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    service: "",
    purpose: "",
    style: "",
    budget: "",
    deadline: "",
    name: "",
    phone: "",
    email: "",
    details: "",
  });

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("nova-project-draft");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (step < 6) {
      localStorage.setItem("nova-project-draft", JSON.stringify(formData));
    }
  }, [formData, step]);

  const updateData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(6);
      localStorage.removeItem("nova-project-draft");
    }, 800);
  };

  const isStepValid = () => {
    if (step === 1) return formData.service !== "";
    if (step === 2) return formData.purpose !== "";
    if (step === 3) return formData.style !== "";
    if (step === 4) return formData.budget !== "" && formData.deadline !== "";
    if (step === 5) return formData.name !== "" && formData.email !== "" && formData.details !== "";
    return true;
  };

  return (
    <div className="min-h-screen bg-deepest-green pt-24 pb-12 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none"></div>
      
      {/* Decorative Background Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-heritage-green/10 rounded-full flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[400px] h-[400px] border border-leaf-green/5 rounded-full rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 max-w-3xl flex-1 flex flex-col z-10 relative">
        {step < 6 && (
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center text-sm uppercase tracking-widest font-medium transition-colors ${step === 1 ? 'text-ivory/20 cursor-not-allowed' : 'text-ivory/60 hover:text-leaf-green'}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-12 h-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-leaf-green' : 'bg-heritage-green/30'}`}></div>
              ))}
            </div>
            <div className="text-ivory/40 text-sm font-serif italic">{step} / 5</div>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-12">What would you like us to create?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => updateData("service", s.id)}
                        className={`p-6 rounded-2xl text-left border transition-all duration-300 ${formData.service === s.id ? 'bg-primary-green/20 border-leaf-green text-ivory shadow-[0_0_15px_rgba(85,216,62,0.15)]' : 'bg-forest-green/30 border-heritage-green/30 text-ivory/70 hover:border-ivory/30'}`}
                      >
                        <span className="block text-xl font-serif mb-2">{s.title}</span>
                      </button>
                    ))}
                    <button
                        onClick={() => updateData("service", "custom")}
                        className={`p-6 rounded-2xl text-left border transition-all duration-300 ${formData.service === "custom" ? 'bg-primary-green/20 border-leaf-green text-ivory shadow-[0_0_15px_rgba(85,216,62,0.15)]' : 'bg-forest-green/30 border-heritage-green/30 text-ivory/70 hover:border-ivory/30'}`}
                      >
                        <span className="block text-xl font-serif mb-2">Something Custom</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-12">What is the purpose?</h2>
                  <input
                    type="text"
                    value={formData.purpose}
                    onChange={(e) => updateData("purpose", e.target.value)}
                    placeholder="e.g., Wedding, Product Launch, Rebranding..."
                    className="w-full bg-transparent border-b-2 border-heritage-green/50 py-4 text-2xl text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-leaf-green transition-colors font-light"
                    autoFocus
                  />
                  <div className="flex flex-wrap gap-3 mt-8">
                    {['Wedding', 'Birthday', 'Festival', 'Business', 'Portfolio', 'Event', 'Social Media'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => updateData("purpose", tag)}
                        className="px-4 py-2 rounded-full border border-heritage-green/30 text-ivory/60 hover:text-ivory hover:border-ivory/40 text-sm transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-12">What kind of feel are you looking for?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {styles.map((s) => (
                      <button
                        key={s}
                        onClick={() => updateData("style", s)}
                        className={`p-4 rounded-xl text-center border transition-all duration-300 ${formData.style === s ? 'bg-primary-green/20 border-leaf-green text-ivory shadow-[0_0_15px_rgba(85,216,62,0.15)]' : 'bg-forest-green/30 border-heritage-green/30 text-ivory/70 hover:border-ivory/30'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-serif text-ivory mb-6">Estimated Budget</h2>
                    <div className="flex flex-wrap gap-4">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          onClick={() => updateData("budget", b)}
                          className={`px-6 py-3 rounded-full border transition-all duration-300 ${formData.budget === b ? 'bg-primary-green text-ivory border-primary-green' : 'bg-transparent border-heritage-green/50 text-ivory/70 hover:border-ivory/50'}`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif text-ivory mb-6">Deadline</h2>
                    <div className="flex flex-wrap gap-4">
                      {deadlines.map((d) => (
                        <button
                          key={d}
                          onClick={() => updateData("deadline", d)}
                          className={`px-6 py-3 rounded-full border transition-all duration-300 ${formData.deadline === d ? 'bg-primary-green text-ivory border-primary-green' : 'bg-transparent border-heritage-green/50 text-ivory/70 hover:border-ivory/50'}`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-8">Almost there.</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => updateData("name", e.target.value)}
                      className="w-full bg-transparent border-b border-heritage-green/50 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-leaf-green transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => updateData("email", e.target.value)}
                      className="w-full bg-transparent border-b border-heritage-green/50 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-leaf-green transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => updateData("phone", e.target.value)}
                      className="w-full bg-transparent border-b border-heritage-green/50 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-leaf-green transition-colors sm:col-span-2"
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Tell us about your idea..."
                    rows={4}
                    value={formData.details}
                    onChange={(e) => updateData("details", e.target.value)}
                    className="w-full bg-transparent border-b border-heritage-green/50 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-leaf-green transition-colors resize-none"
                  ></textarea>

                  <div className="border border-dashed border-heritage-green/50 rounded-2xl p-8 text-center bg-forest-green/10 hover:bg-forest-green/20 transition-colors cursor-pointer group">
                    <Upload className="w-8 h-8 text-ivory/40 mx-auto mb-4 group-hover:text-leaf-green transition-colors" />
                    <p className="text-ivory/60 text-sm">Drag and drop references, or click to upload</p>
                    <p className="text-ivory/30 text-xs mt-2">Images, Videos, PDF (Max 50MB)</p>
                  </div>
                </form>
              )}

              {/* SUCCESS STATE */}
              {step === 6 && (
                <div className="text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(85,216,62,0.4)]"
                  >
                    <CheckCircle2 className="w-12 h-12 text-deepest-green" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">Your idea is officially in motion.</h2>
                  <p className="text-xl text-ivory/70 mb-8 max-w-lg mx-auto font-light">
                    We’ve received your project brief. Our team will review it and contact you shortly.
                  </p>
                  <div className="inline-block border border-heritage-green/50 rounded-xl px-6 py-4 bg-forest-green/30 mb-12">
                    <span className="text-ivory/50 text-xs uppercase tracking-widest block mb-1">Project Reference Number</span>
                    <span className="text-leaf-green font-mono text-xl tracking-wider">NOVA-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-center gap-6">
                    <Link href="/work" className="px-8 py-4 bg-primary-green text-ivory rounded-full font-medium hover:bg-leaf-green hover:text-deepest-green transition-colors">
                      Explore Our Work
                    </Link>
                    <Link href="/" className="px-8 py-4 border border-heritage-green text-ivory rounded-full font-medium hover:border-leaf-green transition-colors">
                      Back Home
                    </Link>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {step < 5 && (
          <div className="mt-12 flex justify-end border-t border-heritage-green/30 pt-8">
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${isStepValid() ? 'bg-primary-green text-ivory hover:bg-leaf-green hover:text-deepest-green shadow-[0_0_15px_rgba(20,140,90,0.4)]' : 'bg-forest-green/50 text-ivory/30 cursor-not-allowed'}`}
            >
              Continue <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
        
        {step === 5 && (
          <div className="mt-12 flex justify-end border-t border-heritage-green/30 pt-8">
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`flex items-center px-10 py-4 rounded-full font-medium transition-all duration-300 ${isStepValid() ? 'bg-leaf-green text-deepest-green hover:bg-ivory shadow-[0_0_25px_rgba(85,216,62,0.6)]' : 'bg-forest-green/50 text-ivory/30 cursor-not-allowed'}`}
            >
              Send Project Brief
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
