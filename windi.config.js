const defaultTheme = require("windicss/defaultTheme")
import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"

export default defineConfig({
    extract: {
        include: ["./pages/**/*.{js,ts,jsx,tsx,css}", "./components/**/*.{js,ts,jsx,tsx,css}"],
        exclude: ["node_modules", ".git", ".next"],
    },
    theme: {
        extend: {
            colors: {
                gray: colors.trueGray,
            },
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            serif: defaultTheme.fontFamily.serif,
            mono: defaultTheme.fontFamily.mono,
        },
    },
})
