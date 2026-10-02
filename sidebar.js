document.addEventListener("DOMContentLoaded", () => {
    const sidebarHTML = `
        <aside class="sidebar">
            <div>
<img src="bubbolscript-docs/bubbol!.webp">
<h2>BubbolScript Documentation</h2>
</div>
            <nav>
                <a href="/bubbolscript-docs/basics">Basics</a>
                <a href="/bubbolscript-docs/wait">Wait</a>
                <a href="/bubbolscript-docs/repeat">Loops</a>
                <a href="/bubbolscript-docs/ifelse">If/else</a>
                <a href="/bubbolscript-docs/properties">Parents, Childern and Propertes</a>
            </nav>
        </aside>
    `;

    document.body.insertAdjacentHTML("afterbegin", sidebarHTML);

    const sidebar = document.querySelector(".sidebar");

    const mainStuff = document.createElement("main");
    mainStuff.className = "main-stuff";

    while (document.body.children.length > 1) {
        mainStuff.appendChild(document.body.children[1]);
    }

    document.body.appendChild(mainStuff);
});
