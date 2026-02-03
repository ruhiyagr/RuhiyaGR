import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, MapPin, GraduationCap, ArrowUp, Phone, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-2 border-white/30 animate-bounce-slow cursor-pointer hover:bg-white/30 transition-all hover:scale-105"
              onClick={() => document.querySelector('.flex.flex-wrap.gap-4.justify-center')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              <Mail className="w-5 h-5 animate-pulse" />
              <span className="text-sm">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl mb-4">
              Let's Start Learning Together
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Ready to empower your students or child with future-ready skills?
            </p>
          </div>

          <Card className="p-8 lg:p-12 bg-white/15 backdrop-blur-md border-white/30 border-4 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 flex-shrink-0 mt-1 text-amber-300" />
                      <div>
                        <p className="text-sm text-indigo-200">Email</p>
                        <a href="mailto:ruhiagr64@gmail.com" className="text-white hover:text-amber-300 transition-colors">
                          ruhiagr64@gmail.com
                        </a>
                        <p className="text-xs text-indigo-200 mt-1">or ruhiya@futurise.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-amber-300" />
                      <div>
                        <p className="text-sm text-indigo-200">Phone (WhatsApp & Calling)</p>
                        <a href="tel:+971566001751" className="text-white hover:text-amber-300 transition-colors">
                          +971 56 600 1751
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 flex-shrink-0 mt-1 text-amber-300" />
                      <div>
                        <p className="text-sm text-indigo-200">Currently Teaching At</p>
                        <p className="text-white">Futurise Training Institute, Dubai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-amber-300" />
                      <div>
                        <p className="text-sm text-indigo-200">Location</p>
                        <p className="text-white">Resident of UAE - Dubai & Online Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl mb-4">Services Offered</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    Project Mentor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    Private 1:1 Tutoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    Group Workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    School Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    Curriculum Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-300 rounded-full"></span>
                    Corporate Training
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-lg mb-6">
                Interested in personalized training or school partnerships?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-amber-50 hover:text-indigo-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
                  onClick={() => window.location.href = 'mailto:ruhiagr64@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
                  onClick={() => window.open('https://wa.me/971566001751', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white text-white hover:bg-white/20 shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
                  onClick={() => window.location.href = 'tel:+971566001751'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Back to top */}
          <div className="text-center mt-12">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 border-2 border-white/30"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 relative z-10 mt-12">
        <div className="text-center py-6 border-t border-white/30">
          <p className="text-white">
            © {new Date().getFullYear()} Ruhiya G R (Ruhiya Rehaman). Making technology education simple, enjoyable, and empowering.
          </p>
        </div>
      </div>
    </section>
  );
}