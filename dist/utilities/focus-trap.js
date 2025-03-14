export const getFocusableElements = (node) => Array.from(node.querySelectorAll('[href], button, textarea, input, div[contentEditable="true"], select, [tabindex][tabindex="0"]')).filter((element) => !element.hasAttribute('disabled') &&
    !(element.getAttribute('tabindex') === '-1'));
export const focusTrap = (node, enabled) => {
    let firstFocusable;
    let lastFocusable;
    const onKeydown = (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    event.preventDefault();
                }
            }
            else if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                event.preventDefault();
            }
        }
    };
    const setFocus = (fromObserver = false) => {
        if (enabled === false)
            return;
        const focusable = getFocusableElements(node);
        firstFocusable = focusable[0];
        lastFocusable = focusable[focusable.length - 1];
        if (!fromObserver)
            firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
        firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.addEventListener('keydown', onKeydown);
        lastFocusable === null || lastFocusable === void 0 ? void 0 : lastFocusable.addEventListener('keydown', onKeydown);
    };
    const cleanUp = () => {
        firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.removeEventListener('keydown', onKeydown);
        lastFocusable === null || lastFocusable === void 0 ? void 0 : lastFocusable.removeEventListener('keydown', onKeydown);
    };
    const onChange = (mutationRecords, observer) => {
        if (mutationRecords.length) {
            cleanUp();
            setFocus(true);
        }
        return observer;
    };
    const observer = new MutationObserver(onChange);
    observer.observe(node, { childList: true, subtree: true });
    setFocus();
    return {
        update(newArgs) {
            enabled = newArgs;
            newArgs ? setFocus() : cleanUp();
        },
        destroy() {
            cleanUp();
        },
    };
};
