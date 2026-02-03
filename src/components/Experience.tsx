import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Building2, Target } from 'lucide-react';

const experiences = [
  {
    company: "BYJU'S Future School",
    role: "Coding Instructor",
    description: "Coding fundamentals, logic building, game development",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100"
  },
  {
    company: "BrightChamps",
    role: "Technology Educator",
    description: "App development, AI projects, coding pathways",
    color: "bg-gradient-to-r from-violet-600 to-purple-600 text-white",
    iconBg: "bg-gradient-to-br from-violet-100 to-purple-100"
  },
  {
    company: "Playto Labs",
    role: "Robotics Trainer",
    description: "Robotics, Arduino, sensors, electronics, engineering concepts",
    color: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
    iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100"
  },
  {
    company: "Futurise Training Institute (Dubai)",
    role: "STEM & Coding Instructor",
    description: "Coding, STEM, robotics, communication, public speaking",
    color: "bg-gradient-to-r from-amber-600 to-orange-600 text-white",
    iconBg: "bg-gradient-to-br from-amber-100 to-orange-100"
  },
  {
    company: "Private Tutoring",
    role: "Personal Mentor",
    description: "Personalized 1:1 training in coding, robotics, web development, phonics, communication & AI",
    color: "bg-gradient-to-r from-rose-600 to-pink-600 text-white",
    iconBg: "bg-gradient-to-br from-rose-100 to-pink-100"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-4 border-2 border-indigo-400">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <span className="text-sm text-indigo-900">Professional Summary</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Experience & Organizations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Working with leading global EdTech organizations, delivering high-quality technology education
            </p>
          </div>

          {/* Featured Project Mentor Section */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-indigo-50 to-violet-50 border-4 border-indigo-300 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-2">Independent Project Mentor</h3>
                    <Badge className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md text-base px-4 py-1">
                      End-to-End Robotics and AI Projects
                    </Badge>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  I work as a Project Mentor, independently handling complete end-to-end student projects—from idea conception 
                  and planning to design, development, testing, and final presentation.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I guide students through real-world robotics, STEM, and AI projects involving hardware integration, coding logic, 
                  sensors, automation, and problem-solving, ensuring they understand not just <strong>how a project works</strong>, 
                  but <strong>why it works</strong>.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 border-4 border-indigo-100 hover:border-indigo-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${exp.iconBg} rounded-lg`}>
                    <Building2 className="w-6 h-6 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-slate-900 mb-2">{exp.company}</h3>
                    <Badge className={`${exp.color} mb-3 shadow-md`}>
                      {exp.role}
                    </Badge>
                    <p className="text-slate-600">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}