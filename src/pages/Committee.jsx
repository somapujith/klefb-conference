import { Award, Users, BookOpen, Star, Briefcase, Globe, Mail } from 'lucide-react';

export function Committee() {
  const committeeData = [
    {
      title: "Honorary Chairs",
      type: "vip",
      icon: <Award className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Lydia Ray", role: "PROFESSOR, COMPUTER SCIENCES SCHOOL", affiliation: "Columbus State University, Georgia, USA" },
        { name: "Osvaldo Gervasi", role: "PROFESSOR", affiliation: "University of Perugia, Italy" }
      ]
    },
    {
      title: "General Co-Chairs",
      type: "vip",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Dr. Obsagilo", role: "ASSISTANT PROFESSOR", affiliation: "Wolleg University, Euthopia" },
        { name: "Dr. L. Kotewara Rao", role: "ORGANIZING CHAIR", affiliation: "AIQSEC" },
        { name: "Dr. Sk. Khaja Shareef", role: "ORGANIZING CHAIR", affiliation: "AIQSEC" },
        { name: "Dr. Yeluri Prasanna", role: "PROFESSOR", affiliation: "AIQSEC" }
      ]
    },
    {
      title: "Program & Publication",
      type: "vip",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Dr. Ramesh Vatambeti", role: "PROFESSOR, DEPT OF CSE", affiliation: "Tezpur University, Assam, India" },
        { name: "Dr. Koteswararao CH", role: "ASSOCIATE PROFESSOR, DEPT OF IT", affiliation: "Guru Ghasidas Vishwavidyalaya, Bilaspur" }
      ]
    },
    {
      title: "Advisory Committee",
      type: "list",
      icon: <Star className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Dr. Sreenath Itekala", affiliation: "AIQSEC" },
        { name: "Dr. Srinivas Sunkara", affiliation: "AIQSEC" },
        { name: "Dr. Mudulkar Raju", affiliation: "AIQSEC" },
        { name: "Dr. Subbarayudu", affiliation: "AIQSEC" },
        { name: "Dr. Rameshbabu", affiliation: "Narsimha Reddy Clg" },
        { name: "P Sirisha", affiliation: "AIQSEC" },
        { name: "Dr. Sri Ram Murthy", affiliation: "AIQSEC" }
      ]
    },
    {
      title: "Technical Program Committee",
      type: "list",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Dr. AnandaKumar", affiliation: "NIT K Surathkal" },
        { name: "Dr. Pranesh Das", affiliation: "NIT Calicut" },
        { name: "Dr. Jayakumar Loganthan", affiliation: "NIT Agartala" },
        { name: "Dr. Mrinal Kanti Debbarma", affiliation: "NIT Agartala" },
        { name: "Dr Jagadeesh M S", role: "ASSOCIATE PROFESSOR", affiliation: "NITTTR Kolkata" },
        { name: "Dr. Vaibhav Soni", role: "ASSISTANT PROFESSOR", affiliation: "MANIT Bhopal" },
        { name: "Shridhar Sanshi", affiliation: "NITK Surathkal" },
        { name: "Dr. S. Ganapathy", role: "ASSOCIATE PROFESSOR", affiliation: "NITTTR Bhopal" }
      ]
    },
    {
      title: "Organizing Committee",
      type: "list",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      members: [
        { name: "Dr. Shivayya", affiliation: "AIQSEC" },
        { name: "Bedudoori Dwarakanth", affiliation: "AIQSEC" },
        { name: "Haritha", affiliation: "AIQSEC" },
        { name: "Dr. Jagan Mohan Reddy", affiliation: "AIQSEC" },
        { name: "Dr. Venkateshwara Rao", affiliation: "AIQSEC" },
        { name: "Gayathri", affiliation: "AIQSEC" },
        { name: "Dr. Vadlamudi MuniRaju Naidu", affiliation: "AIQSEC" },
        { name: "Anitha Cherukuri", affiliation: "AIQSEC" },
        { name: "Dr. Prabhu Mohandass", affiliation: "NIT Calicut" },
        { name: "Vardhmaan", affiliation: "AIQSEC" },
        { name: "Chandusha", affiliation: "AIQSEC" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-4 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="heading-large text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Conference <span className="text-blue-600 italic font-serif font-medium tracking-normal">Committee</span>
          </h1>
          <p className="subheading-large text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Meet the distinguished professionals organizing AIQSEC 2026.
          </p>
        </div>
      </section>

      {/* Committee Sections */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl space-y-24 md:space-y-32">
          
          {committeeData.map((section, idx) => (
            <div key={idx} className="flex flex-col items-center">
              
              {/* Section Header */}
              <div className="flex flex-col items-center mb-12 text-center">
                <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm flex items-center justify-center rounded-full mb-5">
                  {section.icon}
                </div>
                <h2 className="heading-large text-2xl md:text-3xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <div className="w-12 h-0.5 bg-blue-600 mt-5 rounded-full opacity-30"></div>
              </div>

              {/* VIP Layout (Horizontal Cards) */}
              {section.type === "vip" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                  {section.members.map((member, memberIdx) => (
                    <div 
                      key={memberIdx} 
                      className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-0.5"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                        {member.name}
                      </h3>
                      
                      {member.role && (
                        <p className="text-blue-600 text-[10px] tracking-widest font-bold uppercase mb-2">
                          {member.role}
                        </p>
                      )}
                      
                      {member.affiliation && (
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {member.affiliation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* List Layout (Directory Rows inside a massive clean container) */}
              {section.type === "list" && (
                <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-6 md:p-10 w-full max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
                    {section.members.map((member, memberIdx) => (
                      <div 
                        key={memberIdx}
                        className={`flex flex-col items-center text-center py-4 border-b border-slate-100 px-4 rounded-xl -mx-4 hover:bg-slate-50/50 transition-colors
                          ${memberIdx >= section.members.length - 2 ? 'md:border-0' : ''} 
                          ${memberIdx === section.members.length - 1 ? 'border-0' : ''}
                        `}
                      >
                        <span className="font-bold text-slate-900">{member.name}</span>
                        {member.affiliation && (
                          <span className="text-sm text-slate-500 mt-0.5">{member.affiliation}</span>
                        )}
                        {member.role && (
                          <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mt-1">
                            {member.role}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* Floating Join Our Committee Card */}
      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-slate-200 shadow-sm text-center relative overflow-hidden group hover:shadow-md transition-shadow">
            
            <div className="w-16 h-16 bg-slate-50 border border-slate-100 text-slate-700 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-6 h-6" />
            </div>
            
            <h3 className="heading-large text-3xl font-bold text-slate-900 mb-6 relative z-10">
              Join Our Committee
            </h3>
            
            <p className="body-large text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
              Interested in contributing to AIQSEC 2026? We welcome enthusiastic professionals to join our committee and help shape the future of tech.
            </p>
            
            <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 relative z-10 flex items-center gap-3 mx-auto">
              <Mail className="w-4 h-4 text-slate-400" />
              Contact Committee Chair
            </button>
            
          </div>
        </div>
      </section>

    </div>
  );
}
