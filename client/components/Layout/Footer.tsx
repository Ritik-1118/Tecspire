import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#09120E] text-white pt-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Intro */ }
                <div>
                    <h2 className="text-2xl font-bold flex items-end">
                        <img src="/assets/logo.png" alt="TecSpare" className="w-16" />
                        <span className='text-3xl mb-2 font-bold'>TECSPIRE</span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        Join thousands who have transformed their lives with our high-quality online Services...
                    </p>
                </div>

                {/* Our Courses */ }
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Courses</h3>
                    <ul className="space-y-2">
                        <li>Full Stack Developer Course</li>
                        <li>Data Science Course</li>
                        <li>Digital Marketing Course</li>
                        <li>Machine Learning Course</li>
                        <li>UX/UI Designer Course</li>
                    </ul>
                </div>

                {/* Upcoming Courses */ }
                <div>
                    <h3 className="text-xl font-semibold mb-4">Upcoming Courses</h3>
                    <ul className="space-y-2">
                        <li>Java Development</li>
                        <li>HR Analyst</li>
                        <li>Business Analyst</li>
                        <li>Finance Analyst</li>
                        <li>Prompt Engineering</li>
                    </ul>
                </div>

                {/* Quick Links */ }
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Services</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Conditions</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */ }
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                Infinity Tower, Tech Park, Sector 21, Noida, Uttar Pradesh 201301
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2" />
                                +91 6103 890102
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                hello@tecspire.com
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons */ }
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Copyright */ }
                <p className="text-center text-gray-500 mt-8">
                    © 2024–2025, TecSpare Pvt. Ltd.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
