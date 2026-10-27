import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChatCircle, Car, Motorcycle, Clock, Calculator, GraduationCap, ShieldCheck, Certificate, Lightning } from "@phosphor-icons/react";
import { courses, benefits, waLink } from "@/data/schoolData";
import { courseImageById, IMAGES } from "@/data/schoolImages";
import type { CoursePackage } from "@/types";

const categoryIcons: Record<string, React.ReactNode> = {
  "Class B1": <Car size={22} weight="duotone" />,
  "Class B2": <Car size={22} weight="duotone" />,
  "Class C1": <Lightning size={22} weight="duotone" />,
  "Class A2": <Motorcycle size={22} weight="duotone" />,
  Refresher: <Clock size={22} weight="duotone" />,
};

const benefitIcons: Record<string, React.ReactNode> = {
  graduation: <GraduationCap size={24} weight="duotone" className="text-emerald-600" />,
  shield: <ShieldCheck size={24} weight="duotone" className="text-emerald-600" />,
  clock: <Clock size={24} weight="duotone" className="text-emerald-600" />,
  certificate: <Certificate size={24} weight="duotone" className="text-emerald-600" />,
};

function FeeCalculator() {
  const [selectedCourse, setSelectedCourse] = useState<CoursePackage>(courses[0]);
  const [weeks, setWeeks] = useState(4);

  const estimatedTotal = selectedCourse.priceKES;
  const perWeek = Math.round(estimatedTotal / weeks);

  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={20} className="text-emerald-600" weight="duotone" />
        <h3 className="font-semibold text-slate-900">Quick Fee Estimator</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5 block">Course</label>
          <select
            value={selectedCourse.id}
            onChange={(e) => {
              const c = courses.find((x) => x.id === e.target.value);
              if (c) setSelectedCourse(c);
            }}
            className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>{c.category} - {c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5 block">
            Duration: {weeks} weeks
          </label>
          <input
            type="range"
            min={1}
            max={8}
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <div className="text-xs text-slate-500 mb-1">Total Package</div>
            <div className="text-xl font-bold text-slate-900">KES {estimatedTotal.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-100">
            <div className="text-xs text-slate-500 mb-1">Per Week (approx)</div>
            <div className="text-xl font-bold text-emerald-600">KES {perWeek.toLocaleString()}</div>
          </div>
        </div>
        <p className="text-xs text-slate-400">{selectedCourse.instalments}</p>
      </div>
    </div>
  );
}

export default function CoursesAndBenefits() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const tabs = ["all", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses = activeTab === "all" ? courses : courses.filter((c) => c.category === activeTab);

  return (
    <>
      {/* Courses Section */}
      <section id="courses" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Driving Courses &amp; Transparent Pricing
            </h2>
            <p className="text-slate-500 leading-relaxed">
              No hidden fees. Pick your class, see the price, book via WhatsApp. We handle the rest.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab === "all" ? "All Courses" : tab}
              </button>
            ))}
          </div>

          {/* Course Cards + Calculator */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`relative bg-white rounded-2xl border p-5 flex flex-col ${
                    course.recommended
                      ? "border-emerald-200 ring-1 ring-emerald-100 shadow-emerald-50"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {course.recommended && (
                    <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 bg-amber-400 text-amber-900 text-[11px] font-bold rounded-full uppercase">
                      Most Popular
                    </span>
                  )}
                  <img
                    src={courseImageById[course.id] || IMAGES.heroDriving}
                    alt={`${course.category} ${course.label} training`}
                    className="mb-3 h-32 w-full rounded-xl object-cover ring-1 ring-slate-100"
                    loading="lazy"
                  />
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      {categoryIcons[course.category] || <Car size={22} weight="duotone" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">{course.category}</span>
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight">{course.label}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">{course.vehicleType} &bull; {course.duration}</p>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {course.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check size={14} weight="bold" className="text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-lg font-bold text-slate-900">KES {course.priceKES.toLocaleString()}</span>
                      <span className="block text-[10px] text-slate-400">{course.instalments}</span>
                    </div>
                    <a
                      href={waLink(`Hi! I want to book ${course.category} (${course.label}) - KES ${course.priceKES.toLocaleString()}. Please share available dates.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors active:scale-[0.97]"
                    >
                      <ChatCircle size={14} weight="fill" />
                      Book
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fee Calculator */}
            <div className="lg:col-span-1">
              <FeeCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Why 25,000+ Students Choose Georgeal
            </h2>
            <p className="text-slate-500">
              We have been training confident drivers in Nairobi since 2012. Here is what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  {benefitIcons[benefit.icon]}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}