import Image from "next/image";
import { ImageResponse, NextResponse } from "next/server";

export async function GET() {
  const width = 1080;
  const height = 1920;

  await fetch("https://placehold.co/600x400/orange/white");

  return new ImageResponse(
    (
      // Background
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width,
          height,
          backgroundColor: "rgb(193, 152, 218)",
          padding: 50,
        }}
      >
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
      </div>
    ),
    {
      width,
      height,
    }
  );
}
