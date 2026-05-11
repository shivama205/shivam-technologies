import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shivam Technologies — AI products, built with care.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [serifRegular, serifItalic, interMedium] = await Promise.all([
    fetch(
      new URL("./_og-fonts/InstrumentSerif-Regular.woff", import.meta.url),
    ).then((r) => r.arrayBuffer()),
    fetch(
      new URL("./_og-fonts/InstrumentSerif-Italic.woff", import.meta.url),
    ).then((r) => r.arrayBuffer()),
    fetch(
      new URL("./_og-fonts/Inter-Medium.woff", import.meta.url),
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "radial-gradient(120% 80% at 80% 20%, rgba(194,65,12,0.18), transparent 60%), radial-gradient(100% 60% at 0% 100%, rgba(124,58,237,0.10), transparent 60%), #faf8f4",
          fontFamily: "Inter",
          color: "#1a1a1a",
          position: "relative",
        }}
      >
        {/* subtle paper rule lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* Top row: brand mark + eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "InstrumentSerif",
                fontSize: 64,
                lineHeight: 1,
                color: "#1a1a1a",
              }}
            >
              S
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Shivam Technologies
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 16,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#4a4a4a",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 40,
                height: 1,
                background: "#4a4a4a",
              }}
            />
            <div style={{ display: "flex" }}>EST · 2026</div>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "InstrumentSerif",
              fontSize: 168,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              display: "flex",
              alignItems: "baseline",
              gap: 24,
            }}
          >
            <span style={{ display: "flex" }}>AI</span>
            <span
              style={{
                display: "flex",
                fontFamily: "InstrumentSerifItalic",
                fontStyle: "italic",
              }}
            >
              products,
            </span>
          </div>
          <div
            style={{
              fontFamily: "InstrumentSerif",
              fontSize: 168,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              display: "flex",
              alignItems: "baseline",
              gap: 24,
            }}
          >
            <span style={{ display: "flex" }}>built with</span>
            <span
              style={{
                display: "flex",
                color: "#1a1a1a",
                position: "relative",
              }}
            >
              <span style={{ display: "flex" }}>care</span>
              <span
                style={{
                  display: "flex",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 12,
                  height: 8,
                  borderRadius: 8,
                  background: "#c2410c",
                }}
              />
            </span>
            <span style={{ display: "flex", color: "#8a8a82" }}>.</span>
          </div>
        </div>

        {/* Bottom row: tagline + url */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 26,
              color: "#4a4a4a",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            <span style={{ display: "flex" }}>
              AI consulting and automation, shipped end-to-end.
            </span>
            <span style={{ display: "flex" }}>
              Senior engineer, working directly with founders and teams.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8a8a82",
              }}
            >
              niym.ai
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "InstrumentSerifItalic",
                fontStyle: "italic",
                fontSize: 28,
                color: "#c2410c",
              }}
            >
              India + Global
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "InstrumentSerif",
          data: serifRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "InstrumentSerifItalic",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
        {
          name: "Inter",
          data: interMedium,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
