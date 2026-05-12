/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Section backgrounds — alternating, NOT pure black
        base:      '#0c0c11',
        elevated:  '#111118',
        card:      '#16161f',
        'card-hover': '#1c1c27',

        // Accent system
        accent:    '#6366f1',
        'accent-light': '#818cf8',
        'accent-muted': 'rgba(99,102,241,0.12)',
        'accent-border': 'rgba(99,102,241,0.25)',

        // Secondary accent
        sky:       '#38bdf8',

        // Text hierarchy
        'ink-1':   '#eeeef5',
        'ink-2':   '#9191a8',
        'ink-3':   '#55555e',

        // Borders
        'line':    'rgba(255,255,255,0.07)',
        'line-strong': 'rgba(255,255,255,0.12)',

        // Terminal specific
        'term-bg': '#0a0a0f',
        'term-prompt': '#6366f1',
        'term-out':    '#9191a8',
        'term-cmd':    '#eeeef5',
        'term-err':    '#ef4444',
        'term-accent': '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      boxShadow: {
        'card':    '0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 32px rgba(0,0,0,0.4)',
        'glow-sm': '0 0 24px rgba(99,102,241,0.25)',
        'glow':    '0 0 48px rgba(99,102,241,0.35)',
        'glow-up': '0 -20px 60px rgba(99,102,241,0.12)',
      },
      animation: {
        'fade-up':    'fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        blink:        'blink 1.1s step-end infinite',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer:      'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400% 0' },
          '100%': { backgroundPosition: '400% 0' },
        },
      },
    },
  },
  plugins: [],
};
