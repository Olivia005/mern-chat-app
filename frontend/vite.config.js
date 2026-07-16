import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, path.resolve(__dirname, ".."), "");
	const apiPort = env.PORT || "5000";

	return {
		plugins: [react()],
		server: {
			port: 3000,
			proxy: {
				"/api": {
					target: `http://localhost:${apiPort}`,
				},
			},
		},
	};
});
