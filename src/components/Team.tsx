
import { Linkedin, Mail, Award, Users, Zap, Code } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jaybeer Sutar',
      title: 'Founder & CTO',
      specialization: 'Flight Control Systems',
      image: '/images/team/jaybeer.jpg',
      bio: 'Visionary leader with extensive experience in aerospace engineering and autonomous systems. Leading the revolution in drone technology.',
      expertise: ['PX4 Flight Stack', 'Sensor Fusion', 'System Architecture', 'Drone Technology'],
      achievements: ['Aerospace Innovation', 'Technology Leadership', 'Industry Pioneer'],
      social: {
        linkedin: 'https://www.linkedin.com/in/jayabeer-sutar-128350263',
        email: 'jaywingstechnology@gmail.com'
      }
    },
    {
      name: 'Manas Kumar Samantaray',
      title: 'Co-Founder & CFO',
      specialization: 'Financial Management',
      image: '/images/team/mans.jpg',
      bio: 'Co-founder and Chief Financial Officer with expertise in financial strategy and business operations.',
      expertise: ['Financial Strategy', 'Business Operations', 'Investment Planning', 'Risk Management'],
      achievements: ['Financial Growth', 'Strategic Planning', 'Business Development'],
      social: {
        linkedin: '#',
        email: 'manas@jaywingstech.com'
      }
    },
    {
      name: 'Dibyagyani Mohanta',
      title: 'Chief Marketing Officer',
      specialization: 'Marketing & Strategy',
      image: '/images/team/dibya.jpg',
      bio: 'Chief Marketing Officer with expertise in strategic marketing and brand development in the technology sector.',
      expertise: ['Strategic Marketing', 'Brand Development', 'Market Analysis', 'Digital Strategy'],
      achievements: ['Brand Growth Leader', 'Marketing Excellence', 'Industry Recognition'],
      social: {
        linkedin: 'https://www.linkedin.com/in/dibyagyani-mohanta-a43198349',
        email: 'dibya@jaywingstech.com'
      }
    },
    {
      name: 'Anupam Sahoo',
      title: 'Chief Commercial Officer',
      specialization: 'Commercial Strategy',
      image: '/images/team/anupam.jpg',
      bio: 'Chief Commercial Officer with expertise in business development and commercial strategy in the technology sector.',
      expertise: ['Business Development', 'Commercial Strategy', 'Partnership Management', 'Sales Growth'],
      achievements: ['Revenue Growth Leader', 'Strategic Partnerships', 'Market Expansion'],
      social: {
        linkedin: 'https://www.linkedin.com/in/anupam-sahoo-4a0555295/',
        email: 'anupam@jaywingstech.com'
      }
    },
    {
      name: 'Debasish Mohanta',
      title: 'Chief Social Media Officer',
      specialization: 'Social Media & Digital Marketing',
      image: '/images/team/mafia.jpg',
      bio: 'Chief Social Media Officer specializing in digital marketing and social media strategy for technology companies.',
      expertise: ['Social Media Strategy', 'Digital Marketing', 'Content Creation', 'Brand Engagement'],
      achievements: ['Social Media Growth', 'Digital Engagement', 'Brand Awareness'],
      social: {
        linkedin: 'https://www.linkedin.com/in/debasish-mohanta-3b1470328',
        email: 'debasish@jaywingstech.com'
      }
    },
    {
      name: 'Biswanath Prasanna Satyabrata Kar',
      title: 'Software Architect & Developer',
      specialization: 'AI Automation',
      image: '/images/team/bps.jpg',
      bio: 'Senior software architect with deep expertise in AI automation, real-time systems and flight control software development.',
      expertise: ['AI Automation', 'Real-time Systems', 'Software Architecture', 'Machine Learning'],
      achievements: ['Open Source Contributor', 'AI Innovation', 'Code Quality Champion'],
      social: {
        linkedin: 'https://www.linkedin.com/in/biswanatha-prasanna-satyabrata-kar-b05b71346/',
        email: 'bps@jaywingstech.com'
      }
    }
  ];

  const getSpecializationIcon = (specialization: string) => {
    switch (specialization) {
      case 'Flight Control Systems':
        return Zap;
      case 'Financial Management':
        return Award;
      case 'Marketing & Strategy':
        return Users;
      case 'Commercial Strategy':
        return Award;
      case 'Social Media & Digital Marketing':
        return Users;
      case 'AI Automation':
        return Code;
      default:
        return Award;
    }
  };

  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The brilliant minds behind Jaywing Technologis - combining decades of experience in aerospace,
            AI, and industrial automation to deliver cutting-edge solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const SpecializationIcon = getSpecializationIcon(member.specialization);

            return (
              <div
                key={index}
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Member Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                  {/* Specialization Badge */}
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-2 border border-slate-600">
                    <SpecializationIcon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-400 font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-slate-400 mb-4">{member.specialization}</p>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span className="text-slate-400 text-xs">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-700">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 group/social"
                    >
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover/social:text-orange-400 transition-colors duration-200" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 group/social"
                    >
                      <Mail className="w-4 h-4 text-slate-400 group-hover/social:text-orange-400 transition-colors duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-slate-400">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
              <div className="text-slate-400">Patents & Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-slate-400">Industry Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-400">Expert Support</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Team;