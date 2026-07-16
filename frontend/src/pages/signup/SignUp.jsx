import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";

/* ─────────────────────────────────────────
   COLOR TOKENS
   Yellow → buttons, logo, highlights  (BRIGHT)
   Cyan   → links, focus states, hover effects, active chat
   Green  → online indicator, success
───────────────────────────────────────── */
const T = {
  yellow:       "#fbbf24",
  yellowBright: "#fde047",
  yellowDark:   "#d97706",
  yellowOrange: "#fb923c",
  cyan:         "#00e5ff",
};

const features = [
  { icon: "⚡", text: "Real-time messaging" },
  { icon: "🔒", text: "End-to-end encrypted" },
  { icon: "💬", text: "Direct messaging" },
  { icon: "🌐", text: "Always available"    },
];

const chatMessages = [
  { side: "left",  text: "Ready to join the community? 🚀" },
  { side: "right", text: "Just signing up now! ✨" },
  { side: "left",  text: "Awesome, see you inside 🔥" },
];

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
      <style>{css}</style>

      <div className="lp-root">
        {/* ── Background ── */}
        <div className="lp-bg" />
        <div className="lp-orb lp-orb-amber" />
        <div className="lp-orb lp-orb-cyan"  />

        {/* ── Main grid ── */}
        <div className="lp-grid">

          {/* ══════ LEFT PANEL ══════ */}
          <div className="lp-left">
            <div className="lp-logo-row">
              <div className="lp-logo-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="logoGrad" x1="0" y1="0" x2="24" y2="24">
                      <stop offset="0%"   stopColor={T.yellowBright} />
                      <stop offset="100%" stopColor={T.yellowOrange} />
                    </linearGradient>
                  </defs>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="url(#logoGrad)" />
                </svg>
              </div>
              <span className="lp-wordmark">Sleipner</span>
            </div>

            <h1 className="lp-headline">
              Join the future of<br />
              <span className="lp-headline-accent">communication.</span>
            </h1>
            <p className="lp-tagline">
              Create an account to start chatting in real-time with your team and community.
            </p>

            <ul className="lp-features">
              {features.map((f, i) => (
                <li key={i} className="lp-feature-item">
                  <span className="lp-feature-icon">{f.icon}</span>
                  <span className="lp-feature-text">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="lp-chat-box">
              <div className="lp-chat-topbar">
                <span className="lp-live-dot" />
                <span className="lp-live-label">Live preview</span>
              </div>
              <div className="lp-chat-messages">
                {chatMessages.map((m, i) => (
                  <div
                    key={i}
                    className={`lp-bubble lp-bubble-${m.side}`}
                    style={{ animationDelay: `${0.3 + i * 0.42}s` }}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════ DIVIDER ══════ */}
          <div className="lp-divider" />

          {/* ══════ RIGHT PANEL ══════ */}
          <div className="lp-right">
            <div className="lp-card" style={{ maxHeight: "90vh", overflowY: "auto", overflowX: "hidden" }}>
              <div className="lp-card-stripe" />
              <div className="lp-card-body">
                <div className="lp-card-header" style={{ marginBottom: "16px" }}>
                  <div className="lp-secure-pill">
                    <span className="lp-pill-dot" />
                    New Account
                  </div>
                  <h2 className="lp-card-title">Create Account</h2>
                  <p className="lp-card-sub">Sign up to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="lp-form" style={{ gap: "12px" }}>
                  {/* Full Name */}
                  <div className="lp-field">
                    <label className="lp-label" htmlFor="lp-fullname">Full Name</label>
                    <div className="lp-input-wrap" id="lp-fullname-wrap">
                      <svg className="lp-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke={T.yellow} strokeWidth="1.8" />
                        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke={T.yellow} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <input
                        id="lp-fullname"
                        type="text"
                        placeholder="John Doe"
                        className="lp-input"
                        value={inputs.fullName}
                        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        onFocus={() => focusWrap("lp-fullname-wrap", true)}
                        onBlur={() =>  focusWrap("lp-fullname-wrap", false)}
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div className="lp-field">
                    <label className="lp-label" htmlFor="lp-username">Username</label>
                    <div className="lp-input-wrap" id="lp-username-wrap">
                      <svg className="lp-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" stroke={T.yellow} strokeWidth="1.8" />
                        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke={T.yellow} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <input
                        id="lp-username"
                        type="text"
                        placeholder="johndoe"
                        className="lp-input"
                        value={inputs.username}
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        onFocus={() => focusWrap("lp-username-wrap", true)}
                        onBlur={() =>  focusWrap("lp-username-wrap", false)}
                        autoComplete="username"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="lp-field">
                    <label className="lp-label" htmlFor="lp-password">Password</label>
                    <div className="lp-input-wrap" id="lp-password-wrap">
                      <svg className="lp-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke={T.yellow} strokeWidth="1.8" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={T.yellow} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <input
                        id="lp-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="lp-input"
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        onFocus={() => focusWrap("lp-password-wrap", true)}
                        onBlur={() =>  focusWrap("lp-password-wrap", false)}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        className="lp-eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
                            <line x1="1" y1="1" x2="23" y2="23" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
                          </svg>
                        ) : (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#6b7280" strokeWidth="1.8"/>
                            <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="1.8"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="lp-field">
                    <label className="lp-label" htmlFor="lp-confirm">Confirm Password</label>
                    <div className="lp-input-wrap" id="lp-confirm-wrap">
                      <svg className="lp-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke={T.yellow} strokeWidth="1.8" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={T.yellow} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      <input
                        id="lp-confirm"
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="lp-input"
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        onFocus={() => focusWrap("lp-confirm-wrap", true)}
                        onBlur={() =>  focusWrap("lp-confirm-wrap", false)}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>

                  {/* Gender Checkbox */}
                  <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                  <p className="lp-signup-line" style={{ marginTop: "4px", marginBottom: "4px" }}>
                    Already have an account?{" "}
                    <Link to="/login" className="lp-signup-link">Login here</Link>
                  </p>

                  <button id="lp-submit" type="submit" className="lp-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="lp-spinner" />
                        Signing Up…
                      </>
                    ) : (
                      <>
                        Sign Up
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="#0c0700" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ─── Focus helper — cyan focus ring ─── */
function focusWrap(id, active) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = active ? "#00e5ff"                          : "rgba(255,255,255,0.08)";
  el.style.boxShadow   = active ? "0 0 0 3px rgba(0,229,255,0.18)"  : "none";
  el.style.background  = active ? "rgba(0,229,255,0.04)"            : "rgba(255,255,255,0.03)";
}

/* ─── CSS ─── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.lp-root *, .lp-root *::before, .lp-root *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}

/* ── Page shell ── */
.lp-root {
  font-family: 'Inter', system-ui, sans-serif;
  position: fixed;
  inset: 0;
  background: #030305;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Background ── */
.lp-bg {
  position: absolute;
  inset: 0;
  /* yellow glow left, cyan glow right */
  background:
    radial-gradient(ellipse 60% 50% at 8%  55%, rgba(253,224,71,0.10) 0%, transparent 65%),
    radial-gradient(ellipse 50% 55% at 92% 30%, rgba(0,229,255,0.08)  0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 50% 95%, rgba(0,229,255,0.05)  0%, transparent 65%);
  pointer-events: none;
}

.lp-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}
/* yellow orb — top-left */
.lp-orb-amber {
  width: 520px; height: 520px;
  top: -170px; left: -110px;
  background: radial-gradient(circle, rgba(253,224,71,0.16) 0%, transparent 70%);
  animation: lpOrb 14s ease-in-out infinite alternate;
}
/* cyan orb — bottom-right */
.lp-orb-cyan {
  width: 440px; height: 440px;
  bottom: -120px; right: 30px;
  background: radial-gradient(circle, rgba(0,229,255,0.13) 0%, transparent 70%);
  animation: lpOrb 18s ease-in-out infinite alternate-reverse;
}

/* ── 2-column bounded grid ── */
.lp-grid {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width:  min(1080px, 96vw);
  height: min(660px,  93vh);
}

/* ══════ LEFT PANEL ══════ */
.lp-left {
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px 0 28px;
  animation: lpFadeUp 0.6s ease both;
}

/* Logo */
.lp-logo-row {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 32px;
}
/* yellow-orange logo box */
.lp-logo-box {
  width: 46px; height: 46px;
  border-radius: 13px;
  background: linear-gradient(135deg, #140e00, #221600);
  border: 1px solid rgba(251,191,36,0.32);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 28px rgba(251,191,36,0.24), 0 0 0 1px rgba(251,191,36,0.07);
  flex-shrink: 0;
}
/* yellow-orange wordmark */
.lp-wordmark {
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(130deg, #fff 5%, #fde047 35%, #fbbf24 65%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Headline */
.lp-headline {
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.9px;
  margin-bottom: 12px;
}
/* warm yellow-orange accent on headline */
.lp-headline-accent {
  background: linear-gradient(120deg, #fef08a 0%, #fbbf24 45%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lp-tagline {
  font-size: 14px;
  color: rgba(255,255,200,0.38);
  line-height: 1.65;
  margin-bottom: 26px;
  max-width: 340px;
}

/* Features — cyan hover effect */
.lp-features {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
  margin-bottom: 26px;
}
.lp-feature-item {
  display: flex;
  align-items: center;
  gap: 9px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 10px 13px;
  transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
  cursor: default;
}
/* cyan hover on feature cards */
.lp-feature-item:hover {
  border-color: rgba(0,229,255,0.4);
  background:   rgba(0,229,255,0.05);
  box-shadow:   0 0 14px rgba(0,229,255,0.1);
}
.lp-feature-icon { font-size: 15px; flex-shrink: 0; }
.lp-feature-text {
  font-size: 12.5px;
  font-weight: 500;
  color: rgba(255,255,220,0.55);
}

/* Chat box */
.lp-chat-box {
  background: rgba(255,255,255,0.022);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 13px 15px;
}
.lp-chat-topbar {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 11px;
}
/* green — online indicator */
.lp-live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74,222,128,0.9);
  animation: lpPulse 2.2s ease-in-out infinite;
}
.lp-live-label {
  font-size: 10px;
  font-weight: 600;
  color: rgba(240,220,170,0.28);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.lp-chat-messages {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.lp-bubble {
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 12px;
  max-width: 80%;
  animation: lpBubblePop 0.42s ease both;
  line-height: 1.4;
}
/* received bubble — neutral dark */
.lp-bubble-left {
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,220,0.7);
  border-radius: 4px 12px 12px 12px;
  align-self: flex-start;
}
/* sent bubble — CYAN = active chat color */
.lp-bubble-right {
  background: linear-gradient(135deg, rgba(0,229,255,0.18), rgba(8,145,178,0.13));
  border: 1px solid rgba(0,229,255,0.25);
  color: rgba(207,250,254,0.95);
  border-radius: 12px 4px 12px 12px;
  align-self: flex-end;
  text-align: right;
}

/* ══════ DIVIDER ══════ */
.lp-divider {
  width: 1px;
  height: 72%;
  /* yellow → cyan gradient divider */
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(251,191,36,0.28)  30%,
    rgba(0,229,255,0.22)  70%,
    transparent
  );
  flex-shrink: 0;
}

/* ══════ RIGHT PANEL ══════ */
.lp-right {
  flex: 0 0 385px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 42px;
  animation: lpFadeUp 0.6s ease 0.1s both;
}

.lp-card {
  width: 100%;
  background: linear-gradient(155deg, rgba(10,10,5,0.98) 0%, rgba(5,5,3,0.99) 100%);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(253,224,71,0.05),
    0 30px 70px rgba(0,0,0,0.65),
    0 0 55px rgba(253,224,71,0.06),
    0 0 80px rgba(0,229,255,0.03);
}

/* Top stripe — yellow-orange fades into vivid cyan */
.lp-card-stripe {
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent   5%,
    #fbbf24      22%,
    #fb923c      45%,
    #00e5ff      70%,
    transparent  95%
  );
}

.lp-card-body {
  padding: 26px 28px 24px;
}

/* Card header */
.lp-card-header { margin-bottom: 24px; }

/* yellow-orange pill = highlight */
.lp-secure-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.26);
  border-radius: 20px;
  padding: 4px 11px 4px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #fbbf24;
  letter-spacing: 0.3px;
  margin-bottom: 14px;
}
.lp-pill-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 7px rgba(251,191,36,0.9);
  animation: lpPulse 2s ease-in-out infinite;
}

.lp-card-title {
  font-size: 23px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.4px;
  margin-bottom: 4px;
}
.lp-card-sub {
  font-size: 13px;
  color: rgba(255,255,200,0.3);
}

/* Form */
.lp-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.lp-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.lp-label {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,180,0.42);
  text-transform: uppercase;
  letter-spacing: 0.55px;
}

/* input box — amber icon, cyan focus */
.lp-input-wrap {
  display: flex;
  align-items: center;
  gap: 9px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 11px;
  padding: 0 12px;
  transition: border-color 0.22s, box-shadow 0.22s, background 0.22s;
}
.lp-input-icon { flex-shrink: 0; display: flex; align-items: center; }
.lp-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  padding: 13px 0;
  font-family: 'Inter', sans-serif;
  /* cyan caret = active-input indicator */
  caret-color: #00e5ff;
  min-width: 0;
}
.lp-input::placeholder { color: rgba(255,255,200,0.15); }

/* eye — cyan hover */
.lp-eye {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px;
  opacity: 0.5;
  transition: opacity 0.2s, color 0.2s;
  flex-shrink: 0;
}
.lp-eye:hover { opacity: 1; }
.lp-eye:hover svg path,
.lp-eye:hover svg circle,
.lp-eye:hover svg line {
  stroke: #22d3ee !important;
}

/* Sign-up — CYAN link */
.lp-signup-line {
  font-size: 12.5px;
  color: rgba(255,255,200,0.3);
}
.lp-signup-link {
  color: #00e5ff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, text-shadow 0.2s;
}
.lp-signup-link:hover {
  color: #67e8f9;
  text-shadow: 0 0 14px rgba(0,229,255,0.5);
}

/* Submit — YELLOW-ORANGE button */
.lp-btn {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 11px;
  background: linear-gradient(135deg, #d97706 0%, #fbbf24 40%, #fb923c 100%);
  color: #0a0500;
  font-size: 14.5px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
  box-shadow: 0 4px 22px rgba(251,191,36,0.3), 0 2px 8px rgba(251,146,60,0.2), inset 0 1px 0 rgba(255,255,255,0.18);
  letter-spacing: 0.1px;
  margin-top: 2px;
}
.lp-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(251,191,36,0.22), inset 0 1px 0 rgba(255,255,255,0.18);
  filter: brightness(1.05);
}
.lp-btn:active:not(:disabled) { transform: translateY(0); }
.lp-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.lp-spinner {
  width: 16px; height: 16px;
  border: 2.5px solid rgba(12,7,0,0.25);
  border-top-color: #0c0700;
  border-radius: 50%;
  animation: lpSpin 0.7s linear infinite;
  flex-shrink: 0;
}

/* Footer — green status dot */
.lp-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 20px;
  font-size: 11px;
  color: rgba(255,255,200,0.2);
}
/* green = success / online */
.lp-footer-online {
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(74,222,128,0.6);
}
.lp-footer-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 6px rgba(74,222,128,0.85);
}
.lp-footer-sep { color: rgba(255,255,255,0.1); }

/* ── Animations ── */
@keyframes lpFadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes lpOrb {
  from { transform: translate(0, 0); }
  to   { transform: translate(28px, 20px); }
}
@keyframes lpPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
@keyframes lpBubblePop {
  from { opacity: 0; transform: translateY(7px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes lpSpin {
  to { transform: rotate(360deg); }
}
`;

export default SignUp;
