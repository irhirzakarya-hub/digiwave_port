import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DESIGN_DIR = path.join(process.cwd(), "design");

export async function GET(request: Request) {
  const url = new URL(request.url);
  let fileParam = url.searchParams.get("file");

  if (!fileParam) {
    return NextResponse.json({ error: "Missing file parameter." }, { status: 400 });
  }

  try {
    // Decode the filename properly
    const decodedFileName = decodeURIComponent(fileParam);
    
    // Remove any path prefix if present (e.g., /projects/design/)
    const fileName = path.basename(decodedFileName);
    const filePath = path.join(DESIGN_DIR, fileName);

    console.log("Requested file param:", fileParam);
    console.log("Decoded file name:", fileName);
    console.log("Full path:", filePath);

    // Verify file exists
    const stats = await fs.promises.stat(filePath);
    if (!stats.isFile()) {
      return NextResponse.json({ error: "Not a file." }, { status: 400 });
    }

    // Read the file
    const fileContents = await fs.promises.readFile(filePath);

    return new NextResponse(fileContents, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(fileName)}`,
        "Cache-Control": "public, max-age=3600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("PDF read error:", {
      message: error.message,
      code: error.code,
      path: error.path,
    });
    return NextResponse.json(
      { error: "Failed to read PDF file.", details: error.message || String(error) },
      { status: 500 }
    );
  }
}
