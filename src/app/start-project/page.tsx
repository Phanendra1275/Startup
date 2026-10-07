"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Upload, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

type Step = 1 | 2 | 3 | 4 | 5 | 6; // 6 is success state

const styles = ["Minimal", "Cinematic", "Premium", "Bold", "Traditional", "Futuristic", "Playful", "Elegant", "Not Sure"];
const budgets = ["₹5K–₹15K", "₹15K–₹50K", "₹50K–₹1L", "₹1L+", "Flexible / Discussion"];
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
    const saved = localStorage.getItem("madlancers-project-draft");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (step < 6) {
      localStorage.setItem("madlancers-project-draft", JSON.stringify(formData));
    }
  }, [formData, step]);

  const updateData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStep(6);
      localStorage.removeItem("madlancers-project-draft");
    }, 600);
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
    <div className="min-h-screen bg-[#0b0c0e] pt-24 pb-12 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-3xl flex-1 flex flex-col z-10 relative">
        {step < 6 && (
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center font-mono text-xs uppercase tracking-widest font-semibold transition-colors ${step === 1 ? 'text-white/20 cursor-not-allowed' : 'text-white/60 hover:text-[#FF5722]'}`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-12 h-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[#FF5722]' : 'bg-white/10'}`}></div>
              ))}
            </div>
            <div className="text-white/40 font-mono text-xs">{step} / 5</div>
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
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">What would you like us to create?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => updateData("service", s.id)}
                        className={`p-6 rounded-2xl text-left border transition-all duration-300 ${formData.service === s.id ? 'bg-[#FF5722]/10 border-[#FF5722] text-white shadow-[0_0_20px_rgba(255,87,34,0.25)]' : 'bg-[#14161a] border-white/10 text-white/70 hover:border-white/30'}`}
                      >
                        <span className="block text-xl font-heading font-bold mb-2">{s.title}</span>
                        <span className="text-xs text-white/50">{s.description}</span>
                      </button>
                    ))}
                    <button
                      onClick={() => updateData("service", "custom")}
                      className={`p-6 rounded-2xl text-left border transition-all duration-300 ${formData.service === "custom" ? 'bg-[#FF5722]/10 border-[#FF5722] text-white shadow-[0_0_20px_rgba(255,87,34,0.25)]' : 'bg-[#14161a] border-white/10 text-white/70 hover:border-white/30'}`}
                    >
                      <span className="block text-xl font-heading font-bold mb-2">Something Custom</span>
                      <span className="text-xs text-white/50">Custom development or creative brief</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">What is the purpose or goal?</h2>
                  <input
                    type="text"
                    value={formData.purpose}
                    onChange={(e) => updateData("purpose", e.target.value)}
                    placeholder="e.g., Mobile App, SaaS Web App, Branding, Digital Campaign..."
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF5722] transition-colors font-sans"
                    autoFocus
                  />
                  <div className="flex flex-wrap gap-3 mt-8">
                    {['Mobile App', 'Web Platform', 'Startup MVP', 'Branding', 'E-commerce', 'Marketing'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => updateData("purpose", tag)}
                        className="px-4 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-[#FF5722] text-xs font-mono transition-colors"
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
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">What design feel are you looking for?</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {styles.map((s) => (
                      <button
                        key={s}
                        onClick={() => updateData("style", s)}
                        className={`p-4 rounded-xl text-center border font-sans font-semibold transition-all duration-300 ${formData.style === s ? 'bg-[#FF5722] text-white border-[#FF5722] shadow-[0_0_20px_rgba(255,87,34,0.4)]' : 'bg-[#14161a] border-white/10 text-white/70 hover:border-white/30'}`}
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Estimated Budget</h2>
                    <div className="flex flex-wrap gap-4">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          onClick={() => updateData("budget", b)}
                          className={`px-6 py-3 rounded-full border font-mono text-xs uppercase tracking-wider transition-all duration-300 ${formData.budget === b ? 'bg-[#FF5722] text-white border-[#FF5722]' : 'bg-transparent border-white/20 text-white/70 hover:border-[#FF5722]'}`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-6">Target Deadline</h2>
                    <div className="flex flex-wrap gap-4">
                      {deadlines.map((d) => (
                        <button
                          key={d}
                          onClick={() => updateData("deadline", d)}
                          className={`px-6 py-3 rounded-full border font-mono text-xs uppercase tracking-wider transition-all duration-300 ${formData.deadline === d ? 'bg-[#FF5722] text-white border-[#FF5722]' : 'bg-transparent border-white/20 text-white/70 hover:border-[#FF5722]'}`}
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
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Almost there.</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => updateData("name", e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5722] transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address (madlancers10@gmail.com)"
                      value={formData.email}
                      onChange={(e) => updateData("email", e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5722] transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g., 9705623697)"
                      value={formData.phone}
                      onChange={(e) => updateData("phone", e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5722] transition-colors sm:col-span-2"
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Tell us about your project or requirements..."
                    rows={4}
                    value={formData.details}
                    onChange={(e) => updateData("details", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF5722] transition-colors resize-none"
                  ></textarea>

                  <div className="border border-dashed border-white/20 rounded-2xl p-8 text-center bg-[#14161a] hover:border-[#FF5722]/50 transition-colors cursor-pointer group">
                    <Upload className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-[#FF5722] transition-colors" />
                    <p className="text-white/70 text-sm font-sans">Drag and drop references, or click to upload</p>
                    <p className="text-white/30 text-xs font-mono mt-1">Images, Videos, PDF (Max 50MB)</p>
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
                    className="w-24 h-24 bg-[#FF5722] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(255,87,34,0.5)]"
                  >
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Your brief is in motion!</h2>
                  <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto font-sans leading-relaxed">
                    We have received your project brief. Our Madlancers team will contact you shortly via email or WhatsApp.
                  </p>
                  <div className="inline-block border border-white/10 rounded-xl px-6 py-4 bg-[#14161a] mb-12 shadow-xl">
                    <span className="text-white/40 font-mono text-xs uppercase tracking-widest block mb-1">Project Reference Code</span>
                    <span className="text-[#FF5722] font-mono text-xl font-bold tracking-wider">MADLANCERS-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-center gap-4">
                    <Link href="/" className="btn-accent px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider">
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {step < 5 && (
          <div className="mt-12 flex justify-end border-t border-white/10 pt-8">
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${isStepValid() ? 'btn-accent' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'}`}
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="mt-12 flex justify-end border-t border-white/10 pt-8">
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className={`flex items-center px-10 py-4 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${isStepValid() ? 'btn-accent' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10'}`}
            >
              Send Project Brief
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

