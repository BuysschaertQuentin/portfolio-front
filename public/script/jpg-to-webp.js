import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputImage = path.join(import.meta.dirname, "../quentin.jfif");
const outputImage = path.join(import.meta.dirname, "../Quentin.webp");

async function convertToWebp() {
  try {
    // Get initial file size in MB
    const initialStats = fs.statSync(inputImage);
    const initialSizeMb = initialStats.size / (1024 * 1024);

    console.log(`Début de la conversion. Taille initiale : ${initialSizeMb.toFixed(2)} Mo`);

    // Process the image with sharp
    await sharp(inputImage)
      // Resize if the image is too large for web standards
      .resize({
        width: 4000,
        height: 4000,
        fit: "inside",
        withoutEnlargement: true,
      })
      // Convert to webp with optimal compression parameters
      .webp({
        quality: 80,
        effort: 6, // Max CPU effort for best compression size
      })
      .toFile(outputImage);

    // Get final file size in MB
    const finalStats = fs.statSync(outputImage);
    const finalSizeMb = finalStats.size / (1024 * 1024);

    console.log("Conversion terminée avec succès.");
    console.log(`Taille finale : ${finalSizeMb.toFixed(2)} Mo`);
  } catch (error) {
    console.error("Erreur lors de la conversion :", error.message);
  }
}

convertToWebp();
