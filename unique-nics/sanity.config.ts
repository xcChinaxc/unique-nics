import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "19imvnjx",
    dataset: "rentals",
    title: "Unique-Nics",
    apiVersion: "2023-07-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
});

export default config;