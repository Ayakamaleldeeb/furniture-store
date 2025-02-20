const { execSync } = require("child_process");
const fs = require("fs");
// Array of Swagger specification files
const swaggerFiles = [
  {
    url: "http://aura.runasp.net/swagger/v1/swagger.json",
    fileName: "auraApis",
  },

  // Add more Swagger files here as needed
];

// Output directory
const outputDir = "./types/generated";

// Loop through each Swagger file and generate types
swaggerFiles.forEach(({ url, fileName }) => {
  const outputFile = `${outputDir}/${fileName}.ts`;
  const command = `yarn openapi-typescript ${url} --output ${outputFile}`;
  execSync(command);

  // Read the generated file
  const fileContent = fs.readFileSync(outputFile, "utf8");

  // Modify the file content
  //   const modifiedContent = fileContent.replace(//api/g, /${fileName});

  // Write the modified content back to the file
  fs.writeFileSync(outputFile, fileContent);
});
