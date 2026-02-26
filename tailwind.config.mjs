/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#f8f9fa',
                    dark: '#1a1a1a',
                    accent: '#7c3aed', // Example accent color
                    beige: '#f5f5f0',
                    gray: '#4a4a4a',
                    pink: '#fbcfe8', // Light muted pink
                    'pink-accent': '#f472b6',
                    surface: '#fafaf9',
                }
            },
            fontFamily: {
                serif: ['"Noto Serif JP"', 'serif'],
                sans: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
