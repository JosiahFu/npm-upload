// I don't like how much casting there is here

/**
 * Creates an event handler for an `<input type="file"` to read a file as text
 *
 * @param onRead Callback for when the file is read
 * @returns The event handler for the `<input type="file">`
 */
function handleFileUpload(onRead: (content: string) => void): (event: InputEvent) => void {
    return (event) => {
        const files = (event.target as HTMLInputElement).files;
        if (!files) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            onRead(event.target?.result as string);
        };
        reader.readAsText(files[0]);
    };
}

export { handleFileUpload };
