import { Code, GraduationCap, Cpu, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from 'figma:asset/1a396357bc5256fd56b92676fbd04df280f11f09.png';
import { Badge } from './ui/badge';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient - more professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50"></div>
      
      {/* Animated background elements - toned down */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow animation-delay-600"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm rounded-full shadow-sm border-2 border-amber-400 animate-bounce-slow">
              <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
              <span className="text-sm text-slate-800">7,000+ Hours of Teaching Excellence</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl text-slate-900">
                Ruhiya G R
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600">
                Ruhiya Rehaman
              </p>
            </div>

            <p className="text-lg text-slate-700 max-w-xl">
              Coding Instructor | Robotics & STEM Trainer | Web Developer | AI/GenAI Educator
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-400 hover:scale-110 transition-transform cursor-pointer animate-slide-up">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-blue-900">Web Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border-2 border-violet-400 hover:scale-110 transition-transform cursor-pointer animate-slide-up animation-delay-200">
                <Cpu className="w-5 h-5 text-violet-600" />
                <span className="text-sm text-violet-900">Robotics & AI</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border-2 border-emerald-400 hover:scale-110 transition-transform cursor-pointer animate-slide-up animation-delay-400">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-900">STEM Education</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-pulse-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:scale-105 transition-all"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-slide-up animation-delay-400 order-1 md:order-2 max-w-sm mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
              <img
                src={profileImage}
                alt="Ruhiya G R - Teaching at Futurise Training Institute"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
            </div>
            
            {/* Floating stats - more professional colors */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-4 text-white hover:scale-110 transition-transform animate-float">
              <div className="text-2xl mb-1">7,000+</div>
              <div className="text-xs">Teaching Hours</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl shadow-xl p-4 text-white hover:scale-110 transition-transform animate-bounce-slow">
              <div className="text-2xl mb-1">100+</div>
              <div className="text-xs">Students Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}