const { useState, useEffect } = React;

// ── SVG FAN CHARACTERS ──────────────────────────────────────────────────────

function FanPredict({ color = "#2563EB" }) {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140">
      {/* Body */}
      <rect x="35" y="60" width="50" height="55" rx="8" fill={color} />
      {/* Jersey number */}
      <text x="60" y="92" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">7</text>
      {/* Head */}
      <circle cx="60" cy="44" r="22" fill="#FBBF24" />
      {/* Hair */}
      <ellipse cx="60" cy="24" rx="18" ry="8" fill="#92400E" />
      {/* Eyes - excited */}
      <circle cx="52" cy="42" r="4" fill="white" />
      <circle cx="68" cy="42" r="4" fill="white" />
      <circle cx="53" cy="43" r="2.5" fill="#1E40AF" />
      <circle cx="69" cy="43" r="2.5" fill="#1E40AF" />
      {/* Big smile */}
      <path d="M50 52 Q60 62 70 52" stroke="#92400E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Arms raised */}
      <rect x="10" y="62" width="28" height="10" rx="5" fill={color} transform="rotate(-30 10 62)" />
      <rect x="82" y="62" width="28" height="10" rx="5" fill={color} transform="rotate(30 110 62)" />
      {/* Hands */}
      <circle cx="10" cy="55" r="8" fill="#FBBF24" />
      <circle cx="110" cy="55" r="8" fill="#FBBF24" />
      {/* Prediction card in left hand */}
      <rect x="-5" y="40" width="26" height="18" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
      <text x="8" y="51" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold">2-1</text>
      <text x="8" y="58" textAnchor="middle" fill="#6B7280" fontSize="5">prediction</text>
      {/* Legs */}
      <rect x="42" y="112" width="14" height="24" rx="6" fill="#1E3A5F" />
      <rect x="64" y="112" width="14" height="24" rx="6" fill="#1E3A5F" />
      {/* Boots */}
      <ellipse cx="49" cy="136" rx="10" ry="5" fill="#111827" />
      <ellipse cx="71" cy="136" rx="10" ry="5" fill="#111827" />
    </svg>
  );
}

function FanRating({ color = "#7C3AED" }) {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140">
      <rect x="35" y="60" width="50" height="55" rx="8" fill={color} />
      <text x="60" y="92" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">10</text>
      <circle cx="60" cy="44" r="22" fill="#FCA5A5" />
      <ellipse cx="60" cy="24" rx="18" ry="8" fill="#7C2D12" />
      {/* Ponytail */}
      <ellipse cx="60" cy="16" rx="6" ry="10" fill="#7C2D12" transform="rotate(20 60 20)" />
      <circle cx="52" cy="42" r="4" fill="white" />
      <circle cx="68" cy="42" r="4" fill="white" />
      <circle cx="52" cy="43" r="2.5" fill="#7C3AED" />
      <circle cx="68" cy="43" r="2.5" fill="#7C3AED" />
      {/* Smirk */}
      <path d="M52 53 Q62 60 70 53" stroke="#92400E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Arms holding clipboard */}
      <rect x="18" y="68" width="22" height="10" rx="5" fill={color} />
      <rect x="80" y="68" width="22" height="10" rx="5" fill={color} />
      <circle cx="18" cy="68" r="8" fill="#FCA5A5" />
      <circle cx="102" cy="68" r="8" fill="#FCA5A5" />
      {/* Rating clipboard */}
      <rect x="22" y="48" width="32" height="28" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="32" y="44" width="12" height="6" rx="2" fill="#D1D5DB" />
      <text x="38" y="61" textAnchor="middle" fill="#F59E0B" fontSize="10">★★★</text>
      <text x="38" y="71" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold">9.2</text>
      <rect x="42" y="112" width="14" height="24" rx="6" fill="#4C1D95" />
      <rect x="64" y="112" width="14" height="24" rx="6" fill="#4C1D95" />
      <ellipse cx="49" cy="136" rx="10" ry="5" fill="#111827" />
      <ellipse cx="71" cy="136" rx="10" ry="5" fill="#111827" />
    </svg>
  );
}

function FanTransfer({ color = "#059669" }) {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140">
      <rect x="35" y="60" width="50" height="55" rx="8" fill={color} />
      <text x="60" y="92" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">9</text>
      <circle cx="60" cy="44" r="22" fill="#86EFAC" />
      {/* Cap */}
      <ellipse cx="60" cy="26" rx="20" ry="8" fill="#065F46" />
      <rect x="40" y="22" width="40" height="8" rx="2" fill="#065F46" />
      <rect x="38" y="28" width="10" height="4" rx="2" fill="#065F46" />
      <circle cx="52" cy="44" r="4" fill="white" />
      <circle cx="68" cy="44" r="4" fill="white" />
      <circle cx="52" cy="45" r="2.5" fill="#065F46" />
      <circle cx="68" cy="45" r="2.5" fill="#065F46" />
      {/* Big thinking grin */}
      <path d="M50 53 Q60 61 70 53" stroke="#047857" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Arm pointing at newspaper */}
      <rect x="80" y="62" width="26" height="10" rx="5" fill={color} />
      <circle cx="108" cy="62" r="8" fill="#86EFAC" />
      {/* Transfer newspaper */}
      <rect x="68" y="38" width="45" height="32" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="70" y="40" width="41" height="8" rx="2" fill="#059669" />
      <text x="90" y="47" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">TRANSFER</text>
      <text x="90" y="56" textAnchor="middle" fill="#111827" fontSize="5.5">Mbappé →</text>
      <text x="90" y="63" textAnchor="middle" fill="#059669" fontSize="5.5" fontWeight="bold">PSG £200M</text>
      {/* Left arm */}
      <rect x="14" y="68" width="24" height="10" rx="5" fill={color} />
      <circle cx="14" cy="68" r="8" fill="#86EFAC" />
      <rect x="42" y="112" width="14" height="24" rx="6" fill="#064E3B" />
      <rect x="64" y="112" width="14" height="24" rx="6" fill="#064E3B" />
      <ellipse cx="49" cy="136" rx="10" ry="5" fill="#111827" />
      <ellipse cx="71" cy="136" rx="10" ry="5" fill="#111827" />
    </svg>
  );
}

function FanTactics({ color = "#DC2626" }) {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140">
      <rect x="35" y="60" width="50" height="55" rx="8" fill={color} />
      <text x="60" y="92" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">4</text>
      <circle cx="60" cy="44" r="22" fill="#FDE68A" />
      {/* Glasses */}
      <circle cx="52" cy="44" r="7" fill="none" stroke="#374151" strokeWidth="2" />
      <circle cx="68" cy="44" r="7" fill="none" stroke="#374151" strokeWidth="2" />
      <line x1="59" y1="44" x2="61" y2="44" stroke="#374151" strokeWidth="2" />
      <line x1="30" y1="44" x2="45" y2="44" stroke="#374151" strokeWidth="1.5" />
      <line x1="75" y1="44" x2="88" y2="44" stroke="#374151" strokeWidth="1.5" />
      <circle cx="52" cy="44" r="4" fill="white" />
      <circle cx="68" cy="44" r="4" fill="white" />
      <circle cx="52" cy="44" r="2" fill="#374151" />
      <circle cx="68" cy="44" r="2" fill="#374151" />
      {/* Hair */}
      <ellipse cx="60" cy="24" rx="20" ry="8" fill="#1F2937" />
      {/* Thinking face */}
      <path d="M52 54 Q60 60 68 54" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Arm holding tactics board */}
      <rect x="14" y="65" width="24" height="10" rx="5" fill={color} />
      <circle cx="14" cy="65" r="8" fill="#FDE68A" />
      {/* Tactics board */}
      <rect x="-8" y="40" width="36" height="30" rx="4" fill="#064E3B" stroke="#059669" strokeWidth="2" />
      {/* Formation dots */}
      <circle cx="10" cy="48" r="3" fill="white" />
      <circle cx="2" cy="55" r="3" fill="#FCD34D" />
      <circle cx="10" cy="55" r="3" fill="#FCD34D" />
      <circle cx="18" cy="55" r="3" fill="#FCD34D" />
      <circle cx="6" cy="62" r="3" fill="#86EFAC" />
      <circle cx="14" cy="62" r="3" fill="#86EFAC" />
      {/* Arrows on board */}
      <line x1="10" y1="50" x2="6" y2="54" stroke="#60A5FA" strokeWidth="1.5" markerEnd="url(#arr)" />
      {/* Right arm raised */}
      <rect x="82" y="58" width="22" height="10" rx="5" fill={color} transform="rotate(-20 82 58)" />
      <circle cx="102" cy="48" r="8" fill="#FDE68A" />
      <rect x="42" y="112" width="14" height="24" rx="6" fill="#7F1D1D" />
      <rect x="64" y="112" width="14" height="24" rx="6" fill="#7F1D1D" />
      <ellipse cx="49" cy="136" rx="10" ry="5" fill="#111827" />
      <ellipse cx="71" cy="136" rx="10" ry="5" fill="#111827" />
    </svg>
  );
}

function FanClub({ color = "#D97706" }) {
  return (
    <svg viewBox="0 0 120 140" width="120" height="140">
      <rect x="35" y="60" width="50" height="55" rx="8" fill={color} />
      <text x="60" y="92" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">1</text>
      <circle cx="60" cy="44" r="22" fill="#FCD34D" />
      {/* Crown */}
      <polygon points="42,26 50,14 60,20 70,14 78,26" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
      <circle cx="50" cy="14" r="3" fill="#EF4444" />
      <circle cx="70" cy="14" r="3" fill="#EF4444" />
      <circle cx="60" cy="20" r="3" fill="#3B82F6" />
      <circle cx="52" cy="44" r="4" fill="white" />
      <circle cx="68" cy="44" r="4" fill="white" />
      <circle cx="52" cy="45" r="2.5" fill="#92400E" />
      <circle cx="68" cy="45" r="2.5" fill="#92400E" />
      {/* Trophy smile */}
      <path d="M50 53 Q60 64 70 53" stroke="#92400E" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Arms holding trophy */}
      <rect x="12" y="62" width="26" height="10" rx="5" fill={color} />
      <rect x="82" y="62" width="26" height="10" rx="5" fill={color} />
      <circle cx="12" cy="62" r="8" fill="#FCD34D" />
      <circle cx="108" cy="62" r="8" fill="#FCD34D" />
      {/* Trophy */}
      <rect x="44" y="32" width="32" height="28" rx="4" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
      <text x="60" y="52" textAnchor="middle" fill="white" fontSize="18">🏆</text>
      <rect x="42" y="112" width="14" height="24" rx="6" fill="#78350F" />
      <rect x="64" y="112" width="14" height="24" rx="6" fill="#78350F" />
      <ellipse cx="49" cy="136" rx="10" ry="5" fill="#111827" />
      <ellipse cx="71" cy="136" rx="10" ry="5" fill="#111827" />
    </svg>
  );
}

// ── MINI SCENE ILLUSTRATIONS ─────────────────────────────────────────────────

function ScenePredict() {
  const [score1, setScore1] = useState(2);
  const [score2, setScore2] = useState(1);
  const [locked, setLocked] = useState(false);
  const [pts, setPts] = useState(null);
  const lock = () => {
    if (locked) return;
    setLocked(true);
    setTimeout(() => {
      const correct = Math.random() > 0.4;
      setPts(correct ? "+130 XP! 🎯" : "+50 XP locked");
    }, 1200);
  };
  return (
    <div style={{ background: "#EFF6FF", borderRadius: 16, padding: 20, textAlign: "center" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#1D4ED8", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase" }}>Live match · predict the score</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 16 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1E40AF", marginBottom: 6 }}>🔴 Man Utd</div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <button onClick={() => !locked && setScore1(Math.max(0, score1 - 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "#DBEAFE", border: "1px solid #93C5FD", fontWeight: 700, cursor: "pointer", fontSize: 16, color: "#1D4ED8" }}>-</button>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#1E40AF", width: 44, textAlign: "center" }}>{score1}</div>
            <button onClick={() => !locked && setScore1(Math.min(9, score1 + 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "#DBEAFE", border: "1px solid #93C5FD", fontWeight: 700, cursor: "pointer", fontSize: 16, color: "#1D4ED8" }}>+</button>
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#9CA3AF", fontWeight: 900 }}>:</div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#166534", marginBottom: 6 }}>🟢 Dortmund</div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <button onClick={() => !locked && setScore2(Math.max(0, score2 - 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "#DCFCE7", border: "1px solid #86EFAC", fontWeight: 700, cursor: "pointer", fontSize: 16, color: "#166534" }}>-</button>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#166534", width: 44, textAlign: "center" }}>{score2}</div>
            <button onClick={() => !locked && setScore2(Math.min(9, score2 + 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "#DCFCE7", border: "1px solid #86EFAC", fontWeight: 700, cursor: "pointer", fontSize: 16, color: "#166534" }}>+</button>
          </div>
        </div>
      </div>
      <button onClick={lock} disabled={locked} style={{ background: locked ? "#E5E7EB" : "#2563EB", color: locked ? "#9CA3AF" : "white", border: "none", borderRadius: 10, padding: "10px 28px", fontWeight: 700, fontSize: 14, cursor: locked ? "default" : "pointer", width: "100%" }}>
        {locked ? (pts || "Locking prediction…") : "Lock Prediction → +50 XP"}
      </button>
      {pts && <div style={{ marginTop: 10, fontSize: 13, fontWeight: 700, color: pts.includes("🎯") ? "#16A34A" : "#6B7280" }}>{pts}</div>}
    </div>
  );
}

function SceneRating() {
  const players = [{ name: "Haaland", pos: "ST", comm: 8.2 }, { name: "De Bruyne", pos: "CM", comm: 7.4 }, { name: "Foden", pos: "RW", comm: 7.8 }, { name: "Rodri", pos: "DM", comm: 6.9 }];
  const [ratings, setRatings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [eyeScore, setEyeScore] = useState(null);
  const submit = () => {
    if (Object.keys(ratings).length < 3) return;
    const devs = players.filter(p => ratings[p.name]).map(p => Math.abs((ratings[p.name] || 5) - p.comm));
    const avg = devs.reduce((a, b) => a + b, 0) / devs.length;
    setEyeScore(Math.max(0, Math.round(100 - avg * 28)));
    setSubmitted(true);
  };
  return (
    <div style={{ background: "#F5F3FF", borderRadius: 16, padding: 20 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#7C3AED", letterSpacing: 2, marginBottom: 12, textTransform: "uppercase", textAlign: "center" }}>Rate the players · Man City vs Real Madrid</div>
      {players.map(p => (
        <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 80, flexShrink: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#1F2937" }}>{p.name}</div>
            <div style={{ fontSize: 10, color: "#9CA3AF" }}>{p.pos}</div>
          </div>
          <div style={{ display: "flex", gap: 3, flex: 1 }}>
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <div key={n} onClick={() => !submitted && setRatings(r => ({ ...r, [p.name]: n }))}
                style={{ flex: 1, height: 20, borderRadius: 3, cursor: submitted ? "default" : "pointer", background: (ratings[p.name] || 0) >= n ? "#7C3AED" : "#DDD6FE", transition: "background 0.1s", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: (ratings[p.name] || 0) >= n ? "white" : "transparent", fontWeight: 700 }}>{n}</div>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#7C3AED", width: 20 }}>{ratings[p.name] || "–"}</div>
        </div>
      ))}
      {!submitted
        ? <button onClick={submit} style={{ width: "100%", background: "#7C3AED", color: "white", border: "none", borderRadius: 10, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 8 }}>Submit Ratings → +75 XP</button>
        : <div style={{ textAlign: "center", padding: "14px 0 4px" }}>
            <div style={{ fontSize: 42, fontWeight: 900, color: eyeScore >= 80 ? "#16A34A" : eyeScore >= 60 ? "#D97706" : "#DC2626" }}>{eyeScore}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#374151" }}>Football Eye Score</div>
            <div style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>{eyeScore >= 80 ? "Elite perception! You see the game like a pro 🔮" : eyeScore >= 60 ? "Sharp eye — close to community consensus 👁️" : "Keep watching — diverging from community 📚"}</div>
          </div>
      }
    </div>
  );
}

function SceneTransfer() {
  const [picked, setPicked] = useState(null);
  const [locked, setLocked] = useState(false);
  const options = ["Real Madrid", "PSG Return", "Premier League", "Stays at Madrid"];
  const pcts = [38, 24, 22, 16];
  const lock = (i) => { if (locked) return; setPicked(i); setLocked(true); };
  return (
    <div style={{ background: "#ECFDF5", borderRadius: 16, padding: 20 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#059669", letterSpacing: 2, marginBottom: 4, textTransform: "uppercase", textAlign: "center" }}>Transfer Window Call</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: "#064E3B", textAlign: "center", marginBottom: 4 }}>Mbappé's next club?</div>
      <div style={{ fontSize: 11, color: "#6B7280", textAlign: "center", marginBottom: 16 }}>Currently at Real Madrid · 8 days left in window</div>
      {options.map((opt, i) => (
        <div key={i} onClick={() => lock(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, marginBottom: 8, cursor: locked ? "default" : "pointer", background: picked === i ? "#D1FAE5" : "white", border: `1.5px solid ${picked === i ? "#059669" : "#E5E7EB"}`, transition: "all 0.2s" }}>
          <div style={{ flex: 1, fontSize: 13, fontWeight: picked === i ? 700 : 500, color: picked === i ? "#065F46" : "#374151" }}>{opt}</div>
          {locked && (
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 60, height: 6, background: "#E5E7EB", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: `${pcts[i]}%`, height: "100%", background: picked === i ? "#059669" : "#9CA3AF", borderRadius: 99 }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: picked === i ? "#059669" : "#9CA3AF", width: 28 }}>{pcts[i]}%</div>
            </div>
          )}
          {i === 1 && pcts[i] < 30 && locked && <div style={{ fontSize: 10, background: "#FEF3C7", color: "#D97706", borderRadius: 99, padding: "2px 6px", fontWeight: 700 }}>2× XP</div>}
        </div>
      ))}
      {locked && <div style={{ fontSize: 12, color: "#059669", textAlign: "center", marginTop: 6, fontWeight: 600 }}>✓ Call locked! Reveals at window close · +40 XP earned</div>}
    </div>
  );
}

function SceneTactics() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const analyze = async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6", max_tokens: 300,
          system: "You are a football tactics judge for The Gaffer app. Score the user's tactical analysis from 1–10 and give exactly 2 lines: Line 1: 'Score: X/10' then one sentence why. Line 2: One specific thing they missed. Be direct and use football terminology. Max 40 words total.",
          messages: [{ role: "user", content: text }]
        })
      });
      const d = await res.json();
      setScore(d.content?.[0]?.text || "Score: 7/10 — Good pressing triggers mentioned. Consider defensive shape on transitions.");
    } catch { setScore("Score: 7/10 — Solid tactical thinking! Work on transition shape."); }
    setLoading(false);
  };
  return (
    <div style={{ background: "#FFF1F2", borderRadius: 16, padding: 20 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#DC2626", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase", textAlign: "center" }}>Tactics AI Judge</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
        {["4-3-3","4-2-3-1","3-5-2"].map(f => (
          <div key={f} onClick={() => setText(prev => prev.includes(f) ? prev : `${f}: ${prev}`)} style={{ background: "#FFE4E6", color: "#BE123C", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1px solid #FECDD3" }}>{f}</div>
        ))}
        <div onClick={() => setText("4-3-3: High press using striker to trigger when CB faces backwards. Fullbacks push wide to overload. On losing ball, drop into 4-4-2 mid block.")} style={{ background: "#FEE2E2", color: "#991B1B", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid #FECACA" }}>Try example →</div>
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Describe your tactical plan — pressing triggers, formation, transitions..." rows={4} style={{ width: "100%", borderRadius: 10, border: "1.5px solid #FECDD3", padding: "10px 12px", fontSize: 13, color: "#1F2937", background: "white", outline: "none", resize: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
      <button onClick={analyze} disabled={loading || !text.trim()} style={{ width: "100%", background: loading || !text.trim() ? "#E5E7EB" : "#DC2626", color: loading || !text.trim() ? "#9CA3AF" : "white", border: "none", borderRadius: 10, padding: "10px 0", fontWeight: 700, fontSize: 14, cursor: loading || !text.trim() ? "default" : "pointer", marginTop: 8 }}>
        {loading ? "Analyzing your tactics…" : "Get AI Score → +80 XP"}
      </button>
      {score && <div style={{ marginTop: 12, background: "white", border: "1.5px solid #FECDD3", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#374151", lineHeight: 1.6 }}><span style={{ color: "#DC2626", fontWeight: 700 }}>♟️ AI Judge: </span>{score}</div>}
    </div>
  );
}

function SceneLeague() {
  const clubs = [
    { name: "Barcelona", flag: "🇪🇸", score: 74, fans: "487M", color: "#A50044" },
    { name: "Real Madrid", flag: "🇪🇸", score: 71, fans: "512M", color: "#00C6FF" },
    { name: "Liverpool", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 69, fans: "200M", color: "#C8102E" },
    { name: "Man United", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 66, fans: "659M", color: "#DA291C" },
    { name: "Bayern Munich", flag: "🇩🇪", score: 64, fans: "200M", color: "#DC052D" },
  ];
  return (
    <div style={{ background: "#FFFBEB", borderRadius: 16, padding: 20 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#D97706", letterSpacing: 2, marginBottom: 4, textTransform: "uppercase", textAlign: "center" }}>Club Knowledge Table · Season 2025/26</div>
      <div style={{ fontSize: 11, color: "#9CA3AF", textAlign: "center", marginBottom: 16 }}>Median accuracy of all fans competing for their club</div>
      {clubs.map((c, i) => (
        <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ fontWeight: 900, color: i === 0 ? "#D97706" : "#9CA3AF", width: 22, fontSize: i === 0 ? 18 : 14, textAlign: "center" }}>{i === 0 ? "🥇" : `#${i + 1}`}</div>
          <div style={{ fontSize: 18 }}>{c.flag}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1F2937" }}>{c.name}</div>
            <div style={{ fontSize: 10, color: "#9CA3AF" }}>{c.fans} fans competing</div>
          </div>
          <div style={{ width: 100 }}>
            <div style={{ height: 8, background: "#F3F4F6", borderRadius: 99, overflow: "hidden", marginBottom: 3 }}>
              <div style={{ width: `${c.score}%`, height: "100%", background: c.color, borderRadius: 99 }} />
            </div>
            <div style={{ fontSize: 11, color: "#6B7280", textAlign: "right", fontWeight: 700 }}>{c.score}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────────────────

const MODES = [
  { id: "predict", icon: "🎯", label: "Match Predictions", color: "#2563EB", bg: "#EFF6FF", fan: FanPredict, scene: ScenePredict,
    tagline: "Call the score before kick-off",
    desc: "Predict scoreline, first scorer & goal minute for every match. Your accuracy across 38 matchdays builds a permanent season record — like a league table of fan intelligence.",
    formula: [
      { label: "Result correct (W/D/L)", pts: "+30 pts" },
      { label: "Exact scoreline correct", pts: "+80 pts" },
      { label: "First scorer correct", pts: "+60 pts" },
      { label: "Goal minute within 5'", pts: "+20 pts" },
      { label: "Perfect call (all 4 correct)", pts: "+250 pts 🎯" },
    ],
    insight: "Partial credit keeps fans engaged. Getting the scorer right but score wrong still earns 60pts — this drives week-2 retention." },
  { id: "rate", icon: "⭐", label: "Player Ratings", color: "#7C3AED", bg: "#F5F3FF", fan: FanRating, scene: SceneRating,
    tagline: "Rate every player 1–10 after the match",
    desc: "Your Football Eye Score measures how closely your ratings align with the weighted global community average. The more accurate your eye, the higher your score.",
    formula: [
      { label: "Community mean (weighted by Eye Score)", pts: "Benchmark" },
      { label: "Your deviation per player", pts: "|You – Mean|" },
      { label: "Average deviation across 11 players", pts: "Raw score" },
      { label: "Eye Score = 100 – (avg deviation × 28)", pts: "0–100" },
      { label: "Cross-validated with WhoScored & SofaScore", pts: "Weekly ✓" },
    ],
    insight: "Users with higher Football Eye Scores count MORE toward the community benchmark — so the standard improves as the platform grows." },
  { id: "transfer", icon: "🔁", label: "Transfer Window", color: "#059669", bg: "#ECFDF5", fan: FanTransfer, scene: SceneTransfer,
    tagline: "Call player moves before the deadline",
    desc: "Predict destination, fee bracket, and contract decisions before the window closes. Your transfer accuracy is a permanent part of your fan identity.",
    formula: [
      { label: "Destination correct", pts: "+80 XP" },
      { label: "Fee bracket correct", pts: "+60 XP" },
      { label: "Contrarian correct (vs 80%+ crowd)", pts: "×2 multiplier" },
      { label: "Transfer accuracy = correct ÷ total", pts: "Season %" },
      { label: "Perfect window (all calls right)", pts: "Window Oracle 🔮" },
    ],
    insight: "Contrarian protection: if 90% pick the same option, correct answer earns less XP. Going against the crowd and being right earns 2× — rewards real knowledge." },
  { id: "tactics", icon: "♟️", label: "Tactics AI", color: "#DC2626", bg: "#FFF1F2", fan: FanTactics, scene: SceneTactics,
    tagline: "Write tactics · AI judges your football IQ",
    desc: "Write your pre-match tactical breakdown. Our AI scores you across 5 dimensions and gives specific feedback on what you got right and what you missed.",
    formula: [
      { label: "Tactical specificity (×2 weight)", pts: "Highest" },
      { label: "Formation logic (×1.5)", pts: "High" },
      { label: "Press / defensive shape (×1.5)", pts: "High" },
      { label: "Transition awareness (×1)", pts: "Standard" },
      { label: "Opponent exploitation (×1)", pts: "Standard" },
    ],
    insight: "AI is given the actual match context — formation, result, key moments. Vague analyses score low. Specific trigger points, roles, and shapes score high." },
  { id: "league", icon: "🏆", label: "Club League", color: "#D97706", bg: "#FFFBEB", fan: FanClub, scene: SceneLeague,
    tagline: "Your fanbase competes as a team",
    desc: "Every fan's accuracy contributes to their club's collective intelligence score — a parallel season table. Man City fans can beat Real Madrid fans even if the team loses.",
    formula: [
      { label: "Club score = MEDIAN (not average)", pts: "Honest" },
      { label: "Min 50 active fans required per club", pts: "Threshold" },
      { label: "Active = 1 prediction in last 14 days", pts: "Rule" },
      { label: "Anti-bot: 7-day account age minimum", pts: "Protection" },
      { label: "Lock 5 min before kick-off (API time)", pts: "Enforced" },
    ],
    insight: "Median is used because average gets inflated by one genius fan. Median reflects the TYPICAL fan of that club — much harder to game." },
];

const PRO_REASONS = [
  { icon: "📊", title: "Deep stats locked behind Pro", color: "#2563EB", desc: "Free shows rank #14,221. Pro shows Champions League accuracy 74%, away game accuracy 55%, better than 82% of your club's fans. The rank is bait — the detail is identity." },
  { icon: "🔮", title: "Oracle badge requires Pro", color: "#7C3AED", desc: "Most coveted status on the platform. A free user hitting 90% accuracy sees: 'You qualify for Oracle. Upgrade to claim it.' The badge is psychologically already theirs — conversion is extremely high." },
  { icon: "🎁", title: "Real-world rewards need Pro", color: "#059669", desc: "Signed jerseys, VIP matchday, training ground access — only for Pro subscribers in top positions. A user ranked #8 globally sees: 'You qualify for a signed shirt. Pro subscribers in top 10 are eligible.'" },
  { icon: "⏰", title: "48hr transfer early access", color: "#DC2626", desc: "Pro users see transfer rumours 48 hours before they go public. Time to research before the crowd forms consensus. The information edge compounds across a full transfer window." },
  { icon: "⚔️", title: "Rival head-to-head tracking", color: "#D97706", desc: "Challenge a friend or rival fan. Every prediction you both make is tracked head-to-head. 'You vs Ahmed (Man City fan) — You lead 14–9 this season.' Social competition = strongest retention mechanic." },
  { icon: "∞", title: "Unlimited Tactics AI + ad-free", color: "#059669", desc: "Free users get 3 Tactics AI analyses/month. Pro is unlimited and ad-free. These reinforce Pro value once status and rivalry already pushed toward upgrade." },
];

const REVENUE = [
  { stream: "Pro subscriptions", year1: "£96k", year3: "£2.4M", pct: 65, color: "#2563EB", note: "£3.99/mo · 2k → 50k users" },
  { stream: "White-label leagues", year1: "£25k", year3: "£400k", pct: 20, color: "#059669", note: "£500–2k/season · YouTube partners" },
  { stream: "Brand sponsorships", year1: "–", year3: "£300k", pct: 12, color: "#D97706", note: "£5k–50k/deal · Year 2 onwards" },
  { stream: "Fan data (anon.)", year1: "–", year3: "£100k+", pct: 3, color: "#7C3AED", note: "Aggregated only · 100k+ users needed" },
];

function GafferPitch() {
  const [activeMode, setActiveMode] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 640);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const mode = MODES[activeMode];
  const FanComp = mode.fan;
  const SceneComp = mode.scene;

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", color: "#111827" }}>

      {/* ── TOP NAV ── */}
      <div style={{ background: "white", borderBottom: "1.5px solid #E5E7EB", padding: isMobile ? "0 14px" : "0 24px", position: "sticky", top: 0, zIndex: 100, display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: isMobile ? "12px 0 6px" : "14px 0", marginRight: isMobile ? 0 : "auto" }}>
          <span style={{ fontSize: 24 }}>⚽</span>
          <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}>The <span style={{ color: "#2563EB" }}>Gaffer</span></span>
          <span style={{ background: "#EFF6FF", color: "#2563EB", fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "2px 8px", letterSpacing: 1, textTransform: "uppercase" }}>Pitch 2026</span>
        </div>
        <div style={{ display: "flex", overflowX: "auto", justifyContent: isMobile ? "space-between" : "flex-start" }}>
          {["overview","modes","revenue","funding"].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ background: "none", border: "none", padding: isMobile ? "12px 8px" : "18px 16px", fontSize: isMobile ? 12 : 13, fontWeight: activeTab === t ? 700 : 500, color: activeTab === t ? "#2563EB" : "#6B7280", borderBottom: `2px solid ${activeTab === t ? "#2563EB" : "transparent"}`, cursor: "pointer", textTransform: "capitalize", letterSpacing: 0.3, whiteSpace: "nowrap", flex: isMobile ? 1 : "none" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>

        {/* ══════════ OVERVIEW ══════════ */}
        {activeTab === "overview" && (<>

          {/* HERO */}
          <div style={{ textAlign: "center", padding: "60px 0 40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: 99, padding: "6px 18px", fontSize: 12, fontWeight: 700, color: "#1D4ED8", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 28 }}>⚽ Global Football Knowledge Competition</div>
            <h1 style={{ fontSize: "clamp(52px,10vw,96px)", fontWeight: 900, letterSpacing: -3, lineHeight: 0.92, marginBottom: 20 }}>THE<br /><span style={{ color: "#2563EB" }}>GAFFER</span></h1>
            <p style={{ fontSize: 18, color: "#6B7280", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 400 }}>5 billion football fans have opinions. We built the platform where those opinions become a competition.</p>

            {/* Fan characters hero */}
            <div style={{ display: "flex", justifyContent: "center", gap: 0, marginBottom: 40, flexWrap: "wrap" }}>
              {MODES.map((m, i) => {
                const F = m.fan;
                return (
                  <div key={m.id} onClick={() => { setActiveMode(i); setActiveTab("modes"); }} style={{ cursor: "pointer", transition: "transform 0.2s", padding: "0 4px" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                    <F color={m.color} />
                    <div style={{ textAlign: "center", fontSize: 10, fontWeight: 700, color: m.color, letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{m.icon}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {[["5B+", "football fans globally"], ["0", "gambling licences needed"], ["186", "countries targetable"], ["£3.1M", "Year 3 revenue"]].map(([n, l]) => (
                <div key={l} style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 16, padding: "16px 24px", textAlign: "center", minWidth: 120 }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#2563EB", letterSpacing: -1 }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2, fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* THE GAP */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>The opportunity</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 24 }}>Football fans have no place to compete</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 20 }}>
              {[["📊", "#E5E7EB", "Score apps", "FotMob, Flashscore — fast scores, zero community, no competition."],
                ["💬", "#E5E7EB", "Social media", "Twitter, Facebook — chaotic debate, no record, hot takes gone in 24hrs."],
                ["🎰", "#FEE2E2", "Betting apps", "Cash gambling, regulated everywhere, designed to make you lose."],
                ["✅", "#DBEAFE", "The Gaffer", "Skill-based knowledge competition. Status rewards. Global season leagues."]].map(([ic, bg, title, desc]) => (
                <div key={title} style={{ background: bg, borderRadius: 14, padding: 18, border: title === "The Gaffer" ? "2px solid #2563EB" : "1.5px solid #E5E7EB" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{ic}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: title === "The Gaffer" ? "#1D4ED8" : "#111827" }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: 14, padding: 18 }}>
              <span style={{ color: "#1D4ED8", fontWeight: 700 }}>The gap: </span>
              <span style={{ color: "#374151", fontSize: 14 }}>No platform rewards football knowledge as a skill, builds a permanent public record of your fan intelligence, or lets fans compete season-long without gambling. The Gaffer fills it.</span>
            </div>
          </div>

          {/* GLOBAL FANS */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>The audience</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 20 }}>Fans everywhere — finally connected</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[["🇳🇬","Nigeria","60M"],["🇧🇷","Brazil","180M"],["🏴󠁧󠁢󠁥󠁮󠁧󠁿","England","52M"],["🇮🇳","India","150M"],["🇩🇪","Germany","43M"],["🇦🇷","Argentina","44M"],["🇯🇵","Japan","35M"],["🇪🇸","Spain","41M"],["🇮🇩","Indonesia","77M"],["🇫🇷","France","38M"],["🇲🇽","Mexico","50M"],["🇵🇰","Pakistan","35M"],["🇰🇷","South Korea","30M"],["🌍","Rest of World","billions"]].map(([f, c, n]) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, background: "white", border: "1px solid #E5E7EB", borderRadius: 99, padding: "6px 14px", fontSize: 13, fontWeight: 500 }}>
                  <span style={{ fontSize: 18 }}>{f}</span> {c} <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 400 }}>{n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LEADERBOARD PREVIEW */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#D97706", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>The community</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1, marginBottom: 20 }}>Global Oracle League</h2>
            <div style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "#1D4ED8", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>🏆 Season 2025/26 · Top Gaffers Worldwide</div>
                <div style={{ color: "#93C5FD", fontSize: 12 }}>2.4M fans competing</div>
              </div>
              {[
                { rank: "🥇", flag: "🇲🇽", name: "FutbolGuru_MX", club: "FC Barcelona", acc: "81%", xp: "4,821", badge: "🔮" },
                { rank: "🥈", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "TerraceTactician", club: "Liverpool", acc: "79%", xp: "4,503", badge: "🔮" },
                { rank: "🥉", flag: "🇪🇸", name: "MadridOracle", club: "Real Madrid", acc: "77%", xp: "4,201", badge: "👑" },
                { rank: "#4", flag: "🇳🇬", name: "PremierBrain_NG", club: "Man United", acc: "72%", xp: "3,600", badge: "♟️" },
                { rank: "#5", flag: "🇧🇷", name: "SambaFootball", club: "PSG", acc: "71%", xp: "3,400", badge: "👁️" },
                { rank: "#6", flag: "🇯🇵", name: "GafferKing_JP", club: "Man City", acc: "70%", xp: "3,200", badge: "👁️" },
                { rank: "#7", flag: "🇮🇳", name: "BombayGaffer", club: "Liverpool", acc: "69%", xp: "3,050", badge: "👁️" },
                { rank: "#8", flag: "🇵🇰", name: "KarachiKing", club: "Barcelona", acc: "68%", xp: "2,900", badge: "🎓" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid #F3F4F6", background: i === 0 ? "#FFFBEB" : "white" }}>
                  <div style={{ fontSize: i < 3 ? 18 : 13, fontWeight: 700, color: i === 0 ? "#D97706" : "#9CA3AF", width: 28, textAlign: "center" }}>{r.rank}</div>
                  <div style={{ fontSize: 20 }}>{r.flag}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{r.name} <span style={{ fontSize: 14 }}>{r.badge}</span></div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{r.club}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#2563EB" }}>{r.xp} XP</div>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{r.acc} accuracy</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>)}

        {/* ══════════ MODES ══════════ */}
        {activeTab === "modes" && (<>
          <div style={{ paddingTop: 40, marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>How it works</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1.5, marginBottom: 6 }}>5 Ways to Compete</h2>
            <p style={{ color: "#6B7280", fontSize: 15 }}>Each mode tests a different dimension of football knowledge. Click a fan below.</p>
          </div>

          {/* MODE SELECTOR */}
          <div style={{ display: "flex", gap: 10, marginBottom: 32, overflowX: "auto", paddingBottom: 4 }}>
            {MODES.map((m, i) => (
              <div key={m.id} onClick={() => setActiveMode(i)} style={{ flexShrink: 0, display: "flex", flex: 1, flexDirection: "column", alignItems: "center", gap: 4, padding: "14px 10px", background: activeMode === i ? m.bg : "white", border: `2px solid ${activeMode === i ? m.color : "#E5E7EB"}`, borderRadius: 14, cursor: "pointer", transition: "all 0.2s", minWidth: 90 }}>
                <span style={{ fontSize: 24 }}>{m.icon}</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: activeMode === i ? m.color : "#9CA3AF", textAlign: "center", letterSpacing: 0.5, textTransform: "uppercase" }}>{m.label.split(" ")[0]}</span>
              </div>
            ))}
          </div>

          {/* ACTIVE MODE */}
          <div style={{ background: mode.bg, border: `2px solid ${mode.color}22`, borderRadius: 20, padding: isMobile ? 18 : 28, marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
              <div style={{ flexShrink: 0, textAlign: "center" }}>
                <FanComp color={mode.color} />
                <div style={{ fontSize: 11, fontWeight: 700, color: mode.color, letterSpacing: 1, textTransform: "uppercase", marginTop: 6 }}>{mode.icon} {mode.label}</div>
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: mode.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{mode.tagline}</div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 20 }}>{mode.desc}</p>

                <div style={{ background: "white", borderRadius: 12, padding: 16, border: `1px solid ${mode.color}33`, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: mode.color, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Scoring formula</div>
                  {mode.formula.map((f, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: i < mode.formula.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                      <span style={{ fontSize: 13, color: "#374151" }}>{f.label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: mode.color }}>{f.pts}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: "white", borderLeft: `4px solid ${mode.color}`, borderRadius: "0 10px 10px 0", padding: "12px 16px", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 700, color: mode.color }}>Key insight: </span>{mode.insight}
                </div>
              </div>
            </div>
          </div>

          {/* LIVE DEMO */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>↓ Try it — live interactive demo</div>
            <SceneComp />
          </div>
        </>)}

        {/* ══════════ REVENUE ══════════ */}
        {activeTab === "revenue" && (<>
          <div style={{ paddingTop: 40, marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#059669", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>Business model</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1.5, marginBottom: 6 }}>4 Revenue Streams</h2>
            <p style={{ color: "#6B7280", fontSize: 15 }}>No gambling revenue. Pure skill-based platform economics.</p>
          </div>

          {/* REVENUE STREAMS */}
          <div style={{ display: "grid", gap: 16, marginBottom: 40 }}>
            {REVENUE.map((r, i) => (
              <div key={i} style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 16, padding: 22, borderLeft: `5px solid ${r.color}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: r.color, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>Stream {i + 1}</div>
                    <div style={{ fontSize: 20, fontWeight: 800 }}>{r.stream}</div>
                    <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>Year 1 → Year 3</div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: r.color }}>{r.year1} → {r.year3}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ flex: 1, height: 8, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ width: `${r.pct}%`, height: "100%", background: r.color, borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: r.color, width: 44 }}>{r.pct}%</div>
                </div>
              </div>
            ))}
          </div>

          {/* YEARLY SUMMARY */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 14, marginBottom: 40 }}>
            {[["Year 1","£121k","2k Pro users · 5 partners","#DBEAFE","#1D4ED8"],["Year 2","£600k","12k users · 25 partners · 2 brands","#D1FAE5","#065F46"],["Year 3","£3.1M","50k users · 80 partners · 10 brands","#FEF9C3","#92400E"]].map(([yr,rev,note,bg,tc]) => (
              <div key={yr} style={{ background: bg, borderRadius: 16, padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: tc, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>{yr}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: tc, letterSpacing: -1 }}>{rev}</div>
                <div style={{ fontSize: 11, color: "#6B7280", marginTop: 6, lineHeight: 1.4 }}>{note}</div>
              </div>
            ))}
          </div>

          {/* PRO REASONS */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12 }}>Why fans pay £3.99/month</div>
            <h3 style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1, marginBottom: 24 }}>6 Pro Conversion Triggers</h3>
            <div style={{ display: "grid", gap: 14 }}>
              {PRO_REASONS.map((r, i) => (
                <div key={i} style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: 20, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${r.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#111827" }}>{i + 1}. {r.title}</div>
                    <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>)}

        {/* ══════════ FUNDING ══════════ */}
        {activeTab === "funding" && (<>
          <div style={{ paddingTop: 40, marginBottom: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#DC2626", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10 }}>Investment roadmap</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: -1.5, marginBottom: 6 }}>How We Build This</h2>
            <p style={{ color: "#6B7280", fontSize: 15 }}>Community-first. Validate before building. Raise on traction, not promises.</p>
          </div>

          {/* STRATEGY */}
          <div style={{ background: "#EFF6FF", border: "1.5px solid #BFDBFE", borderRadius: 16, padding: 22, marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1D4ED8", marginBottom: 10 }}>The right order — most founders get this backwards</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              {["Find partner community", "Run manual season (no code)", "Prove 40%+ week-2 retention", "Raise pre-seed", "Build MVP app", "World Cup 2026 launch", "Raise seed on traction"].map((s, i, arr) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ background: "#2563EB", color: "white", borderRadius: 99, padding: "4px 12px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>{s}</div>
                  {i < arr.length - 1 && <span style={{ color: "#93C5FD", fontWeight: 700 }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div style={{ marginBottom: 40 }}>
            {[
              { phase: "Now — Month 3", title: "Bootstrap", amount: "£0 raised", color: "#9CA3AF", bg: "#F9FAFB", desc: "Manual prediction season with 1–3 YouTube channel partners. Google Forms + Discord + spreadsheet. Prove demand before writing a single line of code. Every signup is proof." },
              { phase: "Month 4–6", title: "Pre-Seed Round", amount: "£50–150k", color: "#2563EB", bg: "#EFF6FF", desc: "Sports-focused angel investors. Pitch: community proof + working prototype + partner LOIs. Funds: hire 1 developer, build MVP app, 6 months runway." },
              { phase: "Month 12–18", title: "Seed Round", amount: "£500k–£1.5M", color: "#059669", bg: "#ECFDF5", desc: "With 5,000+ users and £100k+ ARR. Target investors: Courtside Ventures, Elysian Park Ventures, United First Partners. Pitch: retention + revenue + club partnership proof." },
              { phase: "Year 3", title: "Series A", amount: "£5–10M", color: "#D97706", bg: "#FFFBEB", desc: "100k+ users. Multi-club official deals. International expansion (Nigeria, India, Indonesia). New sports added. Full fan intelligence data product launched." },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 99, background: t.color, flexShrink: 0, marginTop: 4 }} />
                  {i < 3 && <div style={{ width: 2, flex: 1, background: "#E5E7EB", marginTop: 4 }} />}
                </div>
                <div style={{ background: t.bg, border: "1.5px solid #E5E7EB", borderRadius: 14, padding: 20, flex: 1, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 4 }}>{t.phase}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                    <div style={{ fontSize: 20, fontWeight: 800 }}>{t.title}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: t.color }}>{t.amount}</div>
                  </div>
                  <div style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* COSTS */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 40 }}>
            <div style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>One-time build cost</div>
              {[["MVP development (6 months)","£18–30k"],["UI/UX design","£3–5k"],["Football data API","£2–5k/yr"],["App store registration","£100"]].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6", fontSize: 13 }}>
                  <span style={{ color: "#6B7280" }}>{l}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0 0", fontSize: 15, fontWeight: 800 }}>
                <span>Total MVP</span>
                <span style={{ color: "#D97706" }}>£25–40k</span>
              </div>
            </div>
            <div style={{ background: "white", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#9CA3AF", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>Monthly running costs</div>
              {[["Hosting (AWS/GCP)","£200–800"],["Football data API","£200–400"],["Claude AI (Tactics mode)","£100–500"],["Push notifications","£50–200"]].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #F3F4F6", fontSize: 13 }}>
                  <span style={{ color: "#6B7280" }}>{l}</span>
                  <span style={{ fontWeight: 700 }}>{v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0 0", fontSize: 15, fontWeight: 800 }}>
                <span>Monthly burn</span>
                <span style={{ color: "#2563EB" }}>£550–1,900</span>
              </div>
            </div>
          </div>

          {/* THIS WEEK */}
          <div style={{ background: "#ECFDF5", border: "2px solid #6EE7B7", borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#059669", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Action this week</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Contact 5 football communities</div>
            <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 16 }}>Find 5 YouTube channels or podcasts with 100k–2M subscribers. Send a 3-sentence message: what the product is, what they get (branded league + 30% revenue share), ask for a 20-minute call. No built product needed — just a conversation.</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["AFTV — Arsenal 1.5M","Redmen TV — Liverpool 600k","Tifo Football — 2M","United Stand — Man Utd 700k","Mark Goldbridge — 1.8M"].map(c => (
                <div key={c} style={{ background: "white", border: "1px solid #6EE7B7", borderRadius: 99, padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "#065F46" }}>{c}</div>
              ))}
            </div>
          </div>
        </>)}

      </div>
    </div>
  );
}
