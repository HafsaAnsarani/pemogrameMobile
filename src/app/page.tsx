export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-600 text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">My Online CV</h1>
        <p className="text-lg">Web Developer | React & Next.js Enthusiast</p>
      </header>

      {/* About Section */}
      <section id="about" className="p-8">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          Saya adalah seorang pengembang web dengan semangat tinggi terhadap teknologi modern seperti React dan Next.js.
          Fokus saya adalah membangun aplikasi web yang cepat, responsif, dan mudah digunakan.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Next.js</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Git, GitHub</li>
          <li>Node.js, Express</li>
        </ul>
      </section>

      {/* Services Section */}
      <section id="services" className="p-8">
        <h2 className="text-2xl font-bold mb-2">Services</h2>
        <ul className="space-y-2">
          <li>✅ Web Development</li>
          <li>✅ Frontend UI Design</li>
          <li>✅ Website Optimization</li>
          <li>✅ Mobile-Responsive Design</li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
        <div className="space-y-2">
          <div>
            <h3 className="font-semibold">📌 Project 1: Portfolio Website</h3>
            <p>
              Website pribadi yang menampilkan proyek dan skill saya.{' '}
              <a href="https://github.com/username/project1" className="text-blue-500 underline" target="_blank">
                View on GitHub
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-semibold">📌 Project 2: Todo App</h3>
            <p>
              Aplikasi to-do berbasis React.{' '}
              <a href="https://github.com/username/todo-app" className="text-blue-500 underline" target="_blank">
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p>Email: <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500" target="_blank">yourprofile</a></p>
        <p>WhatsApp: 0812-xxxx-xxxx</p>
      </section>

      <footer className="bg-gray-200 text-center py-4 mt-12">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </main>
  )
}
