import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DESIGN_DIR = path.join(process.cwd(), "design");

function normalizePdfTitle(filename: string) {
  return filename
    .replace(/\.pdf$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET() {
  try {
    const files = await fs.promises.readdir(DESIGN_DIR);
    const pdfFiles = files
      .filter((file) => file.toLowerCase().endsWith(".pdf"))
      .map((file, index) => ({
        id: index + 1,
        title: normalizePdfTitle(file),
        fileName: file,
        rawUrl: `/projects/design/${file}`,
        url: `/api/design-pdf?file=${encodeURIComponent(file)}`,
      }));

    return NextResponse.json(pdfFiles);
  } catch (error) {
    console.error("Failed to read design PDF directory:", error);
    return NextResponse.json(
      { error: "Unable to list design files." },
      { status: 500 }
    );
  }
}
