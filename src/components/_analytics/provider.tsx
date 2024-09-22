import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import 'server-only'

// if (typeof window !== 'undefined') { // checks that we are client-side
//     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
//         api_host: "/ingest",
//         ui_host: "https://us.i.posthog.com",
//     })
// }

export const AppPostHogProvider = ({ children }: { children: React.ReactNode }) => {
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}