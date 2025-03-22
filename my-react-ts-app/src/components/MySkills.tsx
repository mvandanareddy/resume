
const Skills = () => (
  <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-10">
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-4 gap-8 p-8">
        <img src="/path/to/react-logo.png" alt="" className="w-20 h-20 object-contain" />
        <img src="/path/to/python-logo.png" alt="" className="w-20 h-20 object-contain" />
      </div>
    </div>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold mb-12 relative inline-block">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Skills
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Backend</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>Python</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full" style={{width: "95%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>Flask</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full" style={{width: "80%"}}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glass-card p-8 rounded-xl transform hover:scale-105 transition-all">
          <h3 className="text-2xl font-semibold mb-6 text-purple-400">Tools & Cloud</h3>
          <ul className="space-y-6">
            <li>
              <div className="flex justify-between mb-2">
                <span>AWS</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full" style={{width: "85%"}}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between mb-2">
                <span>Git</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                <div className="skill-bar-fill bg-gradient-to-r from-purple-500 to-purple-300 h-2.5 rounded-full" style={{width: "90%"}}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;