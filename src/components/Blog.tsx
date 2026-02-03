import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, Calendar, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    title: "Why Robotics Camps Are the Secret Playground of Future Innovators",
    excerpt: "Discover how robotics camps transform young minds into creative problem-solvers and future tech leaders through hands-on learning and innovation.",
    url: "https://futurise.ae/robotics-camps-future-innovators/",
    date: "December 2025",
    category: "Robotics & Innovation",
    image: "https://images.unsplash.com/photo-1740205644066-0ca1535e19ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJvYm90aWNzJTIwd29ya3Nob3AlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzAwMzM1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-indigo-600 to-violet-600"
  },
  {
    title: "Generative AI Skills for the Future",
    excerpt: "Explore the essential AI and GenAI skills that students need to thrive in tomorrow's tech-driven world, from prompt engineering to ethical AI development.",
    url: "https://futurise.ae/generative-ai-skills-for-the-future/",
    date: "January 2026",
    category: "AI & GenAI Education",
    image: "https://images.unsplash.com/photo-1767954561407-7014cb8fb16c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMDMzNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    title: "Computational Thinking for Kids",
    excerpt: "Learn how computational thinking empowers children with essential problem-solving skills, logical reasoning, and creative approaches to tackle real-world challenges.",
    url: "https://futurise.ae/computational-thinking-for-kids/",
    date: "February 2026",
    category: "STEM Education",
    image: "https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcHJvZ3JhbW1pbmclMjBjb21wdXRlciUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDAzMzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-rose-600 to-pink-600"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-400 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-violet-100 rounded-full mb-4 border-2 border-indigo-400 animate-bounce-slow">
              <BookOpen className="w-5 h-5 text-indigo-600 animate-pulse" />
              <span className="text-sm text-indigo-900">Insights & Articles</span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
              Latest from My Blog
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Sharing insights on robotics, STEM education, AI training, and innovative teaching approaches
            </p>
          </div>

          {/* Grid Layout for Multiple Blogs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-4 border-indigo-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-white flex flex-col"
                onClick={() => window.open(post.url, '_blank')}
              >
                {/* Image Section - Fixed Height */}
                <div className="relative overflow-hidden h-56 w-full">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className={`px-3 py-1.5 bg-gradient-to-r ${post.gradient} text-white rounded-full shadow-lg inline-flex items-center gap-2 text-sm`}>
                      <Sparkles className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all w-full group-hover:scale-105"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-indigo-100 via-violet-100 to-purple-100 border-4 border-indigo-300 inline-block shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Sparkles className="w-8 h-8 text-indigo-600 animate-pulse" />
                <div className="text-center sm:text-left">
                  <p className="text-xl text-slate-900 mb-1">
                    <strong className="text-indigo-700">New articles every month!</strong>
                  </p>
                  <p className="text-slate-600">
                    Stay tuned for more insights on technology education and innovation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}