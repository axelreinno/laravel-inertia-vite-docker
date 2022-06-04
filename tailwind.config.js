module.exports = {
    content: ['./resources/**/*.{vue,js,ts,jsx,tsx}'],
    
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
