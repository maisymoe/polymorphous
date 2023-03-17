import "uno.css";
import "@unocss/reset/tailwind.css";

import { Component, Show, createEffect } from "solid-js";
import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import { legacyToPolyTheme } from "drn-theme-converter";
import { uploadFile } from "./lib/files";
import Button from "./components/Button";
import ThemeCard from "./components/ThemeCard";

export const [theme, setTheme] = createSignal<any>({
    semanticColors: {
        BACKGROUND_PRIMARY: ["#313338"],
        BACKGROUND_SECONDARY: ["#2b2d31"],
        BACKGROUND_TERTIARY: ["#1e1f22"],
        HEADER_PRIMARY: ["#f2f3f5"],
        TEXT_NORMAL: ["#dbdee1"],
    },
    rawColors: { BRAND_500: "#5865f2" }
});

const App: Component = () => {
    createEffect(() => document.head.querySelector("meta[name=theme-color]").setAttribute("content", theme().rawColors.BRAND_500));

    return (
        <main class="grid h-full place-items-center text-center" style={{ 
            "background-color": theme().semanticColors.BACKGROUND_PRIMARY[0],
            "color": theme().semanticColors.TEXT_NORMAL[0],
        }}>
            <div class="flex flex-col gap-2 items-center">
                <div>
                    <h1 class="text-4xl" style={{ color: theme().semanticColors.HEADER_PRIMARY[0] }}>Polymorphous</h1>
                    <p class="text-lg">A tool to convert legacy themes to the Polytheme format.</p>
                    <Button class="my-2" onClick={() => uploadFile().then(f => setTheme(legacyToPolyTheme(JSON.parse(f))))}>Upload Theme</Button>
                    <Show when={"name" in theme()}>
                        <ThemeCard />
                    </Show>
                </div>
            </div>
        </main>
    );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
