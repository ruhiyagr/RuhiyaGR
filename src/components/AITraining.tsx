import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bot, Sparkles, Brain, Zap, Shield, Lightbulb } from 'lucide-react';

const aiFeatures = [
  {
    icon: Bot,
    title: "Creating AI Agents",
    description: "Tasks such as summarizing, automation, answering questions, and performing actions"
  },
  {
    icon: Zap,
    title: "AI Workflows",
    description: "Building AI workflows using no-code platforms"
  },
  {
    icon: Brain,
    title: "Machine Learning Basics",
    description: "Understanding ML through visual and kid-friendly tools"
  },
  {
    icon: Sparkles,
    title: "Hands-on Tools",
    description: "Using Teachable Machine, p5.js, ml5.js, PoseNet, and MediaPipe"
  },
  {
    icon: Shield,
    title: "AI Safety",
    description: "Exploring AI safely and responsibly"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Designing smart agents that can solve real problems"
  }
];

export function AITraining() {
  return (
    <section id="ai-training" className="py-20 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full mb-4 border-2 border-violet-400">
              <Bot className="w-5 h-5 text-violet-600" />
              <span className="text-sm text-violet-900">AI & GenAI</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              AI & GenAI Training
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Empowering students to work with modern AI tools and become future-ready
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675557009285-b55f562641b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNzE5MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI and Machine Learning"
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
            </div>

            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I teach students to work with modern AI tools, including creating <strong>AI Agents</strong> for 
                tasks such as summarizing, automation, answering questions, and performing actions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Students learn how AI thinks, how prompts work, and how to design smart agents that can solve 
                real problems—making them <strong>future-ready</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 border-4 border-violet-200 hover:border-violet-400 bg-white hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg w-fit mb-4 shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}