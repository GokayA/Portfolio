'use client';
import { themes } from '@/data/data';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'dark';

  const [selectedTheme, setSelectedTheme] = useState<string>(savedTheme);

  const changeTheme = ({ theme }: any) => {
    setSelectedTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-primary text-base flex flex-col content-center"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>

        <p className="hidden sm:inline-block md:inline-block lg:inline-block">
          Themes
        </p>
        <svg
          width="12px"
          height="12px"
          className="ml-1  h-3 w-3 fill-current opacity-60 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {themes.map((theme) => (
          <button key={theme} onClick={() => changeTheme({ theme })}>
            {theme}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
