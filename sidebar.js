document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
    <aside class="sidebar">
        <h2>BubbolScript Documentation</h2>
        <nav>
            <a href="/bubbolscript-docs/basics" id="selected-sidebar">Basics</a>
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
        
        const children = Array.from(document.body.children);
        children.forEach(child => {
            if (child.tagName !== "ASIDE") {
                mainStuff.appendChild(child);
            }
        });
        
        document.body.appendChild(mainStuff);
    }
});
