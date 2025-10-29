const { useState, useEffect, useCallback } = React;

// --- DATA STRUCTURE ---
const appData = {
    strengths: [
        {
            key: 'regional',
            title: 'GCC Regional Mastery',
            icon: '🌍',
            summary: 'Deep, localized knowledge of customs regulations, infrastructure, and delivery networks across the Kingdom of Saudi Arabia, UAE, and the entire GCC.',
            detail: 'Our in-house compliance teams and established relationships with regional authorities ensure rapid customs clearance and minimize delays, giving you a competitive edge in one of the world\'s fastest-growing markets. We turn complexity into opportunity.'
        },
        {
            key: 'quality',
            title: 'Unwavering Quality',
            icon: '🛡️',
            summary: 'Adherence to stringent international and regional compliance standards, ensuring every shipment and storage unit meets the highest safety and reliability criteria.',
            detail: 'We are committed to full ISO 9001 quality management principles. This focus on process excellence means less shrinkage, higher security, and demonstrable reliability in our warehousing and transport operations, protecting your valuable assets.'
        },
        {
            key: 'tech',
            title: 'Integrated Technology',
            icon: '⚙️',
            summary: 'Leveraging advanced Warehouse Management Systems (WMS) and real-time GPS tracking for complete visibility and inventory control from origin to final destination.',
            detail: 'Our clients get secure, 24/7 access to their inventory and shipment tracking via a custom portal. Automated reporting and predictive analytics allow for proactive decision-making, transforming logistics data into operational intelligence.'
        }
    ],
    services: {
        warehousing: {
            headline: 'State-of-the-Art Secure Storage',
            description: 'From ambient to temperature-controlled environments, our modern facilities offer flexible, scalable, and secure storage solutions supported by precise inventory management and cross-docking capabilities.',
            bullets: ['High-Security Inventory Management', 'Flexible Short & Long-Term Leases', 'Efficient Cross-Docking'],
            cta: 'Learn About Warehousing',
            image: 'https://placehold.co/800x450/4f46e5/ffffff/png?text=Secure+Warehouse+Storage'
        },
        freight: {
            headline: 'Global Connectivity, Local Precision',
            description: 'Reliable and efficient freight management covering Air, Sea, and Land transport. We manage the entire process, including complex customs documentation, to ensure timely delivery throughout the world and the GCC.',
            bullets: ['FCL/LCL Ocean Freight', 'Air Cargo Consolidation & Charter', 'GCC Land Transport (FTL/LTL)', 'End-to-End Customs Clearance'],
            cta: 'View Logistics Solutions',
            image: 'https://placehold.co/800x450/3b82f6/ffffff/png?text=Intermodal+Freight+Containers'
        },
        vas: {
            headline: 'Customized Supply Chain Support',
            description: 'Go beyond basic logistics with tailored services like co-packing, labeling, kitting, reverse logistics, and specialized handling for sensitive or high-value goods.',
            bullets: ['Co-Packing and Kitting', 'Product Labeling & Inspection', 'Reverse Logistics Management', 'Specialized Handling & Project Cargo'],
            cta: 'Discover VAS',
            image: 'https://placehold.co/800x450/16a34a/ffffff/png?text=Value+Added+Services+and+Packaging'
        }
    }
};

// --- NAVIGATION COMPONENT ---
const Navigation = ({ scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Get Quote', id: 'quote-estimator', isButton: true },
        { name: 'Services', id: 'services-view', isButton: false },
        { name: 'Why Us', id: 'strengths-dashboard', isButton: false },
        { name: 'Contact', id: 'contact-us', isButton: false },
    ];

    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">Al Bayt Al Atiq</span>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                                    className={`hover:text-blue-600 transition ${item.id === 'quote-estimator' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 text-sm md:text-base md:px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                            onClick={() => handleNavClick('quote-estimator')}
                        >
                            Quote
                        </button>

                        {/* Mobile Menu Button (Hamburger) */}
                        <button
                            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-2 transition duration-150"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="text-2xl">☰</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`md:hidden bg-white shadow-inner pb-4 ${isMenuOpen ? '' : 'hidden'}`}>
                <div className="px-2 pt-2 space-y-1 sm:px-3 flex flex-col items-end">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                            className={`block py-2 px-3 text-base font-medium w-full text-right rounded-md ${item.id === 'quote-estimator' ? 'text-blue-600 hover:bg-gray-50' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// --- HERO / QUOTE ESTIMATOR COMPONENT ---
const QuoteEstimator = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Mock submission feedback, normally this would send data to a server
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="quote-estimator" className="py-16 md:py-24 bg-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                
                {/* Headline & Tagline Column */}
                <div className="md:pr-12">
                    <img src="https://placehold.co/800x450/4f46e5/FFFFFF/png?text=Modern+Logistics+Hub" alt="A modern warehouse facility and shipping containers representing logistics." className="w-full h-auto rounded-lg shadow-xl mb-6 object-cover" />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Quality Logistics & Warehousing Solutions Across the GCC.
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        Seamless supply chain management built on reliability, regional expertise, and cutting-edge operational standards.
                    </p>
                </div>

                {/* Mock Quote Form */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Service Estimator</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin / Destination</label>
                            {/* Input Fields - Stacked vertically on mobile, horizontal on medium+ */}
                            <div className="mt-1 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                                <input type="text" id="origin" placeholder="Origin Port/City (e.g., Dammam)" className="flex-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                                <span className="self-center text-gray-500 text-xl hidden md:block">→</span>
                                <input type="text" id="destination" placeholder="Destination (e.g., Dubai)" className="flex-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">Service Type</label>
                            <select id="service-type" className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" required>
                                <option value="warehousing">Warehousing & Storage</option>
                                <option value="freight">Freight Forwarding (Air/Sea)</option>
                                <option value="vas">Value-Added Services</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Approx. Volume (CBM/Tons)</label>
                            <input type="number" id="volume" placeholder="10 CBM" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01]">
                            Request a Custom Quote
                        </button>
                    </form>
                    {isSubmitted && (
                        <p id="quote-message" className="mt-4 text-sm text-center text-green-600 font-semibold transition duration-500">
                            Thank you! A GCC specialist will contact you shortly with an estimated plan.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- CORE STRENGTHS COMPONENT ---
const StrengthCard = ({ strength, isExpanded, onToggle }) => (
    <div
        className={`p-6 bg-white rounded-xl shadow-lg border border-blue-100 cursor-pointer transition-all duration-300 transform hover:shadow-xl ${isExpanded ? 'ring-4 ring-indigo-500/50' : ''}`}
        onClick={onToggle}
    >
        <div className="flex items-center mb-4">
            <span className="text-3xl">{strength.icon}</span>
            <h3 className="ml-4 text-xl font-bold text-gray-900">{strength.title}</h3>
        </div>
        <p className="text-gray-600">{strength.summary}</p>
        <div
            className="mt-3 overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: isExpanded ? '500px' : '0' }}
        >
            <p className="pt-3 border-t border-gray-100 text-sm text-gray-500">{strength.detail}</p>
        </div>
        <div className="mt-4 text-sm font-semibold text-indigo-600 flex items-center">
            {isExpanded ? 'Hide Details' : 'View Core Insight'}
            <span className={`ml-2 transform transition duration-300 ${isExpanded ? 'rotate-180' : ''}`}>&#9660;</span>
        </div>
    </div>
);

const StrengthsDashboard = ({ scrollToSection }) => {
    const [expandedKey, setExpandedKey] = useState(null);

    const toggleDetail = (key) => {
        setExpandedKey(key === expandedKey ? null : key);
    };

    return (
        <section id="strengths-dashboard" className="py-16 md:py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Core Strengths</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    This section highlights the three pillars that define Al Bayt Al Atiq's service quality. Click on any pillar to uncover the detailed insights that set us apart in the competitive GCC market.
                </p>

                <img src="https://placehold.co/1200x300/10b981/ffffff/png?text=Regional+Expertise" alt="A depiction of a regional map and secure technology interfaces." className="w-full h-auto rounded-xl shadow-lg mb-12 object-cover" />

                <div className="grid md:grid-cols-3 gap-8">
                    {appData.strengths.map((strength) => (
                        <StrengthCard
                            key={strength.key}
                            strength={strength}
                            isExpanded={expandedKey === strength.key}
                            onToggle={() => toggleDetail(strength.key)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- SERVICES VIEW COMPONENT ---
const ServicesView = ({ scrollToSection }) => {
    const [activeTab, setActiveTab] = useState('warehousing');
    const data = appData.services[activeTab];

    const renderServiceContent = () => (
        <div className="min-h-[250px] transition-opacity duration-500">
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.headline}</h3>
                    <p className="text-gray-700">{data.description}</p>
                    <ul className="mt-5 text-gray-800 list-none pl-0">
                        {data.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <span className="text-indigo-600 text-lg mr-2">&bull;</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-1 bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Focus</h4>
                    <p className="text-sm text-gray-600">This specialized solution is designed to optimize your {activeTab === 'freight' ? 'global movement and customs compliance' : activeTab === 'warehousing' ? 'inventory security and supply chain flexibility' : 'post-delivery and product preparation needs'}.</p>
                </div>
            </div>
            <img src={data.image} alt={`${data.headline} Image`} className="w-full h-auto mt-8 rounded-lg shadow-md object-cover" />
        </div>
    );

    return (
        <section id="services-view" className="py-16 md:py-20 bg-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Integrated Service Portfolio</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Explore our comprehensive solutions. Use the tabs below to compare how our Warehousing, Freight, and Value-Added Services integrate to form a seamless supply chain for your business.
                </p>

                <div className="bg-white rounded-xl shadow-xl p-4 md:p-8">
                    {/* Tabs */}
                    <div id="service-tabs" className="flex justify-between sm:justify-start border-b border-gray-200 mb-6 space-x-2 sm:space-x-4">
                        {Object.keys(appData.services).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`py-2 px-3 text-xs sm:text-sm font-medium transition duration-150 
                                    ${activeTab === key
                                        ? 'text-gray-900 border-b-2 border-indigo-600'
                                        : 'text-gray-600 border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-300'
                                    }`
                                }
                            >
                                {appData.services[key].headline.split(' ')[0]} & {key === 'warehousing' ? 'Storage' : key === 'freight' ? 'Forwarding' : 'Services'}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    {renderServiceContent()}

                    <div className="text-center mt-8">
                        <button
                            onClick={() => scrollToSection('quote-estimator')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01]"
                        >
                            {data.cta}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- PROCESS FLOW COMPONENT ---
const ProcessFlow = () => {
    const steps = [
        { num: 1, title: 'Initial Request & Analysis', detail: 'Submission of requirements and scope assessment by our regional experts.' },
        { num: 2, title: 'Optimized Strategy & Planning', detail: 'Route optimization, customs preparation, and resource allocation using WMS/TMS.' },
        { num: 3, title: 'Execution & Monitoring', detail: 'Real-time tracking, secure handling, and continuous compliance checks in transit.' },
        { num: 4, title: 'Final Delivery & Feedback', detail: 'On-time, complete delivery with post-service review for optimization.' },
    ];

    return (
        <section id="process-flow" className="py-16 md:py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Reliable 4-Step Logistics Journey</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    Understanding the process is key to a smooth partnership. We guide your shipment through a clear, efficient, and monitored four-stage cycle. Hover over a step for detail.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.num} className="flow-step text-center group transition duration-300 p-4 rounded-lg hover:bg-gray-50">
                            <div className="flow-icon mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3 text-white text-2xl font-bold transition duration-300 shadow-md group-hover:scale-110 group-hover:bg-blue-600">
                                {step.num}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{step.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- FINAL CTA COMPONENT ---
const FinalCTA = ({ scrollToSection }) => (
    <section className="py-16 md:py-24 bg-indigo-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">Ready for Logistics That Delivers?</h2>
            <p className="text-xl text-indigo-200 mb-8">
                Speak to one of our GCC specialists to design a logistics or warehousing plan optimized for your business needs.
            </p>
            <button
                onClick={() => scrollToSection('quote-estimator')}
                className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg shadow-2xl transition duration-300 transform hover:scale-[1.03]"
            >
                Get Your Free Consultation Today
            </button>
        </div>
    </section>
);

// --- CONTACT US COMPONENT ---
const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Mock submission feedback
        e.target.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact-us" className="py-16 md:py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Contact Our Dubai Headquarters</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    We are strategically located in the heart of Dubai to serve your logistics needs efficiently across the entire GCC region. Reach out using the form below or visit us directly.
                </p>

                <div className="grid md:grid-cols-3 gap-12 bg-white p-8 rounded-xl shadow-xl">
                    {/* Address and Details Column */}
                    <div className="md:col-span-1 space-y-6">
                        <img src="https://placehold.co/800x400/2563eb/ffffff/png?text=Dubai+Office" alt="A modern office building in Dubai" className="w-full h-auto rounded-lg shadow-md mb-6 object-cover" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Primary Office</h3>
                            <p className="text-gray-700">
                                **Al Bayt Al Atiq Logistics**
                            </p>
                            <p className="text-gray-700">
                                Office No. 51, 4th Floor, <br />
                                Rasis Business Center, <br />
                                Al Barsha 1, Dubai, U.A.E.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">General Inquiries</h3>
                            <p className="text-gray-700">
                                Phone: +971 4 XXX XXXX
                            </p>
                            <p className="text-gray-700">
                                Email: info@albaytalatiq.com
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input type="text" id="contact-name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Business Email</label>
                                <input type="email" id="contact-email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message / Inquiry Details</label>
                                <textarea id="contact-message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01]">
                                Submit Inquiry
                            </button>
                        </form>
                        {isSubmitted && (
                            <p id="contact-message-confirmation" className="mt-4 text-sm text-center text-green-600 font-semibold transition duration-500">
                                Your message has been received! We will respond within one business day.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- FOOTER COMPONENT ---
const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
            <p>&copy; 2025 Al Bayt Al Atiq. All Rights Reserved. Quality Logistics & Warehousing Solutions.</p>
        </div>
    </footer>
);

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
    // Function to handle smooth scrolling to any section ID
    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="min-h-screen bg-blue-50 font-sans antialiased text-gray-800">
            <Navigation scrollToSection={scrollToSection} />
            <main>
                <QuoteEstimator />
                <StrengthsDashboard scrollToSection={scrollToSection} />
                <ServicesView scrollToSection={scrollToSection} />
                <ProcessFlow />
                <FinalCTA scrollToSection={scrollToSection} />
                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}
