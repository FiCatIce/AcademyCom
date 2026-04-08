import { Award, Clock, Users, BookOpen, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Program() {
  const programs = [
    {
      id: 1,
      title: 'Digital Marketing Certificate',
      category: 'Marketing',
      duration: '12 weeks',
      students: 2500,
      level: 'Beginner',
      description: 'Master digital marketing strategies including SEO, social media marketing, content marketing, and analytics.',
      image: 'https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBvbmxpbmV8ZW58MXx8fHwxNzc1NTA0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Project Management Certificate',
      category: 'Management',
      duration: '16 weeks',
      students: 1800,
      level: 'Intermediate',
      description: 'Learn agile methodologies, risk management, team leadership, and project planning techniques.',
      image: 'https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Data Analytics Certificate',
      category: 'Technology',
      duration: '14 weeks',
      students: 2200,
      level: 'Intermediate',
      description: 'Gain expertise in data visualization, SQL, Python, statistical analysis, and business intelligence.',
      image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'UX/UI Design Certificate',
      category: 'Design',
      duration: '10 weeks',
      students: 1500,
      level: 'Beginner',
      description: 'Learn user research, wireframing, prototyping, and design thinking principles.',
      image: 'https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGNlcnRpZmljYXRlc3xlbnwxfHx8fDE3NzU2MTEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      title: 'Financial Management Certificate',
      category: 'Finance',
      duration: '12 weeks',
      students: 1200,
      level: 'Intermediate',
      description: 'Master financial planning, investment strategies, budgeting, and risk management.',
      image: 'https://images.unsplash.com/photo-1596247290824-e9f12b8c574f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBvbmxpbmV8ZW58MXx8fHwxNzc1NTA0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      title: 'Cybersecurity Fundamentals',
      category: 'Technology',
      duration: '16 weeks',
      students: 1600,
      level: 'Advanced',
      description: 'Learn network security, ethical hacking, encryption, and security best practices.',
      image: 'https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzc1NjExMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl mb-4">Certificate Programs</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive certificate programs designed to help you advance your career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search programs..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-accent transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                  {program.category}
                </div>
                <h3 className="mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {program.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{program.students.toLocaleString()} students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>Level: {program.level}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What You'll Learn Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl mb-8 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="mb-2">Industry Certificate</h4>
              <p className="text-sm text-muted-foreground">
                Earn a recognized certificate upon completion
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h4 className="mb-2">Course Materials</h4>
              <p className="text-sm text-muted-foreground">
                Access comprehensive learning resources
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">
                Get guidance from industry professionals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h4 className="mb-2">Flexible Schedule</h4>
              <p className="text-sm text-muted-foreground">
                Study at your own pace and time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
