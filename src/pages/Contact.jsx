import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white pb-32">
      {/* Hero Section */}
      <section className="bg-white pt-40 pb-32 text-center">
        <h1 
          className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Contact <span style={{ color: '#2563eb' }}>Us</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
          Get in touch with the AIQSEC 2026 team for any queries or support.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 max-w-6xl -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1 block">Address</span>
                    <h3 className="font-bold text-slate-900 leading-snug mb-1">
                      GCW3+WM6 KLH University Bowrampet<br />
                      Hyderabad, ALEAP Industrial Area,<br />
                      Gajularamaram, Hyderabad, Telangana 500043
                    </h3>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">Visit us at our location</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1 block">Email</span>
                    <h3 className="font-bold text-slate-900 mb-1">contact@aiqsec2026.org</h3>
                    <p className="text-sm text-slate-500">Drop us a message anytime</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1 block">Phone</span>
                    <h3 className="font-bold text-slate-900 mb-1">+91 123 456 7890</h3>
                    <p className="text-sm text-slate-500">Mon - Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-slate-700" />
                <h3 className="font-bold text-slate-900">Working Hours</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-slate-900">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span>Saturday</span>
                  <span className="font-bold text-slate-900">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span>Sunday</span>
                  <span className="italic text-slate-400">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-100 mb-8 pb-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Our Location</h2>
              </div>
              <a 
                href="https://maps.google.com/?q=KLH+University+Bowrampet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                Open in Google Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=KLH%20University%20Bowrampet%20Hyderabad%2C%20ALEAP%20Industrial%20Area%2C%20Gajularamaram%2C%20Hyderabad%2C%20Telangana%20500043&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KLH University Location"
                className="transition-opacity duration-300"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
