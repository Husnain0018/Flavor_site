import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Syncopate', 'Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            colors: {
                'lambo-black': '#000000',
                'lambo-silver': '#C0C0C0',
                'lambo-gold': '#D4AF37',
                'nano-orange': '#FFB74D',
                'nano-deep': '#FFA726',
            },
            letterSpacing: {
                'ultra-wide': '0.3em',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
                'fade-in': 'fade-in 1s ease-out forwards',
            },
        },
    },
    plugins: [],
}
export default config
