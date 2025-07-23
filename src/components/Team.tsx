import React from 'react';
import { Linkedin, Mail, Award, Users, Zap, Code, Wrench } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Founder & CEO',
      specialization: 'Flight Control Systems',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'PhD in Aerospace Engineering with 15+ years in autonomous systems. Former lead engineer at major aerospace companies.',
      expertise: ['PX4 Flight Stack', 'Sensor Fusion', 'System Architecture'],
      achievements: ['50+ Patents Filed', 'IEEE Fellow', 'Drone Industry Pioneer'],
      social: {
        linkedin: '#',
        email: 'rajesh@jaywingstech.com'
      }
    },
    {
      name: 'Sarah Chen',
      title: 'CTO & Co-Founder',
      specialization: 'AI & Autonomy',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'MS Computer Science, AI/ML specialist. Expert in computer vision and autonomous navigation systems.',
      expertise: ['Machine Learning', 'Computer Vision', 'Path Planning'],
      achievements: ['AI Research Publications', 'Tech Innovation Award', 'Startup Accelerator Mentor'],
      social: {
        linkedin: '#',
        email: 'sarah@jaywingstech.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of Operations',
      specialization: 'Cleaning Systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'Industrial engineering background with expertise in automated cleaning systems and high-rise maintenance.',
      expertise: ['Industrial Automation', 'Safety Systems', 'Quality Control'],
      achievements: ['ISO Certification Lead', '99.9% Safety Record', 'Operations Excellence'],
      social: {
        linkedin: '#',
        email: 'michael@jaywingstech.com'
      }
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Lead Hardware Engineer',
      specialization: 'Micro-Drone Design',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'PhD in Electrical Engineering. Specializes in miniaturized electronics and custom flight management units.',
      expertise: ['PCB Design', 'Embedded Systems', 'Miniaturization'],
      achievements: ['100+ Drone Prototypes', 'Hardware Innovation', 'Patent Portfolio'],
      social: {
        linkedin: '#',
        email: 'priya@jaywingstech.com'
      }
    },
    {
      name: 'James Wilson',
      title: 'Software Architect',
      specialization: 'Flight Software',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'Senior software engineer with deep expertise in real-time systems and flight control software development.',
      expertise: ['Real-time Systems', 'ArduPilot', 'Telemetry'],
      achievements: ['Open Source Contributor', 'Flight Stack Expert', 'Code Quality Champion'],
      social: {
        linkedin: '#',
        email: 'james@jaywingstech.com'
      }
    },
    {
      name: 'Lisa Thompson',
      title: 'Business Development',
      specialization: 'Client Relations',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      bio: 'MBA with 10+ years in B2B sales and client relationship management in the technology sector.',
      expertise: ['Strategic Partnerships', 'Client Success', 'Market Analysis'],
      achievements: ['$10M+ Revenue Growth', 'Client Satisfaction Leader', 'Industry Connector'],
      social: {
        linkedin: '#',
        email: 'lisa@jaywingstech.com'
      }
    }
  ];

  const getSpecializationIcon = (specialization) => {
    switch (specialization) {
      case 'Flight Control Systems':
        return Zap;
      case 'AI & Autonomy':
        return Code;
      case 'Cleaning Systems':
        return Wrench;
      case 'Micro-Drone Design':
        return Award;
      case 'Flight Software':
        return Code;
      case 'Client Relations':
        return Users;
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
            The brilliant minds behind Jaywings Technologys - combining decades of experience in aerospace, 
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
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 to-sky-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
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
                    <SpecializationIcon className="w-5 h-5 text-teal-400" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-teal-400 font-semibold mb-2">{member.title}</p>
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
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0"></div>
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
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover/social:text-teal-400 transition-colors duration-200" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-all duration-200 group/social"
                    >
                      <Mail className="w-4 h-4 text-slate-400 group-hover/social:text-teal-400 transition-colors duration-200" />
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
              <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-slate-400">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-400 mb-2">100+</div>
              <div className="text-slate-400">Patents & Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-slate-400">Industry Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-400 mb-2">24/7</div>
              <div className="text-slate-400">Expert Support</div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-teal-900/20 to-sky-900/20 rounded-2xl p-8 border border-teal-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Innovation Team</h3>
            <p className="text-slate-300 mb-6">
              We're always looking for talented individuals who share our passion for pushing the boundaries of drone technology.
            </p>
            <button className="bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;