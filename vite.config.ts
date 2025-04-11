import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(async () => {
  const additionalPlugins: PluginOption[] = [];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    try {
      const cartographerModule = await import("@replit/vite-plugin-cartographer");
      if (cartographerModule && typeof cartographerModule.cartographer === "function") {
        additionalPlugins.push(cartographerModule.cartographer() as PluginOption);
      } else {
        console.warn("cartographer is not a function or is undefined.");
      }
    } catch (error) {
      console.warn("Failed to import @replit/vite-plugin-cartographer:", error);
    }
  }

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      themePlugin(),
      ...additionalPlugins
    ] as PluginOption[], // Explicitly type the plugins array
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
    
  };
});
