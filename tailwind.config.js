/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

      screens: {
        xsm: '320px',
        sm: '480px',
        smd: '575px',
        md: '768px',
        lg: '991px',
        lg2: '1024px',
        xl: '1440px',
      },
      fontFamily: {
        'Oswald': ['Oswald', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        xl: '1.25rem', //20px
        '3xl': '1.875rem', //30px
        '4xl': '2.25rem', //36px
        '6xl': '3.625rem', //58px
        '12xl': '2.625rem', //42px
        '13xl': '1.75rem', //28px
      },
 
      borderRadius: {
        'none': '0',
        'sm': '0.063rem', //1px
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '50%',
        '20': '1.25rem', //20px
        '30': '1.875rem', //30px
        'large': '12px',
      },
      placeholderColor: {
        'primary': '#fff',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        },
      extend: {
        dropShadow: {
          '3xl': '0 4px 84px rgba(24, 201, 191, 0.3)',
          '4xl': '0 -60px 100px rgba(24, 201, 191, 0.5)', 
        },
        boxShadow:{
          'shadowLogo': '0px 2px 70px rgba(24, 201, 191, 0.24)',
        },
        keyframes: {
          wave: {
            '0%': {transform : "translateX(100%)"},
            '100%': {transform : "translateX(-100%)"},
          },

          barMove: {
            '0%': {transform : "translateX(100%)"},
            '100%': {transform : "translateX(-100%)"},
          },

        },
        animation: {
          'moving': 'wave 12s linear infinite',
          'barMove': 'barMove 20s linear infinite',
        },
        spacing: {
          '13': '1.875rem', //30px
          '15': '3.75rem', //60px
          '25': '6.25rem', //100px
          '50': '3.125rem', //50px
        },
        lineHeight: {
          '86': '5.375rem', //86px
          '54':'3.375rem', //54
          '44': '2.75rem', //44px
          '38': '2.375rem', //38px
          '34': '2.125rem',  //34px
          '32': '2rem', //32px
          '28': '1.75rem', //28px
        },
        backgroundImage: {
          'hero-pattern': "url('/public/hero-pattern.svg')",
          'footer-texture': "url('/public/footer-texture.png')",
          'effect2': "url('../public/effect2.svg')",
          'icons-animation': "url('../public/icons-anim.svg')",
          'line_effect': "url('../public/line_effect.svg')",
          'offer': "url('../public/offer.svg')",
          'desktop-offer': "url('../public/desktop-offer.svg')",
          'dataCardEffect': "url('../public/dataCardEffect.svg')",
          'certificateBg': "url('../public/certificate-bg.png')",
          'pricingCardHead': "url('../public/price-card-header.png')",
          'pricingLogoBg': "url('../public/bglogo.svg')",
          'pricingCornerLogo': "url('../public/cornerLogo.svg')",
          'mentor_name': "url('../public/mentorName.svg')",
          'crossIcon': "url('../public/cross-popup.svg')",
          'periodIcon1': "url('../public/periodIcon1.svg')",
          'heroLight': "url('../public/heroLight.svg')",
          'faqEffect': "url('../public/faq-effect.svg')",

        },

        colors: {
          'primary': '#B0BEC5',
          'secondary':'#CFD8DC',
          'tertiary':'#90A4AE',
          'quartary':'#607D8B',
        },
        backgroundColor:{
          'dark':'#0C1012',
          'light-dark':'#182024'
        }

      },
    }, 
    plugins: [],
}
