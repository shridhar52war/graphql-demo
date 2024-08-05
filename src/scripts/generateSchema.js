import fs from 'fs';
import path from 'path';

const PATH_TO_SCHEMA = 'src/schemas/index.js';
const SCHEMA_FILENAME = 'schema.graphql';

async function generatePrintableSchema() {
  const schemaFilePath = path.join(process.cwd(), PATH_TO_SCHEMA);
  const tempGraphqlPath = path.join(process.cwd(), SCHEMA_FILENAME);

  try {
    const schemaString = await import(schemaFilePath).then(
      (module) => module.default,
    );

    if (typeof schemaString !== 'string') {
      throw new Error('Expected schemaString to be a string.');
    }

    fs.writeFileSync(tempGraphqlPath, schemaString);

    console.log(`Schema written to ${tempGraphqlPath}`);
  } catch (error) {
    console.error('Failed to load schema:', error);
  }
}

generatePrintableSchema();
