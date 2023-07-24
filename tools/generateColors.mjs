import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const generateColors = () => {
  const data = JSON.stringify({
    query: `{
    colors(limit: 10000) {
      value
      name
    }
  }`,
  });

  const options = {
    hostname: "https://color-api-nnxacpp5eq-uc.a.run.app",
    path: "/",
    port: 80,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Node",
    },
  };

  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (d) => {
      data += d;
    });
    res.on("end", () => {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const colorData = Object.fromEntries(
        JSON.parse(data).data.colors.map((x) => [toCamelCase(x.name), x.value]),
      );
      fs.writeFileSync(
        path.join(__dirname, "../src/lib/color.json"),
        JSON.stringify(colorData, null, 2),
      );
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
};

generateColors();

export const toCamelCase = (str) => {
  const s = str.replace(/([-_ ][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "").replace(" ", "");
  });
  return s.charAt(0).toUpperCase() + s.slice(1);
};
