import markdown

# Read README.md content
with open("README.md", "r", encoding="utf-8") as f:
    md_content = f.read()

# Convert Markdown to HTML
html_content = markdown.markdown(md_content)

# Read existing index.html
with open("index.html", "r", encoding="utf-8") as f:
    html_template = f.read()

# Insert converted content into index.html
updated_html = html_template.replace("<!-- README_CONTENT -->", html_content)

# Save the updated index.html
with open("index.html", "w", encoding="utf-8") as f:
    f.write(updated_html)

print("README.md content added to index.html successfully!")
