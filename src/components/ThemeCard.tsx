import { theme } from "..";
import { saveFile } from "../lib/files";
import Button from "./Button";

export default () => (
    <div class="rounded-[5px] text-left p-2 w-full">
        <div class="w-full p-2 rounded-t-[5px]" style={{
            "background-color": theme().semanticColors.BACKGROUND_TERTIARY[0]
        }}>
            <h1 class="text-lg">{theme().name}</h1>
        </div>
        <div class="w-full p-2 rounded-b-[5px] flex flex-row items-center" style={{
            "background-color": theme().semanticColors.BACKGROUND_SECONDARY[0]
        }}>
            <p>{theme().description}</p>
            <Button class="ml-auto" onClick={() => saveFile(JSON.stringify(theme(), null, 4), `${theme().name}_poly.json`)}>Download</Button>
        </div>
    </div>
);