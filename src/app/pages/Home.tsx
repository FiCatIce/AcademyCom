import { Link } from 'react-router';
import { Award, BookOpen, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Advance Your Career with Professional Certifications
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of learners who have enhanced their skills and achieved career success through our industry-recognized certificate programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/program"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/registration"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNlcnRpZmljYXRlc3xlbnwxfHx8fDE3NzU2MTEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Online learning"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">10K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">50+</div>
              <div className="text-muted-foreground">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold mb-2">200+</div>
              <div className="text-muted-foreground">Instructors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Certificate Academy?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide world-class education with flexible learning options designed for working professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Industry Recognition</h3>
              <p className="text-muted-foreground text-sm">
                Earn certificates recognized by leading companies worldwide.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground text-sm">
                Learn from industry experts with years of practical experience.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Flexible Learning</h3>
              <p className="text-muted-foreground text-sm">
                Study at your own pace with 24/7 access to course materials.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Career Support</h3>
              <p className="text-muted-foreground text-sm">
                Get career guidance and job placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Programs</h2>
            <p className="text-muted-foreground text-lg">
              Explore our most popular certificate programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBvbmxpbmV8ZW58MXx8fHwxNzc1NTA0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Digital Marketing Certificate</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Master SEO, social media, content marketing, and analytics.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">12 weeks</span>
                  <Link to="/program" className="text-primary hover:underline text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Project Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Project Management Certificate</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn agile methodologies, risk management, and team leadership.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">16 weeks</span>
                  <Link to="/program" className="text-primary hover:underline text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Data Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Data Analytics Certificate</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Gain skills in data visualization, SQL, and statistical analysis.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">14 weeks</span>
                  <Link to="/program" className="text-primary hover:underline text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/program"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground text-lg">
              Hear from our graduates about their learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The Digital Marketing certificate helped me land my dream job. The instructors were knowledgeable and the content was practical."
              </p>
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Marketing Manager</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Flexible learning schedule allowed me to balance work and studies. The certificate boosted my career prospects significantly."
              </p>
              <div>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Project Manager</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Outstanding program with hands-on projects. I gained real-world skills that I use every day in my new role."
              </p>
              <div>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Data Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our certificate programs.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
