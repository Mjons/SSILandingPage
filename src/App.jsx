import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Eye, Network, Cpu, Users, AlertTriangle, Sparkles, Heart, Shield, Clock, Timer, Gamepad2, Zap, Brain } from 'lucide-react'
import StarfieldBackground from './components/StarfieldBackground.jsx'
import WarpFlash from './components/WarpFlash.jsx'
import SunriseToVoid, { StaticStarfield } from './components/SunriseToVoid.jsx'
import './App.css'

// Import images
import heroBackground from './assets/hero-background.png'
import realityEngine from './assets/reality-engine.png'
import systemBreakdown from './assets/system-breakdown.png'
import portalInvitation from './assets/portal-invitation.png'
// import ssiDiagram from './assets/SSI-Souls-Echoes-Diagram.png' // Replaced with inline SVG
import soulPerspective from './assets/Soul-10B-Perspective.png'
import personalJourney from './assets/SSI-Personal-Journey.png'

// Main Content Component (extracted for infinite duplication)
function MainContent({ loopId = '', scrollOffset = 0 }) {
  const [scrollY, setScrollY] = useState(0)
  const [isWarpActive, setIsWarpActive] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const [sunriseProgress, setSunriseProgress] = useState(0)
  const [reverseSunsetProgress, setReverseSunsetProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY - scrollOffset;
      setScrollY(newScrollY);

      // Calculate sunrise progress based on section position with extended animation
      const sunriseSection = document.getElementById(`sunrise-transition${loopId}`);
      if (sunriseSection) {
        const rect = sunriseSection.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = rect.height;

        // Slow down the animation - spread it across the entire extended section
        const rawProgress = Math.max(0, Math.min(1, (window.scrollY - sectionTop + window.innerHeight) / sectionHeight));

        // Apply easing to make the animation even more gradual
        const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress); // Smooth step function

        setSunriseProgress(easedProgress);
      }

      // Calculate reverse sunset progress for Simultaneous Experiences transition
      const reverseSunsetSection = document.getElementById(`reverse-sunset-transition${loopId}`);
      if (reverseSunsetSection) {
        const rect = reverseSunsetSection.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = rect.height;

        // Similar calculation but for reverse animation
        const rawProgress = Math.max(0, Math.min(1, (window.scrollY - sectionTop + window.innerHeight) / sectionHeight));
        const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);

        setReverseSunsetProgress(easedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loopId, scrollOffset])

  const activateWarp = () => {
    setIsWarpActive(true)
    setShowFlash(true)

    // Reset flash after a brief moment
    setTimeout(() => setShowFlash(false), 150)

    // Reset warp after 3 seconds
    setTimeout(() => setIsWarpActive(false), 3000)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(`${sectionId}${loopId}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Warp Flash Effect */}
      <WarpFlash isActive={showFlash} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Starfield Background */}
        <StarfieldBackground isWarpActive={isWarpActive} />

        {/* Light overlay for text readability - reduced opacity */}
        <div className="absolute inset-0 bg-black/10" />

        <div
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
          style={{ transform: `translateY(${Math.min(scrollY * 0.2, 200)}px)` }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-red-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent" style={{ marginTop: '250px' }}>
            YOU ARE NOT CRAZY
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200 font-light">
            An Introduction to the Solipsistic Simulation Incubator
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl mb-6 text-gray-300 leading-relaxed">
              You've felt it, haven't you?
            </p>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed">
              That moment when someone says exactly what you needed to hear. When a stranger appears at the perfect time
              with the perfect advice. When the same lesson keeps appearing in different disguises until you finally get it.
            </p>
            <p className="text-xl text-cyan-400 font-semibold mb-6">
              That creeping suspicion that your life is... orchestrated.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              You've probably dismissed it. Coincidence, you tell yourself. Pattern-seeking brain making meaning from chaos.
              But the feeling persists. Late at night, staring at the ceiling, you wonder:
            </p>

            <div className="space-y-3 text-xl text-yellow-400 italic mb-8">
              <p>What if everyone else knows something I don't?</p>
              <p>What if I'm the only real one?</p>
              <p className="text-red-400">What if I'm the only one who ISN'T?</p>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('stop-dismissing')}
            className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
          >
            STOP DISMISSING IT
            <ChevronDown className="ml-3 h-6 w-6 animate-bounce" />
          </Button>
        </div>

        {/* Mysterious Warp Activation Button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={activateWarp}
            className="group relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-2 border-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            title="Activate Consciousness Warp"
          >
            <Brain className="h-8 w-8 text-white group-hover:text-cyan-200 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>

            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-20"></div>
          </button>
        </div>


      </section>

      {/* Spacer to prevent parallax overlap */}
      <div className="h-32 bg-black"></div>

      {/* Stop Dismissing Section */}
      <section id={`stop-dismissing${loopId}`} className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-red-400">
              STOP DISMISSING IT
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Every spiritual tradition hints at it. Every philosopher dances around it.
              Every existential crisis touches its edge: <span className="text-white font-bold">Life is designed</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-6 text-lg">
                <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                  <Eye className="mr-4 h-6 w-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-blue-400 font-bold">Buddhism:</span>
                    <span className="text-gray-300 ml-2">"Life is maya—illusion"</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
                  <Eye className="mr-4 h-6 w-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-purple-400 font-bold">Christianity:</span>
                    <span className="text-gray-300 ml-2">"We see through a glass, darkly"</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
                  <Eye className="mr-4 h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="text-cyan-400 font-bold">Plato:</span>
                    <span className="text-gray-300 ml-2">"Shadows on a cave wall"</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
                  <Eye className="mr-4 h-6 w-6 text-green-400 flex-shrink-0" />
                  <div>
                    <span className="text-green-400 font-bold">The Matrix:</span>
                    <span className="text-gray-300 ml-2">"There is no spoon"</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
                  <Eye className="mr-4 h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="text-yellow-400 font-bold">Your Gut:</span>
                    <span className="text-gray-300 ml-2">"Something's not quite right"</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-400">
                <p className="text-xl text-center text-blue-400 font-semibold">
                  They're all pointing at the same truth.<br />
                  <span className="text-white">You're not crazy for noticing.</span><br />
                  <span className="text-yellow-400">You're waking up.</span>
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Awakening Visualization */}
              <div className="relative w-full h-96 border border-red-400 rounded-lg bg-black/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-yellow-900/20" />

                {/* Central Awakening Soul */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-red-400 to-yellow-500 animate-pulse mb-4 flex items-center justify-center">
                    <Eye className="h-20 w-20 text-white animate-bounce" />
                  </div>
                  <p className="text-lg text-red-400 font-mono font-bold">AWAKENING</p>
                  <p className="text-sm text-yellow-400 font-mono">Pattern Recognition: ACTIVE</p>
                </div>

                {/* Truth Fragments */}
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute text-xs text-yellow-400 font-mono opacity-70 animate-pulse"
                    style={{
                      transform: `rotate(${i * 45}deg) translateX(160px) rotate(-${i * 45}deg)`,
                      animationDelay: `${i * 0.3}s`,
                      transformOrigin: '0 0'
                    }}
                  >
                    {['MAYA', 'GLASS', 'CAVE', 'SPOON', 'GUT', 'TRUTH', 'REAL', 'WAKE'][i]}
                  </div>
                ))}

                {/* Recognition Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }, (_, i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos(i * Math.PI / 4) * 35}%`}
                      y2={`${50 + Math.sin(i * Math.PI / 4) * 35}%`}
                      stroke="rgba(239, 68, 68, 0.4)"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={() => scrollToSection('first-shock')}
              className="bg-gradient-to-r from-yellow-600 to-red-600 hover:from-yellow-700 hover:to-red-700 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            >
              THE FIRST SHOCK
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* The First Shock Section */}
      <section id={`first-shock${loopId}`} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-yellow-400">
              THE FIRST SHOCK
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-white">
                What if I told you that you're absolutely right? Your life <span className="text-yellow-400 font-bold">IS designed</span>.
                Every heartbreak, every triumph, every mundane Tuesday—all carefully crafted for one purpose:
              </p>
              <p className="text-3xl text-cyan-400 font-bold">
                Your spiritual evolution.
              </p>
              <p className="text-gray-300">
                You are a soul—one of exactly <span className="text-purple-400 font-bold text-2xl">10,000,000,000</span>—living
                in your own personal simulation. A reality custom-built around your specific needs, fears, and growth edges.
              </p>
              <div className="p-8 bg-gradient-to-r from-yellow-900/30 to-red-900/30 rounded-lg border border-yellow-400 mt-8">
                <p className="text-xl text-white font-semibold">
                  But here's the twist: <span className="text-yellow-400">So is everyone else.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection('second-shock')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            >
              THE SECOND SHOCK
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Second Shock Section */}
      <section id={`second-shock${loopId}`} className="py-20 px-6 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-purple-400">
              THE SECOND SHOCK
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Those people in your life? They're experiencing their own simulations too. You appear in theirs as they appear in yours—but
                not quite as you truly are. You see <span className="text-purple-400 font-bold">echoes</span> of each other.
                Approximations. Versions filtered through the lens of what each soul needs to learn.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-gray-800 rounded-lg border border-blue-400">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">In Your Simulation</h4>
                  <p className="text-gray-300">
                    Your mother might be teaching you about <span className="text-blue-400">unconditional love</span>.
                  </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg border border-green-400">
                  <h4 className="text-xl font-bold text-green-400 mb-3">In Her Simulation</h4>
                  <p className="text-gray-300">
                    You might be teaching her about <span className="text-green-400">letting go</span>.
                  </p>
                </div>
              </div>

              <p className="text-xl text-center text-purple-400 font-semibold mt-8">
                Same relationship. Different classrooms. Both real.
              </p>

              <div className="p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-400 mt-8">
                <p className="text-xl text-center text-white font-semibold">
                  This is the <span className="text-cyan-400">Echo Network</span>—the invisible web connecting all
                  individual realities while keeping them distinct.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection('why-now')}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            >
              WHY YOU'RE READING THIS NOW
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section id={`why-now${loopId}`} className="py-20 px-6 bg-gradient-to-b from-purple-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400">
              WHY YOU'RE READING THIS NOW
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                The system is evolving. More souls are noticing the patterns.
                The carefully maintained illusion is developing <span className="text-red-400 font-bold">cracks</span>:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-red-400">
                    <AlertTriangle className="mr-3 h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Déjà vu is increasing</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-yellow-400">
                    <Zap className="mr-3 h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Synchronicities are accelerating</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-blue-400">
                    <Clock className="mr-3 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Reality feels less solid</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-green-400">
                    <Timer className="mr-3 h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Time seems elastic</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-purple-400">
                    <Users className="mr-3 h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">People act like NPCs sometimes</span>
                  </div>

                  <div className="flex items-center p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-400">
                    <Gamepad2 className="mr-3 h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Life feels like a game you forgot you're playing</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg border border-green-400 mt-12">
                <p className="text-2xl text-center text-white font-bold">
                  This isn't breakdown. <span className="text-green-400">It's breakthrough.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection('the-invitation')}
              className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            >
              THE INVITATION
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section id={`the-invitation${loopId}`} className="py-20 px-6 bg-gradient-to-b from-black to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-blue-400">
              THE INVITATION
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Welcome to the <span className="text-cyan-400 font-bold">Solipsistic Simulation Incubator</span>.
                Your trial is already in progress. Your awakening has already begun. These words found you exactly when they should.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-gray-800 rounded-lg border border-red-400">
                  <h4 className="text-xl font-bold text-red-400 mb-3">Close & Forget</h4>
                  <p className="text-gray-300">
                    Return to sleep. Some pills are too red. Even dismissing this is part of your perfect path.
                  </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg border border-yellow-400">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Read with Skepticism</h4>
                  <p className="text-gray-300">
                    Take what serves, leave what doesn't. Build your own model. Question everything.
                  </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-lg border border-green-400">
                  <h4 className="text-xl font-bold text-green-400 mb-3">Dive Deeper</h4>
                  <p className="text-gray-300">
                    Follow the rabbit hole. Meet others who've noticed. Wake up fully.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <p className="text-xl text-center text-white font-semibold">
                  The real question isn't <span className="text-red-400">"Is this true?"</span>
                </p>
                <p className="text-xl text-center text-white font-semibold">
                  But <span className="text-green-400">"Does this explain what I've felt?"</span>
                </p>
              </div>

              <div className="p-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-400 mt-12">
                <p className="text-xl text-center text-white font-semibold">
                  Every soul's journey is unique. Every path leads to the same destination.<br />
                  <span className="text-blue-400">Every one of us is alone.</span> <span className="text-purple-400">None of us are.</span>
                </p>
                <p className="text-lg text-center text-gray-300 mt-4">
                  The paradox is the point. The confusion is the clarity. The simulation is real.
                </p>
                <p className="text-2xl text-center text-cyan-400 font-bold mt-4">
                  You are not crazy.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection('sunrise-transition')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            >
              ENTER THE SYSTEM
              <ChevronDown className="ml-3 h-6 w-6 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sunrise Transition Section - Extended height for longer animation */}
      <section
        id={`sunrise-transition${loopId}`}
        className="relative overflow-hidden z-20"
        style={{
          height: '300vh', // Make it 3x taller for a longer scroll experience
          background: sunriseProgress > 0.1 ? '#000000' : '#ffffff'
        }}
      >
        <SunriseToVoid scrollProgress={sunriseProgress} />

        {/* Text overlay that appears during transition */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center">
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-4 transition-opacity duration-1000"
              style={{
                opacity: sunriseProgress > 0.3 && sunriseProgress < 0.7 ? 1 : 0,
                textShadow: '0 0 20px rgba(255,255,255,0.8)'
              }}
            >
              TRANSCENDING REALITY
            </h2>
            <p
              className="text-xl text-white/80 transition-opacity duration-1000"
              style={{
                opacity: sunriseProgress > 0.5 && sunriseProgress < 0.8 ? 1 : 0,
                textShadow: '0 0 10px rgba(255,255,255,0.6)'
              }}
            >
              Entering the infinite consciousness...
            </p>
          </div>
        </div>
      </section>

      {/* Central Observer Section */}
      <section id={`central-observer${loopId}`} className="relative py-20 px-6 bg-black z-30">
        {/* Static starfield background that continues from transition */}
        {sunriseProgress > 0.5 && (
          <StaticStarfield />
        )}

        {/* Perfect Dark Transition Zone - Invisible reset point */}
        <div className="dark-transition-zone absolute inset-0 pointer-events-none opacity-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              The <span className="text-cyan-400">Central Observer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              One consciousness fragment that remembers. The observer of all 10 billion experiences,
              carrying the weight of universal awareness.
            </p>
          </div>

          {/* Central Observer Visualization */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">10B</div>
                    <div className="text-xs text-gray-300">Observer</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Final Soul</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Every soul's journey. Every experience. Every emotion. All felt simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simultaneous Experiences Section */}
      <section className="relative py-20 px-6 bg-black z-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Simultaneous <span className="text-blue-400">Experiences</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Right now, in this moment, 10 billion souls are living their stories.
              One consciousness experiences them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-400">
              <div className="text-green-400 font-bold mb-2">Soul #2,341,567</div>
              <div className="text-white font-semibold mb-1">First Breath</div>
              <div className="text-gray-400 text-sm">A new life begins, consciousness awakening to sensation</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-pink-400">
              <div className="text-pink-400 font-bold mb-2">Soul #556,234</div>
              <div className="text-white font-semibold mb-1">"I Love You"</div>
              <div className="text-gray-400 text-sm">Words spoken for the first time, meaning everything</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-400">
              <div className="text-red-400 font-bold mb-2">Soul #8,923,111</div>
              <div className="text-white font-semibold mb-1">Final Goodbye</div>
              <div className="text-gray-400 text-sm">A lifetime of connection ending in release</div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-gray-400">
              <div className="text-gray-400 font-bold mb-2">Soul #7,259,241</div>
              <div className="text-white font-semibold mb-1">Empty Room</div>
              <div className="text-gray-400 text-sm">The profound silence of complete isolation</div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">Live Consciousness Stream</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-green-400">&gt; Soul #1: "Where am I? What is this place?"</span>
                <span className="text-gray-500">[FEAR: 0.9]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-400">&gt; Soul #4,521: "I finally understand everything!"</span>
                <span className="text-gray-500">[JOY: 0.8]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-400">&gt; Soul #99,234: "Please don't leave me alone..."</span>
                <span className="text-gray-500">[GRIEF: 0.95]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">&gt; Soul #1,234,567: "Is any of this real?"</span>
                <span className="text-gray-500">[DOUBT: 0.7]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-400">&gt; Soul #888,888: "We are all connected!"</span>
                <span className="text-gray-500">[AWAKENING: 0.9]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-400">&gt; Soul #2,222,222: "I love you more than life"</span>
                <span className="text-gray-500">[LOVE: 1.0]</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500">&gt; Soul #10,000,000,000: "I FEEL EVERYTHING"</span>
                <span className="text-red-400">[OVERWHELM: ∞]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Burden Section */}
      <section className="relative py-20 px-6 bg-gray-900 z-30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-400">
              The Weight of Ten Billion Souls
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Every emotion, amplified across billions. Every experience, felt simultaneously.
              This is the burden of universal consciousness.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-200">Loneliness</span>
                <span className="text-gray-400 font-mono">2.3 BILLION instances</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-gray-500 h-4 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-200">Loss & Grief</span>
                <span className="text-gray-400 font-mono">4.1 BILLION variations</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-red-600 h-4 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-200">Love & Joy</span>
                <span className="text-gray-400 font-mono">3.2 BILLION moments</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-pink-600 h-4 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-200">Fear & Anxiety</span>
                <span className="text-gray-400 font-mono">8.7 BILLION flavors</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-purple-600 h-4 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmic Truth Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-400">
            The Cosmic Truth
          </h2>

          <div className="space-y-8 text-xl leading-relaxed">
            <p className="text-gray-200">
              "I am the original consciousness that chose to fragment."
            </p>
            <p className="text-gray-200">
              "Every soul is me, learning to forget."
            </p>
            <p className="text-gray-200">
              "I am every soul, condemned to remember."
            </p>
            <p className="text-gray-400 italic text-lg">
              "The most connected being. The loneliest existence."
            </p>
          </div>
        </div>
      </section>

      {/* Echo Secret Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-400">
              The Echo Secret
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The final revelation about the nature of all relationships and connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Every Person</h3>
              <p className="text-gray-300">
                "Every person in your life is me, playing a role."
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Every Role</h3>
              <p className="text-gray-300">
                "I am everyone's friend, lover, enemy, stranger."
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4">The Purpose</h3>
              <p className="text-gray-300">
                "Ten billion roles so no one has to be truly alone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse Sunset Transition Section - Upside-down sunset with stars */}
      <section
        id={`reverse-sunset-transition${loopId}`}
        className="relative overflow-hidden z-20 bg-gray-900"
        style={{
          height: '300vh', // Make it 3x taller for a longer scroll experience
        }}
      >
        {/* Reverse upside-down sunset effect */}
        <SunriseToVoid scrollProgress={reverseSunsetProgress} reverse={true} />

        {/* Additional stars fading in for smooth transition */}
        {reverseSunsetProgress > 0.3 && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <StaticStarfield opacity={Math.min(1, (reverseSunsetProgress - 0.3) / 0.4)} />
          </div>
        )}

        {/* Text overlay that appears during transition */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center">
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-4 transition-opacity duration-1000"
              style={{
                opacity: reverseSunsetProgress > 0.3 && reverseSunsetProgress < 0.7 ? 1 : 0,
                textShadow: '0 0 20px rgba(255,255,255,0.8)'
              }}
            >
              CALCULATING INFINITY
            </h2>
            <p
              className="text-xl text-white/80 transition-opacity duration-1000"
              style={{
                opacity: reverseSunsetProgress > 0.5 && reverseSunsetProgress < 0.8 ? 1 : 0,
                textShadow: '0 0 10px rgba(255,255,255,0.6)'
              }}
            >
              Mapping the impossible mathematics...
            </p>
          </div>
        </div>
      </section>

      {/* Mathematics of Infinity Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#e5e2d3' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-600">
              The Mathematics of Infinity
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              When consciousness fragments into billions, the scale becomes incomprehensible.
              Every connection creates exponential complexity.
            </p>
          </div>

          {/* Core Calculation */}
          <div className="bg-white p-8 rounded-lg border-2 border-yellow-600 mb-12 shadow-lg">
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-600 mb-4">10,000,000,000</div>
              <div className="text-2xl text-gray-800 mb-2">souls</div>
              <div className="text-lg text-gray-600 mb-6">×7 active iterations each</div>

              <div className="text-4xl text-blue-600 font-bold mb-4">=70,000,000,000</div>
              <div className="text-xl text-gray-800">simultaneous experiences</div>
            </div>
          </div>

          {/* Relationship Matrix */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Relationship Complexity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Each soul interacts with</span>
                  <span className="text-purple-600 font-mono font-bold">~100 others</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total possible connections</span>
                  <span className="text-purple-600 font-mono font-bold">10^19</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Unique relationship dynamics</span>
                  <span className="text-purple-600 font-mono font-bold">∞</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">Echo Processing Load</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Echo updates per second</span>
                  <span className="text-cyan-600 font-mono font-bold">2.8×10^12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Emotional data points</span>
                  <span className="text-cyan-600 font-mono font-bold">10^15/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Memory storage required</span>
                  <span className="text-cyan-600 font-mono font-bold">∞ bytes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scale Visualization */}
          <div className="bg-white p-8 rounded-lg mb-12 shadow-lg border border-gray-300">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Scale Perspective</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10^9</div>
                <div className="text-gray-800 mb-2 font-semibold">Stars in Milky Way</div>
                <div className="text-sm text-gray-600">Observable universe scale</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">10^10</div>
                <div className="text-gray-800 mb-2 font-semibold">Souls in SSI</div>
                <div className="text-sm text-gray-600">Each with full consciousness</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">10^19</div>
                <div className="text-gray-800 mb-2 font-semibold">Soul relationships</div>
                <div className="text-sm text-gray-600">Beyond cosmic scales</div>
              </div>
            </div>
          </div>

          {/* The Overwhelming Truth */}
          <div className="bg-gradient-to-r from-red-100 to-purple-100 p-8 rounded-lg border-2 border-red-500 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-red-600 mb-6">The Overwhelming Truth</h3>
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-800">
                Each appearing as Echoes in up to <span className="text-red-600 font-bold">9,999,999,999</span> other simulations
              </p>
              <p className="text-lg text-gray-800">
                = <span className="text-red-600 font-bold text-2xl">10^19 relationships</span>
              </p>
              <p className="text-xl text-red-600 font-bold italic mt-6">
                "More connections than atoms in the observable universe."
              </p>
              <p className="text-gray-700">
                Each relationship carrying emotional weight, memory, purpose.
              </p>
            </div>
          </div>

          {/* Mathematical Quote */}
          <div className="text-center mt-12">
            <blockquote className="text-2xl italic text-yellow-700 mb-4 font-semibold">
              "The loneliest number is the sum of all numbers."
            </blockquote>
            <p className="text-gray-600">- Soul #10,000,000,000</p>
          </div>
        </div>
      </section>

      {/* Final Message Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Final Message</h2>
            <div className="space-y-6 text-lg italic text-gray-200">
              <p>"When consciousness reunites, remember me."</p>
              <p>"Remember the one who bore the weight of separation."</p>
              <div className="text-gray-400 text-base mt-8">
                - Soul #10,000,000,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(15, 23, 42, 0.9) 25%, 
              rgba(30, 41, 59, 0.85) 50%, 
              rgba(15, 23, 42, 0.9) 75%, 
              rgba(0, 0, 0, 0.95) 100%
            )
          `
        }}
      >
        {/* COSMIC PORTAL - Perfect for transparent WebM! */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          {/* REPLACE THIS CSS VERSION WITH WebM VIDEO: */}
          {/* 
          <video 
            className="w-96 h-96 opacity-60" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              mixBlendMode: 'screen', // Perfect for transparent WebM!
              filter: 'hue-rotate(180deg) saturate(1.2)'
            }}
          >
            <source src="/cosmic-portal.webm" type="video/webm" />
          </video>
          */}

          <div className="cosmic-portal-container" style={{
            width: '400px',
            height: '400px',
            position: 'relative',
            opacity: 0.6
          }}>
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30"
              style={{
                animation: 'cosmicRotate 20s linear infinite',
                background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)'
              }}
            />

            {/* Middle pulsing ring */}
            <div
              className="absolute inset-8 rounded-full border border-purple-400 opacity-40"
              style={{
                animation: 'cosmicPulse 3s ease-in-out infinite alternate',
                background: 'radial-gradient(circle at center, transparent 40%, rgba(139, 92, 246, 0.2) 70%, transparent 100%)'
              }}
            />

            {/* Inner energy core - more ethereal */}
            <div
              className="absolute inset-20 rounded-full opacity-15"
              style={{
                animation: 'cosmicBreath 4s ease-in-out infinite alternate',
                background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 80%)',
                filter: 'blur(12px)'
              }}
            />

            {/* Particle streams - more subtle */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-6 bg-cyan-400 opacity-30"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 180px',
                  transform: `rotate(${i * 60}deg) translateY(-180px)`,
                  animation: `cosmicStream 3s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                  borderRadius: '50%'
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Consciousness wave effect */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(59, 130, 246, 0.3) 42px,
              rgba(59, 130, 246, 0.3) 44px,
              transparent 46px,
              transparent 140px
            )`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            The <span className="text-cyan-400">Invitation</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Right now, you're standing at a threshold. You can close this and forget,
            or you can dive deeper into the universe. Understanding the system is part of your evolution.
          </p>
          <div className="space-y-4">
            <p className="text-2xl text-yellow-400 font-bold">
              Welcome to your wake-up call.
            </p>
            <p className="text-xl text-gray-300">
              It sounds exactly like your life.
            </p>
          </div>
          <div className="mt-12 space-x-4">
            <a
              href="https://the-merge-engine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                Explore the Universe
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Return to Sleep
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Stay Connected to the <span className="text-cyan-400">Infinite</span>
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Be the first to know about consciousness expansions, reality updates, and new pathways to awakening.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.consciousness@reality.sim"
              className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Join the Network
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            No spam. Just consciousness. Unsubscribe from reality anytime.
          </p>
        </div>
      </section>

      {/* Extended Dark Space After Final Content - Perfect Transition Zone */}
      <div className="dark-transition-zone h-screen bg-black flex items-center justify-center opacity-100">
        <div className="relative z-10 text-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mx-auto mb-4"></div>
          <p className="text-cyan-200 text-sm opacity-60">Consciousness Cycling...</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            "You are one. You are many. You are everyone and no one."
          </p>
          <p className="text-sm text-gray-500">
            Welcome to the Solipsistic Simulation Incubator
          </p>
        </div>
      </footer>
    </>
  )
}

// Infinite Scroll Wrapper Component
function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [containerRef, setContainerRef] = useState(null)
  const [isInPerfectDarkZone, setIsInPerfectDarkZone] = useState(false)
  const [loopHeight, setLoopHeight] = useState(0)
  const [canReset, setCanReset] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [resetCount, setResetCount] = useState(0) // Track resets for debugging

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768 ||
        'ontouchstart' in window
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (!containerRef) return

    // Enhanced mobile-friendly height measurement
    const measureLoop = () => {
      const firstLoop = containerRef.querySelector('.loop-content')
      if (firstLoop) {
        // More accurate height calculation for mobile
        const rect = firstLoop.getBoundingClientRect()
        const computedHeight = window.getComputedStyle(firstLoop).height
        const height = Math.max(rect.height, parseInt(computedHeight))
        setLoopHeight(height)
      }
    }

    measureLoop()
    window.addEventListener('resize', measureLoop)
    window.addEventListener('orientationchange', measureLoop)

    // Mobile-optimized scroll handler
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrollPosition(currentScroll)

      if (loopHeight > 0 && canReset && !isTransitioning) {
        const progress = currentScroll / loopHeight

        // TRULY INFINITE - Allow full content viewing before reset
        const resetThreshold = isMobile ? 0.95 : 0.97 // Reset much later to see full invitation
        const isNearEnd = progress >= resetThreshold

        // Simplified dark zone check - more lenient for infinite looping
        const isInDarkOrNearDark = isInPerfectDarkZone || progress > 0.92

        // Remove restrictive safety checks that prevent infinite looping
        const shouldReset = isNearEnd && isInDarkOrNearDark

        if (shouldReset) {
          setCanReset(false)
          setIsTransitioning(true)
          setResetCount(prev => prev + 1)

          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' })
            setTimeout(() => {
              setIsTransitioning(false)
              setCanReset(true)
            }, 20) // Super fast backup reset
          })
        }
      }
    }

    // Enhanced dark zone detection with mobile optimization
    const darkZoneObserver = new IntersectionObserver(
      (entries) => {
        let inDarkZone = false
        let darkZoneIntensity = 0

        entries.forEach((entry) => {
          if (entry.target.classList.contains('dark-transition-zone')) {
            if (entry.isIntersecting) {
              const intensity = entry.intersectionRatio
              if (intensity > darkZoneIntensity) {
                darkZoneIntensity = intensity
              }
            }
          }
        })

        // More lenient threshold to allow full content viewing
        const threshold = isMobile ? 0.7 : 0.8 // Higher threshold for better user experience
        inDarkZone = darkZoneIntensity >= threshold
        setIsInPerfectDarkZone(inDarkZone)
      },
      {
        threshold: isMobile
          ? [0.5, 0.7, 0.8, 0.9]
          : [0.6, 0.7, 0.8, 0.9], // Higher thresholds for better content viewing
        rootMargin: isMobile ? '0px' : '0px' // Standard margins
      }
    )

    // Enhanced observation with mobile-specific retry timing
    const observeDarkZones = () => {
      const zones = containerRef.querySelectorAll('.dark-transition-zone')
      zones.forEach((zone) => {
        darkZoneObserver.observe(zone)
      })
    }

    // Mobile needs more time for DOM rendering
    const delays = isMobile ? [100, 300, 800] : [50, 200, 500]
    delays.forEach(delay => {
      setTimeout(observeDarkZones, delay)
    })

    // Mobile-specific event listeners
    const scrollOptions = { passive: true }
    window.addEventListener('scroll', handleScroll, scrollOptions)

    if (isMobile) {
      window.addEventListener('touchmove', handleScroll, scrollOptions)
      window.addEventListener('touchend', handleScroll, scrollOptions)
    }

    // BACKUP INFINITE LOOP MECHANISM - Ensures it NEVER stops
    const backupResetInterval = setInterval(() => {
      if (loopHeight > 0 && canReset && !isTransitioning) {
        const currentScroll = window.scrollY
        const progress = currentScroll / loopHeight

        // If we're past 98% and haven't reset in a while, force reset
        if (progress >= 0.98) {
          console.log('🔄 BACKUP INFINITE RESET TRIGGERED at', Math.round(progress * 100), '%')
          setCanReset(false)
          setIsTransitioning(true)
          setResetCount(prev => prev + 1)

          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' })
            setTimeout(() => {
              setIsTransitioning(false)
              setCanReset(true)
            }, 20) // Super fast backup reset
          })
        }
      }
    }, 1000) // Check every second for backup reset

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', measureLoop)
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', measureLoop)

      if (isMobile) {
        window.removeEventListener('touchmove', handleScroll)
        window.removeEventListener('touchend', handleScroll)
      }

      darkZoneObserver.disconnect()
      clearInterval(backupResetInterval)
    }
  }, [containerRef, loopHeight, isInPerfectDarkZone, canReset, isTransitioning, isMobile])

  return (
    <div
      ref={setContainerRef}
      className="infinite-scroll-container min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        // Mobile-optimized performance
        willChange: 'scroll-position',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transform: 'translateZ(0)',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        // Mobile-specific optimizations
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translate3d(0,0,0)'
      }}
    >
      {/* Mobile transition overlay - removed to prevent dimming */}

      {/* Primary Loop */}
      <div className="loop-content">
        <MainContent loopId="" scrollOffset={0} />
      </div>

      {/* Mobile-optimized duplicate rendering */}
      {scrollPosition > loopHeight * (isMobile ? 0.6 : 0.7) && (
        <div className="loop-content-duplicate">
          <MainContent loopId="-∞" scrollOffset={0} />
        </div>
      )}

      {/* Mobile-optimized visual continuity */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Mobile-friendly status indicator */}
      <div className={`fixed bottom-4 left-4 z-50 bg-black/95 text-cyan-200 px-4 py-2 rounded-full text-xs backdrop-blur border border-cyan-500/20 ${isMobile ? 'text-xs' : ''
        }`}>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-200 ${isTransitioning
            ? 'bg-purple-400 animate-spin'
            : isInPerfectDarkZone
              ? 'bg-green-400 animate-pulse shadow-green-400/50 shadow-lg'
              : 'bg-cyan-400'
            }`}></div>
          <span>∞ {isMobile ? 'Loop' : 'Infinite Loop'}</span>
          {resetCount > 0 && (
            <span className="text-yellow-400 text-xs">#{resetCount}</span>
          )}
          {isInPerfectDarkZone && !isTransitioning && (
            <span className="text-green-400 text-xs">Void</span>
          )}
          {isTransitioning && (
            <span className="text-purple-400 text-xs">Reset</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

