document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
    <aside class="sidebar">
        <h2>BubbolScript Documentation</h2>
        <nav>
            <a href="/bubbolscript-docs/basics">Basics</a>
            <a href="/bubbolscript-docs/wait">Wait</a>
            <a href="/bubbolscript-docs/repeat">Loops</a>
            <a href="/bubbolscript-docs/ifelse">If/else</a>
        </nav>
    </aside>
    `;

    document.body.insertAdjacentHTML("afterbegin", sidebarHTML);

    let mainStuff = document.querySelector(".main-stuff");
    if (!mainStuff) {
        mainStuff = document.createElement("main");
        mainStuff.className = "main-stuff";
        
        while (document.body.childNodes.length > 1) {
            const node = document.body.childNodes[1];
            if (node.nodeName !== "ASIDE") {
                mainStuff.appendChild(node);
            }
        }
        document.body.appendChild(mainStuff);
    }
});
