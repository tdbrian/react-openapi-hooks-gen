#!/usr/bin/env node

import { runReactOpenApiGen } from './react-openapi-gen';

// Run the main function
runReactOpenApiGen().catch((err) => console.error(`Error on API generation: ${err}`));
