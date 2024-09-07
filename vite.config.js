import {
	defineConfig
} from "vite"
import {
	resolve
} from "path";

export default defineConfig({
	base: "/project_online-cinema/",

	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				comedy: resolve(__dirname, "src/html/comedy.html"),
				horror: resolve(__dirname, "src/html/horror.html"),
				fantasy: resolve(__dirname, "src/html/dom-drakona.html"),
				thriller: resolve(__dirname, "src/html/gone-girl.html"),
				history: resolve(__dirname, "src/html/world-champion.html"),
				detective: resolve(__dirname, "src/html/detective.html"),
				cartoon: resolve(__dirname, "src/html/cartoon.html"),
				basedOnBooks: resolve(__dirname, "src/html/basedOnBooks.html"),
				search: resolve(__dirname, "src/html/search.html"),
			}
		}
	}
})