import { Award, Users, BookOpen, TrendingUp, Target, Heart, Globe, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Profile() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl mb-4">About Certificate Academy</h1>
              <p className="text-muted-foreground text-lg mb-6">
                Empowering learners worldwide with industry-recognized certifications and practical skills since 2015.
              </p>
              <p className="text-muted-foreground mb-6">
                We are a leading online education platform dedicated to providing high-quality professional certificate programs that help individuals advance their careers and achieve their goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Instructors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Certificate Academy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide accessible, high-quality professional education that empowers individuals to achieve their career goals and contribute meaningfully to their industries. We believe in democratizing education and making world-class learning opportunities available to everyone, everywhere.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the world's leading platform for professional certification, recognized globally for excellence in education, innovation in learning technology, and commitment to student success. We envision a future where continuous learning is the norm and career advancement is within everyone's reach.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for excellence in every aspect of education delivery
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building a supportive learning community for all students
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously innovating to enhance the learning experience
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Maintaining the highest standards of academic integrity
              </p>
            </div>
          </div>
        </div>

        {/* Accreditations & Partnerships */}
        <div className="max-w-6xl mx-auto mb-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Accreditations & Partnerships</h2>
            <p className="text-muted-foreground text-lg">
              Recognized and trusted by leading organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-sm text-muted-foreground">
                Quality management system certification
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Global Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Certificates recognized in 150+ countries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Industry Partners</h3>
              <p className="text-sm text-muted-foreground">
                Partnerships with Fortune 500 companies
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg">
              Meet the experts behind Certificate Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Users className="w-20 h-20 text-muted-foreground" />
              </div>
              <div className="p-6">
                <h3 className="mb-1">Dr. Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  15+ years in education technology with a PhD in Learning Sciences from Stanford University.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Users className="w-20 h-20 text-muted-foreground" />
              </div>
              <div className="p-6">
                <h3 className="mb-1">Michael Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">Chief Academic Officer</p>
                <p className="text-sm text-muted-foreground">
                  Former university dean with 20+ years of curriculum development experience.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Users className="w-20 h-20 text-muted-foreground" />
              </div>
              <div className="p-6">
                <h3 className="mb-1">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-3">Director of Student Success</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to student outcomes with expertise in career development and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our growth
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold text-primary">2015</span>
              </div>
              <div className="flex-shrink-0 w-px bg-border" />
              <div className="flex-1 pb-8">
                <h3 className="mb-2">Foundation</h3>
                <p className="text-muted-foreground text-sm">
                  Certificate Academy was founded with a vision to make professional education accessible to everyone.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold text-primary">2018</span>
              </div>
              <div className="flex-shrink-0 w-px bg-border" />
              <div className="flex-1 pb-8">
                <h3 className="mb-2">Global Expansion</h3>
                <p className="text-muted-foreground text-sm">
                  Reached 5,000 students across 50 countries and launched 20 certificate programs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold text-primary">2021</span>
              </div>
              <div className="flex-shrink-0 w-px bg-border" />
              <div className="flex-1 pb-8">
                <h3 className="mb-2">ISO Certification</h3>
                <p className="text-muted-foreground text-sm">
                  Achieved ISO 9001:2015 certification for quality management excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold text-primary">2024</span>
              </div>
              <div className="flex-shrink-0 w-px bg-border" />
              <div className="flex-1 pb-8">
                <h3 className="mb-2">Industry Recognition</h3>
                <p className="text-muted-foreground text-sm">
                  Awarded "Best Online Education Platform" and surpassed 10,000 graduates.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-semibold text-primary">2026</span>
              </div>
              <div className="flex-shrink-0 w-px bg-border" />
              <div className="flex-1">
                <h3 className="mb-2">Present Day</h3>
                <p className="text-muted-foreground text-sm">
                  Serving 10,000+ active students with 50+ programs and expanding our global reach.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">Join Our Growing Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Become part of thousands of learners who are transforming their careers with Certificate Academy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/program"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Programs
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
