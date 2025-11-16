export function SocialProof() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-12">
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by the best teams
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
          <div className="h-8 w-32 rounded bg-muted/30" />
          <div className="h-8 w-28 rounded bg-muted/30" />
          <div className="h-8 w-36 rounded bg-muted/30" />
          <div className="h-8 w-32 rounded bg-muted/30" />
          <div className="h-8 w-28 rounded bg-muted/30" />
        </div>
      </div>
    </section>
  )
}
