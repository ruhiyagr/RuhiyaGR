import { Card } from './ui/card';
import { Heart, Star, Lightbulb, MessageCircle, Code } from 'lucide-react';

const values = [
  {
    icon: Star,
    title: "Confidence",
    description: "Building self-belief in every student",
    color: "from-amber-600 to-orange-600"
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Encouraging innovative problem-solving",
    color: "from-violet-600 to-purple-600"
  },
  {
    icon: Code,
    title: "Logical Problem-Solving",
    description: "Developing analytical and computational thinking",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Expressing ideas clearly and effectively",
    color: "from-emerald-600 to-teal-600"
  },
  {
    icon: Heart,
    title: "Love for Technology",
    description: "Inspiring genuine passion for learning",
    color: "from-rose-600 to-pink-600"
  }
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 backdrop-blur-sm rounded-full mb-4 border-2 border-rose-400 animate-bounce-slow">
              <Heart className="w-5 h-5 text-rose-600 animate-pulse" />
              <span className="text-sm text-rose-900">Teaching Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              My Teaching Philosophy
            </h2>
          </div>

          <Card className="p-8 lg:p-12 bg-white border-4 border-violet-200 shadow-2xl mb-8">
            <p className="text-2xl text-center text-slate-800 leading-relaxed mb-8">
              "Learning should be <span className="text-indigo-600 inline-block hover:scale-110 transition-transform cursor-pointer">simple</span>, <span className="text-violet-600 inline-block hover:scale-110 transition-transform cursor-pointer">enjoyable</span>, 
              and <span className="text-rose-600 inline-block hover:scale-110 transition-transform cursor-pointer">empowering</span>."
            </p>
            
            <p className="text-lg text-center text-slate-700 mb-4">
              I focus on helping students build:
            </p>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-4 border-indigo-100 bg-white hover:scale-110 hover:-rotate-2 cursor-pointer"
              >
                <div className={`p-4 bg-gradient-to-br ${value.color} rounded-full w-fit mx-auto mb-4 shadow-lg animate-bounce-slow`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}