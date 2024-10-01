function getstrip() {
    const root = document.createElement("div");

    root.style.cssText = `
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: center;
    text-align: center;
    background-color: rgb(255, 208, 0);
    height: 64px;
    font-size: 24px;
    font-family: Arial, sans-serif;
    color: #16181c;
    `;

    const icon = document.createElement("span");

    icon.style.cssText = `margin-right: 8px;`;
    icon.classList.add('material-symbols-rounded')

    root.appendChild(icon);

    document.body.appendChild(root);

    return {"root": root, "icon": icon};
}
