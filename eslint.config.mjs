import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import turboConfig from "eslint-config-turbo/flat"
import tailwindcssPrettier from "eslint-plugin-tailwindcss-prettier"

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    ...turboConfig,
    {
        plugins: {
            "tailwindcss-prettier": tailwindcssPrettier,
        },
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ["*.mjs"],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-unused-vars": "off",
            "@next/next/no-sync-scripts": "off",
            "import/no-anonymous-default-export": "off",
            "tailwindcss-prettier/order": [
                "warn",
                {
                    attributes: [], // Additional attributes to check
                    functions: ["clsx", "tw", "cn", "cva"], // Function names to check
                },
            ],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
])

export default eslintConfig
