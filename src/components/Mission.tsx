import { Card } from './ui/card';
import { Target, Rocket, Globe, Sparkles } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-violet-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-4 border-2 border-violet-400 animate-bounce-slow">
              <Target className="w-5 h-5 text-violet-600 animate-pulse" />
              <span className="text-sm text-violet-900">Mission Statement</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Empowering Future Innovators
            </h2>
          </div>

          <Card className="p-8 lg:p-12 bg-white border-4 border-violet-300 shadow-2xl">
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed">
                  My mission is to make every student feel capable of creating something <span className="text-violet-600 inline-block hover:scale-110 transition-transform cursor-pointer animate-pulse">extraordinary</span>—whether 
                  it's a game, a robot, a website, or an AI agent.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full w-fit mx-auto mb-3 shadow-lg animate-bounce-slow group-hover:animate-wiggle">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-slate-900 mb-2">Inspire</h3>
                  <p className="text-slate-700">Young minds to make a big impact</p>
                </div>

                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full w-fit mx-auto mb-3 shadow-lg animate-bounce-slow animation-delay-400 group-hover:animate-wiggle">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-slate-900 mb-2">Innovate</h3>
                  <p className="text-slate-700">Think creatively & solve real problems</p>
                </div>

                <div className="text-center group hover:scale-110 transition-transform">
                  <div className="p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full w-fit mx-auto mb-3 shadow-lg animate-bounce-slow animation-delay-800 group-hover:animate-wiggle">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-slate-900 mb-2">Impact</h3>
                  <p className="text-slate-700">Preparing for an innovation-driven future</p>
                </div>
              </div>

              <div className="pt-6 border-t-4 border-violet-300">
                <p className="text-lg text-center text-slate-700 leading-relaxed">
                  I aim to inspire young minds to make a big impact, think creatively, solve real-world problems, 
                  and grow confidently with technology, preparing them for a future driven by innovation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}