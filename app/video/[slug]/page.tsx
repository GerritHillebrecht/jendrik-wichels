export default function VideoPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-auto max-w-5xl">
      <h1>Videotitle</h1>

      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/321295714?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Lara swiping through Iceland | 4K"
        ></iframe>
      </div>
      <p>Video description</p>
    </div>
  );
}
