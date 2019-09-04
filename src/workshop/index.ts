import {
  apply,
  filter,
  MergeStrategy,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { setupOptions } from './setup';
import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';
const stringUtils = {classify, dasherize, camelize, underscore };

export function workshop(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    setupOptions(tree, options);

    const movePath = normalize(options.path);

    const templateSource = apply(url('./files'), [
      options.spec ? noop() : filter(path => !path.endsWith('.spec.ts')),
      template({
        ...stringUtils,
        ...options
      }),
      move(movePath)
    ]);

    const rule = mergeWith(templateSource, MergeStrategy.Default);

    return rule(tree, _context);
  };
}
