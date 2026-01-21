1. npm install tailwindcss @tailwindcss/cli -> Installing Tailwind

2. @import "tailwindcss"; -> In style.css

3. npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch -> This command will generate output css file and update changes automatically, input.css mean style.css or whatever name you give and output.css will generate automatically after executing this command, npx(node package execute)

4. <link href="./output.css" rel="stylesheet"> -> In index.html