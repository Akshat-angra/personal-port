export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/95 to-background/90" />

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 50%, black)",
        }}
      />
    </div>
  );
}
