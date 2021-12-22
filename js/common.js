const insertLinkCss = (href) => {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;

    head.appendChild(link);
}

const insertScript = (source) => {
    return new Promise((resolve, reject) => {
        const head = document.getElementsByTagName('head')[0];
        const script = document.createElement('script');

        script.onload = () => resolve(`script ${source} was successfully loaded`);
        script.onerror = () => reject(`error occurred while loading script ${source}`);
        script.src = source;

        head.appendChild(script);
    });
}