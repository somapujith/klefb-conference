import { MapPin, Calendar, Wifi, Coffee, Shield, Building2, Bus, Sparkles, Plane, Train, Car, ExternalLink } from 'lucide-react';

export function Venue() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6 text-blue-500" />,
      title: "High-Speed WiFi",
      description: "Gigabit-speed internet connectivity across the entire campus."
    },
    {
      icon: <Coffee className="w-6 h-6 text-blue-500" />,
      title: "Catering Services",
      description: "Dedicated spaces for all cuisine dining options parallel to your event itineraries."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Security",
      description: "24/7 campus security and surveillance."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: "Hotel Partners",
      description: "Partnering with local convenient access for easily locating top-rated hotels."
    },
    {
      icon: <Bus className="w-6 h-6 text-blue-500" />,
      title: "Transportation Support",
      description: "Well-connected by road with cab facilities and local transport."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
      title: "Modern Facilities",
      description: "Advanced conference halls and excellent infrastructure."
    }
  ];

  const explore = [
    {
      title: "Charminar",
      image: "/images/charminar_1779875241408.png",
      description: "Historic landmark and global icon of Hyderabad."
    },
    {
      title: "Golconda Fort",
      image: "/images/golconda_fort_1779875256483.png",
      description: "A ruined stone fort featuring panoramic views."
    },
    {
      title: "Hussain Sagar Lake",
      image: "/images/hussain_sagar_1779875272909.png",
      description: "Scenic lake with the majestic Buddha statue."
    },
    {
      title: "Ramoji Film City",
      image: "/images/ramoji_film_city_1779875298962.png",
      description: "World's largest integrated film studio complex."
    },
    {
      title: "Salar Jung Museum",
      image: "/images/salar_jung_1779875315942.png",
      description: "One of the largest art museums in the world."
    },
    {
      title: "HITEC City",
      image: "/images/hitec_city_1779875334268.png",
      description: "Modern technology hub and the vibrant IT district."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="heading-large text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Conference <span className="text-blue-600">Venue</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium tracking-wide">
            KL Deemed to be University, Hyderabad - A Hub for Innovation and Technology
          </p>
        </div>
      </section>

      {/* Main Venue Spotlight */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                KLH University Bachupally Campus
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Located in the fast-growing educational and technology corridor of Hyderabad, the KL University Hyderabad Campus beautifully provides an excellent environment for hosting international academic and technology conferences.
                <br /><br />
                The campus features state-of-the-art auditoriums, advanced conference halls, easy accessibility, and proximity to hotels, restaurants, and city attractions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-slate-500 text-sm">Koneru Lakshmaiah Education Foundation, Bowrampet, Hyderabad 500043</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dates</h4>
                    <p className="text-slate-500 text-sm">August 20 - 21, 2027</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-[3rem] blur-3xl opacity-50 -z-10 transform translate-x-4 translate-y-4"></div>
                <img 
                  src="/klh.png" 
                  alt="KL University Hyderabad" 
                  className="w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-white/50 bg-white object-contain p-8"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Venue Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Venue Features
            </h2>
            <p className="text-slate-500">Modern facilities designed for a productive conference experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center group">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Subtle Light Atmospheric Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Getting There
            </h2>
            <div className="w-16 h-1 bg-blue-600/30 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Air Travel */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100/50 mx-auto">
                <Plane className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Air Travel</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">Rajiv Gandhi International Airport (RGIA) (2 hours)</span>
                </li>
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">Direct flights from most major hubs across India</span>
                </li>
              </ul>
            </div>

            {/* Public Transit */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100/50 mx-auto">
                <Train className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Public Transit</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">Secunderabad Railway Station (1.5 hours)</span>
                </li>
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">TSRTC buses are easily available</span>
                </li>
              </ul>
            </div>

            {/* Driving */}
            <div className="bg-white rounded-[2rem] p-10 border border-slate-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100/50 mx-auto">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Driving</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">Campus parking available</span>
                </li>
                <li className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                  <span className="text-slate-500 leading-relaxed text-sm md:text-base">Cab services easily available for local and inter-city travel</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Hyderabad */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Explore Hyderabad
            </h2>
            <p className="text-slate-500">Popular attractions to visit during your stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {explore.map((item, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-blue-600 shadow-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
