import { createEnv } from "@t3-oss/env-nextjs"
import * as z from "zod"

export const Env = createEnv({
    server: {
        MY_SERVER_VAR: z.string(),
    },
    client: {
        NEXT_PUBLIC_BASE_URL: z.string(),
    },
    runtimeEnv: {
        MY_SERVER_VAR: process.env.MY_SERVER_VAR,
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
    emptyStringAsUndefined: true,
})
