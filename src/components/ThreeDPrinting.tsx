import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Printer, Cog, Box, Wrench, Zap, CheckCircle2, Lightbulb, Layers } from 'lucide-react';

const learningPoints = [
  {
    icon: Cog,
    title: "3D Printer Fundamentals",
    description: "Understanding how a 3D printer works (extruder, nozzle, bed, filament, slicing)",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Box,
    title: "Robot Component Design",
    description: "Designing robot chassis, motor mounts, wheel holders, sensor holders, and protective casings",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Layers,
    title: "Print Preparation",
    description: "Converting designs into print-ready models using slicer software",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Wrench,
    title: "Print Settings Optimization",
    description: "Selecting correct print settings (layer height, infill, speed, supports)",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Troubleshooting",
    description: "Solving common printing issues (warping, clogging, weak prints)",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: CheckCircle2,
    title: "Robot Assembly",
    description: "Assembling printed parts into working robots for projects and competitions",
    color: "from-indigo-500 to-violet-500"
  }
];

export function ThreeDPrinting() {
  return (
    <section id="three-d-printing" className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-4 border-2 border-cyan-400 animate-bounce-slow">
              <Printer className="w-5 h-5 text-cyan-600 animate-pulse" />
              <span className="text-sm text-cyan-900">3D Printing & Prototyping</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Creality 3D Printer Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hands-on robotics prototyping where students learn to design, print, and assemble functional robot components
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Card */}
            <Card className="overflow-hidden border-4 border-cyan-200 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 duration-500">
              <div className="relative h-80 lg:h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjByb2JvdCUyMHBhcnRzJTIwcHJvdG90eXBpbmd8ZW58MXx8fHwxNzcwMDM1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="3D Printing Robot Components"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-cyan-300 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl">
                        <Printer className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Working with</p>
                        <p className="text-lg text-slate-900"><strong>Creality 3D Printers</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Description Card */}
            <div className="space-y-6">
              <Card className="p-8 border-4 border-blue-200 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-slate-900 mb-2">Beyond Just Printing Objects</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Students <strong>engineer real solutions</strong> for robotics projects, exhibitions, and competitions
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border-2 border-cyan-200 shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-slate-900 mb-1"><strong>Design Thinking</strong></h4>
                        <p className="text-sm text-slate-600">Transform ideas into functional prototypes</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-slate-900 mb-1"><strong>Mechanical Engineering</strong></h4>
                        <p className="text-sm text-slate-600">Understanding structure, strength, and functionality</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-purple-200 shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-slate-900 mb-1"><strong>Electronics & Robotics</strong></h4>
                        <p className="text-sm text-slate-600">Integrating printed parts with motors and sensors</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border-2 border-cyan-200 shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-slate-900 mb-1"><strong>Real-World Application</strong></h4>
                        <p className="text-sm text-slate-600">How ideas become physical products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Learning Points Grid */}
          <div>
            <h3 className="text-3xl text-slate-900 text-center mb-10">
              What Students Learn
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 border-4 border-slate-200 hover:border-cyan-400 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg text-slate-900 mb-2">
                      <strong>{point.title}</strong>
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {point.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom Impact Statement */}
          <div className="mt-16 text-center">
            <Card className="p-10 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 border-4 border-cyan-300 inline-block shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
              <div className="flex flex-col items-center gap-4 max-w-3xl">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-full shadow-xl">
                  <Printer className="w-10 h-10 text-white animate-pulse" />
                </div>
                <p className="text-2xl text-slate-900">
                  <strong className="text-cyan-700">Bridging Design, Engineering & Innovation</strong>
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This experience helps learners understand the complete journey from <strong>concept to creation</strong>, 
                  empowering them to build real solutions for tomorrow's challenges.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}