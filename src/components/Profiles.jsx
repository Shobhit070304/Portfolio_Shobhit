import React from "react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sharmashobhit1000/",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <g>
          <path
            d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 44C13.4 46 4 36.6 4 25S13.4 4 25 4s21 9.4 21 21-9.4 21-21 21z"
            fill="#FFA116"
          />
          <path
            d="M32.7 17.3a1 1 0 0 0-1.4 0l-9.9 9.9a1 1 0 0 0 1.4 1.4l9.9-9.9a1 1 0 0 0 0-1.4z"
            fill="#FFA116"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/sharmashobhit1000/practice/",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" fill="#2F8D46" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="18"
          fontWeight="bold"
          dy=".3em"
        >
          GfG
        </text>
      </svg>
    ),
  },
  {
    name: "CodeStudio",
    url: "https://www.naukri.com/code360/profile/Shobhit07",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" fill="#F48024" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="bold"
          dy=".3em"
        >
          CS
        </text>
      </svg>
    ),
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Shobhit07",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" fill="#1F8ACB" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="14"
          fontWeight="bold"
          dy=".3em"
        >
          CF
        </text>
      </svg>
    ),
  },

  {
    name: "Codechef",
    url: "https://www.codechef.com/users/shobhit_77",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" fill="#F48024" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="14"
          fontWeight="bold"
          dy=".3em"
        >
          CC
        </text>
      </svg>
    ),
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/sharmashobhit102",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="23" fill="#2EC866" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#fff"
          fontSize="16"
          fontWeight="bold"
          dy=".3em"
        >
          HR
        </text>
      </svg>
    ),
  },
];

function Profiles() {
  return (
    <section id="profiles" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-crimson font-normal mb-4 text-white">
            Coding Profiles
          </h2>
          <p className="text-sm font-inter text-white/50 tracking-widest uppercase">
            Explore my presence on coding platforms
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-white/10 group"
            >
              <div className="mb-4">{profile.icon}</div>
              <span className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {profile.name}
              </span>
              <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300">
                Visit Profile
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profiles;
