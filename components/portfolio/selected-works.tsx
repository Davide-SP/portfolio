const WORKS = [
  { title: "Alfreedo", typology: "Service & UX/UI Design", src: "/images/alfreedo-cover.png" },
  { title: "Learnn", typology: "UX/UI Design", src: "/images/learnn-cover.png" },
  { title: "Smart Energy Management", typology: "UX/UI Design", src: "/images/planet-cover.png" },
  { title: "Flying Tiger Copenaghen", typology: "UI Design", src: "/images/flying-tiger-copenaghen-cover.png" },
  { title: "Owls", typology: "UI Design", src: "/images/owls-cover.png" },
  { title: "Creative Coding", typology: "Interaction Design", src: "/images/creative-coding-cover.png" },
];

const textStyle: React.CSSProperties = {
  fontFamily: "'TikTok Sans', sans-serif",
  letterSpacing: "-0.02em",
};

export default function SelectedWorks() {
  return (
    <section style={{ paddingLeft: 64, paddingRight: 64, paddingTop: 128}}>
      {/* Header */}
      <h2
        style={{
          ...textStyle,
          fontSize: "clamp(44px, 5vw, 55px)",
          fontWeight: 400,
          color: "#000000",
          margin: 0,
          marginBottom: 64,
        }}
      >
        Selected Works
      </h2>

      {/* Grid */}
      <div
        style={{ marginBottom: 96 }}
       className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
      >
        {WORKS.map(({ title, typology, src }, i) => (
          <a
            key={i}
            href="#"
            style={{ textDecoration: "none", display: "block" }}
          >
            {/* Image container — overflow hidden keeps the frame fixed */}
            <div
              style={{overflow: "hidden", borderRadius: 8 }}
              className="group w-full aspect-[16/9]"
            >
              <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        
      />
             
            </div>

            {/* Title */}
            <p
              style={{
                ...textStyle,
                fontSize: 22,
                fontWeight: 500,
                color: "#000000",
                margin: 0,
                marginTop: 20
              }}
            >
              {title}
            </p>

            {/* Typology */}
            <p
              style={{
                ...textStyle,
                fontSize: 22,
                fontWeight: 400,
                color: "#8f8f8f",
                margin: 0,
                marginTop: 0
              }}
            >
              {typology}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
