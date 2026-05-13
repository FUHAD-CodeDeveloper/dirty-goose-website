import { useEffect, useState } from "react";

export default function HappyGooseWebsite() {
  // Click sound
  const playClick = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 180;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  };

  // Define Navigation Items with Links
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Tips", link: "#" },
    { name: "Tools", link: "#" },
    { name: "Videos", link: "" },
    { name: "Leaderboard", link: "#" },
    { name: "Contact", link: "" },
  ];

  // Calculator state
  const [dpi, setDpi] = useState(800);
  const [multiplier, setMultiplier] = useState(1);
  const [sensitivity, setSensitivity] = useState(null);

  const calculateSensitivity = () => {
    const result = (dpi / 800) * multiplier;
    setSensitivity(result.toFixed(2));
    playClick();
  };

  // Leaderboard
  const [players] = useState([
    { name: "ᴊᴀꜰᴇʀ", score: 9199 },
    { name: "ғᴜʜᴀᴅ", score: 8505 },
    { name: "ɴᴀᴊᴀᴅ", score: 8204 },
    { name: "ꜱʜɪʙʟɪ", score: 7999 },
    { name: "ɴᴀᴊɪʏᴀ", score: 7800 },
    { name: "ᴀᴢᴇᴇᴍ", score: 7898 }
    ]);

  // Particle background
  useEffect(() => {
    const canvas = document.getElementById("bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.5 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(59,130,246,0.5)";

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <canvas id="bg" className="absolute inset-0" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between p-6 bg-black/60 backdrop-blur border-b border-blue-500/30">
          <h1 className="text-2xl font-bold text-blue-400">HAPPY GOOSE</h1>
          <div className="flex gap-4 text-sm">
            {[
              "Home",
              "Tips",
              "Tools",
              "Videos", id: "http://www.youtube.com/@FU-HAD" },
              "Leaderboard",
              "Contact", id: "chat.whatsapp.com/K4X9ZADstIK5tPp4GKcQhY" }
            ].map((item, i) => (
              <a key={i} onClick={playClick} className="hover:text-blue-400 cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section className="text-center py-20">
          <h2 className="text-6xl font-extrabold text-blue-400">HAPPY GOOSE</h2>
          <p className="text-gray-300 mt-3">Gaming Tips • Tools • Leaderboards • Videos</p>
        </section>

        {/* Calculator Tool */}
        <section className="p-8 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/70 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">Sensitivity Calculator</h3>

            <input
              type="number"
              value={dpi}
              onChange={(e) => setDpi(Number(e.target.value))}
              className="w-full p-2 mb-2 text-black"
              placeholder="DPI"
            />

            <input
              type="number"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full p-2 mb-2 text-black"
              placeholder="Multiplier"
            />

            <button onClick={calculateSensitivity} className="bg-blue-500 px-4 py-2 rounded">
              Calculate
            </button>

            {sensitivity && (
              <p className="mt-3 text-green-400">Result: {sensitivity}</p>
            )}
          </div>

          <div className="bg-slate-900/70 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl text-blue-300 mb-3">FPS Booster</h3>
            <p className="text-gray-300">Optimize your game settings for max performance.</p>
            <button onClick={playClick} className="mt-4 bg-blue-500 px-4 py-2 rounded">
              Boost
            </button>
          </div>
        </section>

        {/* YouTube Section */}
<section className="p-8">
  <h3 className="text-3xl text-blue-400 mb-4">🎥 Gameplay Walkthrough Video</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Garten of Banban 1 Gameplay */}
    <iframe
      className="w-full h-64 rounded-xl"
      src="https://www.youtube.com/embed/w2AYRGUCymE"
      title="Kindergarten is CURSED! | Garten of Banban 1"
      allowFullScreen
    ></iframe>

    {/* Trees Hate Me Gameplay */}
    <iframe
      className="w-full h-64 rounded-xl"
      src="https://www.youtube.com/embed/bpR3v4RC7zk"
      title="Trees Hate Me.... (I also hate them too)"
      allowFullScreen
    ></iframe>
  </div>
</section>

        {/* Leaderboard */}
        <section className="p-8">
          <h3 className="text-3xl text-blue-400 mb-4">🏆 GOOSE POINT ASSIST</h3>

          <div className="bg-slate-900/70 rounded-xl p-4 border border-blue-500/30">
            {players.map((p, i) => (
              <div key={i} className="flex justify-between p-2 border-b border-blue-500/20">
                <span>#{i + 1} {p.name}</span>
                <span className="text-yellow-400">{p.score}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-6 text-gray-500 border-t border-blue-500/20">
          © 2026 HAPPY GOOSE • Made by ғᴜʜᴀᴅ-ᴛʜᴇ ᴄᴏᴅᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ
        </footer>
      </div>
    </div>
  );
}
