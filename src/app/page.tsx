import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react'
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6'


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Your Name
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
              <Link href="#experience" className="text-gray-600 hover:text-blue-600">Experience</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Name</h1>
          <p className="text-xl text-gray-600 mb-6">Your Title or Tagline</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600">
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600">
              <FaSquareXTwitter className="w-10 h-10" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600">
              <FaSquareGithub className="w-10 h-10" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Write a brief introduction about yourself here. What drives you? What are you passionate about? 
            What are your key skills and experiences? This is your chance to tell your story and connect 
            with visitors to your site.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">Description of your first project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">TypeScript</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">Description of your second project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Tailwind</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600 mb-4">Description of your third project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-200 pl-4">
              <h3 className="text-xl font-semibold">Job Title</h3>
              <p className="text-gray-600">Company Name • 2020 - Present</p>
              <p className="mt-2">Description of your role and key achievements.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Get in touch at{' '}
            <a href="mailto:your.email@example.com" 
               className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}