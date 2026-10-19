// The site is fully static: Cloudflare serves the built assets and falls back to
// index.html for page navigations. Anything else that reaches the Worker is a 404.
// Add routes here only when server logic is needed (e.g. a contact form endpoint).
export default {
  fetch() {
    return new Response(null, { status: 404 })
  },
} satisfies ExportedHandler<Env>
