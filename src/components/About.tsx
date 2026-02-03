import { Card } from './ui/card';
import { User, Heart, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-20 w-52 h-52 bg-violet-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-52 h-52 bg-indigo-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full mb-4 border-2 border-violet-400 animate-bounce-slow">
              <User className="w-5 h-5 text-violet-600 animate-pulse" />
              <span className="text-sm text-violet-900">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Passionate About Technology Education
            </h2>
          </div>

          <Card className="p-8 bg-white border-4 border-violet-200 shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I am <strong>Ruhiya Rehaman</strong>, a passionate Coding Instructor, Robotics & STEM Trainer, Web Developer, 
              and AI/GenAI Educator with over <strong>7,000+ hours of teaching experience</strong> across top EdTech companies, 
              schools, and training institutes. I have helped hundreds of students—from young beginners to advanced learners—gain 
              confidence in technology and become creative problem solvers.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Based in <strong>Dubai, UAE</strong>, I currently teach at <strong>Futurise Training Institute</strong> and also work as a private tutor, 
              delivering personalized, skill-based training in coding, robotics, communication, phonics, and AI.
            </p>

            <div className="bg-gradient-to-r from-amber-50 via-violet-50 to-indigo-50 rounded-lg p-6 border-l-4 border-violet-500">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-slate-900 mb-2">My Teaching Style</h3>
                  <p className="text-slate-700">
                    Built on <strong>clarity, creativity, and real-world application</strong>, ensuring that students 
                    not only learn but also understand, apply, and enjoy every concept.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}