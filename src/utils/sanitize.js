import DOMPurify from "dompurify";

export const _dps = (text) => DOMPurify.sanitize(text)