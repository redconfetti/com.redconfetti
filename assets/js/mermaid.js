import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
});

const blocks = document.querySelectorAll("pre > code.language-mermaid");

for (const [index, code] of blocks.entries()) {
  const source = code.textContent.trim();

  console.log("Mermaid source:", JSON.stringify(source));

  const id = `mermaid-diagram-${index}`;

  try {
    const { svg, bindFunctions } = await mermaid.render(id, source);

    const container = document.createElement("div");
    container.className = "mermaid-rendered";
    container.innerHTML = svg;

    code.parentElement.replaceWith(container);

    if (bindFunctions) {
      bindFunctions(container);
    }
  } catch (error) {
    console.error("Mermaid render error:", error);
  }
}
