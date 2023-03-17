export const uploadFile = async () => new Promise<string>((resolve) => {
    const domNode = document.createElement("input");
    domNode.setAttribute("accept", "application/json");
    domNode.setAttribute("type", "file");

    domNode.addEventListener("change", async () => {
        resolve(await domNode.files![0].text());
    }, false);

    domNode.click();
});

export function saveFile(data: any, fileName: string) {
    let domNode = document.createElement("a");
    domNode.href = `data:,${encodeURIComponent(data)}`;
    domNode.setAttribute("download", fileName);
    domNode.click();
    domNode.remove();
}