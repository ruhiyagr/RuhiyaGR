import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Cog, Lightbulb, Trophy, Wrench, Rocket } from 'lucide-react';

const projects = [
  {
    icon: Cpu,
    title: "Arduino-based Robotics",
    description: "Building smart robots with sensors and circuits"
  },
  {
    icon: Cog,
    title: "STEM Engineering Workshops",
    description: "Hands-on engineering challenges and experiments"
  },
  {
    icon: Wrench,
    title: "LEGO Robotics",
    description: "Mechanical design and creative problem-solving"
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenges",
    description: "Design thinking and creative innovation projects"
  },
  {
    icon: Trophy,
    title: "Science Fair Projects",
    description: "Coding-based exhibition and competition projects"
  },
  {
    icon: Rocket,
    title: "Working Prototypes",
    description: "Building real prototypes with motors, sensors, and logic"
  }
];

export function RoboticsStem() {
  return (
    <section id="robotics-stem" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-4 border-2 border-emerald-400">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <span className="text-sm text-emerald-900">Robotics & STEM</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Robotics, STEM & School Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hands-on technology programs with multiple schools and training centers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I collaborate with multiple schools to deliver hands-on technology programs that bring learning to life.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Students build <strong>working prototypes</strong> using circuits, sensors, motors, logic, and robotics 
                principles—gaining practical experience and <strong>presentation skills</strong>.
              </p>
              
              <Card className="p-6 bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50 border-4 border-emerald-400 shadow-lg">
                <h3 className="text-lg text-slate-900 mb-3">Program Highlights</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 text-xl">✓</span>
                    <span>Real-world engineering concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 text-xl">✓</span>
                    <span>Hands-on prototype development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 text-xl">✓</span>
                    <span>Team collaboration and problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1 text-xl">✓</span>
                    <span>Presentation and communication skills</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550706899-d71befa3b74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGVkdWNhdGlvbiUyMHN0ZW18ZW58MXx8fHwxNzYzODExNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Robotics and STEM Education"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 border-4 border-emerald-200 hover:border-emerald-400 bg-white hover:scale-105"
              >
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg w-fit mb-4 shadow-md">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}