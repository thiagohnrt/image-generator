import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const width = 1080;
  const height = 1920;

  // await fetch("https://placehold.co/600x400/orange/white");

  return new ImageResponse(
    (
      // Background
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width,
          height,
          backgroundColor: "rgb(193, 152, 218)",
          padding: 50,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/thiagohbhonorato.png"
          alt="Product"
          width={540}
          height={960}
          style={{ border: "1px solid #000" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            width: "100%",
            height: 600,
            borderRadius: 50,
          }}
        >
          <h1 style={{ fontSize: 72 }}>Nome do produto</h1>
          <h2 style={{ fontSize: 90, fontWeight: "bold" }}>R$ 100,00</h2>
        </div>
        <p style={{ fontSize: 32, textAlign: "center", padding: "0 100px" }}>
          Atenção: Verifique a disponibilidade de estoque conforme a sua região.
        </p>
      </div>
    ),
    {
      width,
      height,
    }
  );
}
