module.exports = {
    content: ["./*.html"],
    theme: {
        container: {
            padding: "2rem",
        },
        fontFamily: {
            roboto: ['"Roboto"', '"sans-serif"'],
            yellowtail: ['"Yellowtail"', '"cursive"'],
            opensans: ['"Open Sans", "sans-serif"'],
        },
        backgroundImage: {
            "header-bg": "url('./images/header-bg.png')",
            "about-bg": "url('./images/about-bg.png')",
            "testimonial-bg": "url('./images/testimonial-bg.png')",
            "friendly-bg": "url('./images/friendly-bg.png')",
            "newsletter-bg": "url('./images/newslatter-bg.png')",
        },
        fontSize: {
            sm: ["18px"],
        },
        extend: {
            colors: {
                "organ-green": "#7EB693",
                "organ-main": "#274C5B",
                "organ-button": "#EFD372",
                "organ-button-in": "#335B6B",
            },
        },
    },
    plugins: [],
};