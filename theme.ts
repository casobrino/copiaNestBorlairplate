import { buildLegacyTheme } from "sanity";

const props={
    "--my-white":"#fff",
    "--my-black":"#1a1a1a",
    "--papafam-brand":"#F7AB0A",
    "--my-red":"#db4437",
    "--my-yellow":"#f4b400",
    "--my-green":"#0f9d58",
};

export const myTheme = buildLegacyTheme({
    "--white": props["--my-white"],
    "--black": props["--my-black"],
    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],
    "--brand-primary": props["--papafam-brand"],
    
})