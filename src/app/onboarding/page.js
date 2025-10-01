"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_7sp2v1f";
const TEMPLATE_ID = "template_31rth73";
const PUBLIC_KEY = "CN4db3HoeMcAONo2F";

// Option Card with Image
const OptionCard = ({ name, value, label, img, selected, onChange, multi }) => {
  const handleClick = () => {
    if (multi) {
      onChange(name, value, true);
    } else {
      onChange(name, value);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border rounded-xl p-4 cursor-pointer flex flex-col items-center text-center transition 
      ${selected ? "border-black bg-gray-100" : "border-gray-300 hover:border-black"}`}
    >
      <img
        src={img}
        alt={label}
        className="w-16 h-16 object-cover rounded-md mb-2"
      />
      <span className="font-medium">{label}</span>
    </div>
  );
};

const StyledSelect = ({ name, label, options, required, value, onChange }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <select
      name={name}
      value={value || ""}
      required={required}
      onChange={(e) => onChange(name, e.target.value)}
      className="w-full border border-black rounded-md px-4 py-3 pr-10 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="">Select</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const steps = 4;

  const handleChange = (name, value, multi = false) => {
    if (multi) {
      const current = formData[name] || [];
      let updated;
      if (current.includes(value)) {
        updated = current.filter((v) => v !== value);
      } else {
        updated = [...current, value];
      }
      setFormData({ ...formData, [name]: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const submissionData = {
      ...formData,
      features: Array.isArray(formData.features)
        ? formData.features.join(", ")
        : formData.features || "",
      contact: `${formData.firstName || ""} ${formData.lastName || ""}, ${
        formData.email || ""
      }, ${formData.phone || ""}`,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, submissionData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert("Submission failed. Please try again.");
      });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Thank you!</h1>
          <p>We’ve received your info and will be in touch shortly.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-40">
      <div className="w-full max-w-3xl bg-gray-50 border rounded-xl shadow-md p-8">
        {/* Header */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Start Your Project</h1>
          <p className="text-lg text-gray-700">
            Answer a few quick questions and we’ll tailor your Pequeño journey.
          </p>
        </section>

        {/* Progress */}
        <div className="mb-10">
          <p className="text-sm font-semibold">
            Step {step} of {steps}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-black h-2 rounded-full transition-all"
              style={{ width: `${(step / steps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Step 1: Basics */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">
                  1. What kind of structure are you interested in? *
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <OptionCard
  name="structureType"
  value="Luxury Cabin"
  label="Luxury Cabin"
  img="/icons/luxury.png" // icon instead of photo
  selected={formData.structureType === "Luxury Cabin"}
  onChange={handleChange}
/>
<OptionCard
  name="structureType"
  value="Off-grid Home"
  label="Off-grid Home"
  img="/icons/off-grid.png"
  selected={formData.structureType === "Off-grid Home"}
  onChange={handleChange}
/>
<OptionCard
  name="structureType"
  value="Guest Unit"
  label="Guest Accommodation"
  img="/icons/guest-unit.png"
  selected={formData.structureType === "Guest Unit"}
  onChange={handleChange}
/>
<OptionCard
  name="structureType"
  value="Rental Unit"
  label="Short-Term Rental"
  img="/icons/rental-unit.png"
  selected={formData.structureType === "Rental Unit"}
  onChange={handleChange}
/>

                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  2. Where will the structure be located? *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ""}
                  onChange={(e) => handleChange("location", e.target.value)}
                  required
                  placeholder="e.g. Robertson, Western Cape (Farm)"
                  className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
                />
              </div>

              <StyledSelect
                name="purpose"
                label="3. What is most important to you in this project? *"
                options={[
                  "Affordability",
                  "Sustainability / Energy Efficiency",
                  "Design & Aesthetics",
                  "Speed of Construction",
                ]}
                required
                value={formData.purpose}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Step 2: Design */}
          {step === 2 && (
            <div className="space-y-8">
              <StyledSelect
                name="capacity"
                label="4. How many people should it accommodate?"
                options={[
                  "2-person (Couple)",
                  "4-person (Small Family)",
                  "6-person (Extended Family)",
                  "Custom Layout",
                ]}
                value={formData.capacity}
                onChange={handleChange}
              />

              <div>
                <h3 className="font-semibold mb-4">
                  5. Specific features or styles in mind? *
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <OptionCard
                    name="features"
                    value="Solar Power"
                    label="Solar Power"
                    img="/icons/solar.png"
                    selected={formData.features?.includes("Solar Power")}
                    onChange={handleChange}
                    multi
                  />
                  <OptionCard
                    name="features"
                    value="Fireplace"
                    label="Fireplace"
                    img="/icons/fireplace.png"
                    selected={formData.features?.includes("Fireplace")}
                    onChange={handleChange}
                    multi
                  />
                  <OptionCard
                    name="features"
                    value="Mezzanine"
                    label="Mezzanine"
                    img="/icons/mezzanine.png"
                    selected={formData.features?.includes("Mezzanine")}
                    onChange={handleChange}
                    multi
                  />
                  <OptionCard
                    name="features"
                    value="Multi Level"
                    label="Multi Level"
                    img="/icons/multilevel.png"
                    selected={formData.features?.includes("Multi Level")}
                    onChange={handleChange}
                    multi
                  />
                </div>
              </div>

              <StyledSelect
                name="timeline"
                label="6. Ideal timeline to get started? *"
                options={[
                  "Immediately",
                  "Within 3 months",
                  "3–6 months",
                  "Next year",
                ]}
                required
                value={formData.timeline}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Step 3: Budget & Land */}
          {step === 3 && (
            <div className="space-y-8">
              <StyledSelect
                name="budget"
                label="7. Estimated budget (excluding land) *"
                options={[
                  "Under R500,000",
                  "R500,000 – R1,000,000",
                  "R1,000,000 – R2,000,000",
                  "Over R2,000,000",
                ]}
                required
                value={formData.budget}
                onChange={handleChange}
              />

              <StyledSelect
                name="turnkey"
                label="8. Turnkey or White Box? *"
                options={[
                  "Turnkey (fully finished)",
                  "White Box (fit-out)",
                  "Hybrid",
                  "Not sure yet",
                ]}
                required
                value={formData.turnkey}
                onChange={handleChange}
              />

              <StyledSelect
                name="landOwned"
                label="9. Do you already own the land? *"
                options={["Yes", "No", "In Process", "Undecided"]}
                required
                value={formData.landOwned}
                onChange={handleChange}
              />

              <StyledSelect
                name="servicesAvailable"
                label="10. Existing services on-site?"
                options={[
                  "Full Municipal Services",
                  "Water & Solar Only",
                  "Off-grid (No Services)",
                  "Not Sure",
                ]}
                value={formData.servicesAvailable}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Step 4: Contact + Summary */}
          {step === 4 && (
            <div className="space-y-8">
              {/* Contact details */}
              <div>
                <h3 className="font-semibold mb-4">
                  11. Contact Details *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName || ""}
                    onChange={(e) =>
                      handleChange("firstName", e.target.value)
                    }
                    placeholder="First Name"
                    className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName || ""}
                    onChange={(e) =>
                      handleChange("lastName", e.target.value)
                    }
                    placeholder="Last Name"
                    className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email Address"
                    className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone || ""}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Phone Number"
                    className="w-full border border-black px-4 py-3 rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="border rounded-lg bg-white shadow-sm p-6">
                <h3 className="font-semibold mb-4">Summary Review</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    <strong>Structure:</strong> {formData.structureType}
                  </li>
                  <li>
                    <strong>Location:</strong> {formData.location}
                  </li>
                  <li>
                    <strong>Purpose:</strong> {formData.purpose}
                  </li>
                  <li>
                    <strong>Capacity:</strong> {formData.capacity}
                  </li>
                  <li>
                    <strong>Features:</strong>{" "}
                    {formData.features?.join(", ") || "None selected"}
                  </li>
                  <li>
                    <strong>Timeline:</strong> {formData.timeline}
                  </li>
                  <li>
                    <strong>Budget:</strong> {formData.budget}
                  </li>
                  <li>
                    <strong>Finish:</strong> {formData.turnkey}
                  </li>
                  <li>
                    <strong>Land Ownership:</strong> {formData.landOwned}
                  </li>
                  <li>
                    <strong>Services:</strong> {formData.servicesAvailable}
                  </li>
                  <li>
                    <strong>Name:</strong> {formData.firstName}{" "}
                    {formData.lastName}
                  </li>
                  <li>
                    <strong>Email:</strong> {formData.email}
                  </li>
                  <li>
                    <strong>Phone:</strong> {formData.phone}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border rounded-md"
              >
                Back
              </button>
            )}
            {step < steps ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-6 py-3 bg-black text-white rounded-full font-semibold"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-black text-white rounded-full font-semibold"
              >
                {loading ? "Submitting..." : "Submit Project Info"}
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
