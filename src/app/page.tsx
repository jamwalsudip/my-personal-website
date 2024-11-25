import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaLinkedin, FaSquareXTwitter, FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-16">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                Sudip S Jamwal
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-blue-400">About</Link>
              <Link href="#projects" className="text-gray-300 hover:text-blue-400">Projects</Link>
              <Link href="#experience" className="text-gray-300 hover:text-blue-400">Experience</Link>
              <Link href="#contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-60 h-60 mx-auto mb-6">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Sudip S Jamwal</h1>
          <p className="text-xl text-gray-300 mb-6">Product | Strategy | Growth</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Main Content */}
      {/* Commenting out the entire section */}
      {/*
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Write a brief introduction about yourself here. What drives you? What are you passionate about? 
            What are your key skills and experiences? This is your chance to tell your story and connect 
            with visitors to your site.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 1</h3>
              <p className="text-gray-300 mb-4">Description of your first project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">React</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">TypeScript</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 2</h3>
              <p className="text-gray-300 mb-4">Description of your second project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Next.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Tailwind</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 3</h3>
              <p className="text-gray-300 mb-4">Description of your third project goes here.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Node.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-700 pl-4">
              <h3 className="text-xl font-semibold text-white">Job Title</h3>
              <p className="text-gray-300">Company Name • 2020 - Present</p>
              <p className="mt-2 text-gray-300">Description of your role and key achievements.</p>
            </div>
          </div>
        </section>
      </div>
      */}

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Contact</h2>
        <p className="text-gray-300 flex items-center gap-2 text-center">
          <Mail className="w-5 h-5" />
          Wanna chat? &nbsp;&nbsp; Come
          <a href="mailto:sayhi@meetsudip.me" 
             className="text-blue-400 hover:underline">
            sayhi@meetsudip.me
          </a>
        </p>
      </section>
      </div>

      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/meetsudip/" target="_blank" rel="noopener noreferrer"
           className="text-gray-300 hover:text-blue-400">
          <FaLinkedin className="w-10 h-10" />
        </a>
        <a href="https://x.com/JamwalSudip" target="_blank" rel="noopener noreferrer"
           className="text-gray-300 hover:text-blue-400">
          <FaSquareXTwitter className="w-10 h-10" />
        </a>
        <a href="https://github.com/jamwalsudip" target="_blank" rel="noopener noreferrer" 
           className="text-gray-300 hover:text-blue-400">
          <FaSquareGithub className="w-10 h-10" />
        </a>
        <a href="https://www.instagram.com/shanusj28/" target="_blank" rel="noopener noreferrer"
           className="text-gray-300 hover:text-blue-400">
          <FaSquareInstagram className="w-10 h-10" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Sudip S Jamwal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}