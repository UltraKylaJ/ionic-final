import { Dialog } from '@capacitor/dialog';

const showPrompt = async (title: string, message: string, okButtonTitle: string, cancelButtonTitle: string) => {
    const { value } = await Dialog.prompt({
        title,
        message,
        okButtonTitle,
        cancelButtonTitle
    });

    return value;
};

export function useDialog() {
    return {
        showPrompt
    }
}