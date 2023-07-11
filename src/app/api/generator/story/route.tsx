import Image from "next/image";
import { ImageResponse, NextResponse } from "next/server";

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
          justifyContent: "center",
          width,
          height,
          backgroundColor: "rgb(193, 152, 218)",
          padding: 50,
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: 600,
            borderRadius: 50,
          }}
        ></div>
      </div>
    ),
    {
      width,
      height,
    }
  );
}
