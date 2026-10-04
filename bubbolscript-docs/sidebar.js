document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
    <aside class="sidebar">
        <div>
        <img href="bubbol!.webp">
        <h2>BubbolScript Documentation</h2>
        </div>
        <nav>
            <a href="/bubbolscript-docs/basics">Basics</a>
            <a href="/bubbolscript-docs/variables">Var, Add and Sub</a>
            <a href="/bubbolscript-docs/wait">Wait</a>
            <a href="/bubbolscript-docs/repeat">Loops</a>
            <a href="/bubbolscript-docs/ifelse">If/else</a>
            <a href="/bubbolscript-docs/properties">Parents, Children and Properties!</a>
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
