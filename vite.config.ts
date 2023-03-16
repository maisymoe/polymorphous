import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import unocssPlugin from "@unocss/vite";

export default defineConfig({
    plugins: [
        solidPlugin(),
        // @ts-expect-error What.
        unocssPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
});
