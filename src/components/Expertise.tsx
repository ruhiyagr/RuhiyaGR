import { Badge } from './ui/badge';
import { Code, Cpu, GraduationCap, Brain, MessageCircle, Presentation, Globe, Smartphone, Rocket } from 'lucide-react';

const expertiseAreas = [
  { icon: Code, text: "Coding & Curriculum Design", color: "bg-gradient-to-br from-blue-600 to-indigo-600" },
  { icon: Cpu, text: "Robotics (Arduino, LEGO, sensors, circuits)", color: "bg-gradient-to-br from-violet-600 to-purple-600" },
  { icon: GraduationCap, text: "STEM / STEAM Training", color: "bg-gradient-to-br from-emerald-600 to-teal-600" },
  { icon: Brain, text: "AI & GenAI Training", color: "bg-gradient-to-br from-rose-600 to-pink-600" },
  { icon: Rocket, text: "AI Agent Creation Training", color: "bg-gradient-to-br from-amber-600 to-orange-600" },
  { icon: MessageCircle, text: "Communication & Phonics Training", color: "bg-gradient-to-br from-cyan-600 to-blue-600" },
  { icon: Presentation, text: "Public Speaking & Presentation Skills", color: "bg-gradient-to-br from-indigo-600 to-violet-600" },
  { icon: Globe, text: "Web Development (HTML, CSS, JS, Python)", color: "bg-gradient-to-br from-teal-600 to-emerald-600" },
  { icon: Smartphone, text: "App Development (Code.org, MIT App Inventor, Thunkable)", color: "bg-gradient-to-br from-purple-600 to-violet-600" },
  { icon: Rocket, text: "Project-Based Learning & Innovation Workshops", color: "bg-gradient-to-br from-pink-600 to-rose-600" }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-white via-indigo-50 to-violet-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4 border-2 border-amber-400">
              <Brain className="w-5 h-5 text-amber-700" />
              <span className="text-sm text-amber-900">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive skill set covering modern technology education and training
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border-4 border-amber-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${area.color} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 leading-relaxed">{area.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}