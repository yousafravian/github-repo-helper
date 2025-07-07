const {fontFamily} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Modern color palette
                neon: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                electric: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                glass: {
                    light: 'rgba(255, 255, 255, 0.05)',
                    dark: 'rgba(0, 0, 0, 0.05)',
                    border: 'rgba(255, 255, 255, 0.1)',
                }
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Inter", "var(--font-sans)", ...fontFamily.sans],
                mono: ["'Fira Code'", "'JetBrains Mono'", ...fontFamily.mono],
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
                "float": {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                "glow": {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(102, 126, 234, 0.5)' },
                },
                "slide-in": {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                "shimmer": {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                "pulse-glow": {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "float": "float 3s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite",
                "slide-in": "slide-in 0.5s ease-out",
                "shimmer": "shimmer 2s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
                'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
                'card': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                'card-hover': '0 20px 40px rgba(0, 0, 0, 0.4)',
                'soft': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'gradient-dark': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
            },
            blur: {
                '4xl': '72px',
                '5xl': '96px',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require('@tailwindcss/typography'),
        // Custom plugin for glass morphism
        function({ addUtilities }) {
            const newUtilities = {
                '.glass': {
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    '-webkit-backdrop-filter': 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    '-webkit-backdrop-filter': 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: 'var(--shadow-card)',
                },
                '.hover-lift': {
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    },
                },
                '.gradient-text': {
                    background: 'var(--gradient-primary)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}
