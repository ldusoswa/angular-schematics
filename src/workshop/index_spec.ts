import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import { Schema as ApplicationOptions } from '@schematics/angular/application/schema';

const collectionPath = require.resolve('../collection.json');

describe('workshop', () => {
  const testRunner = new SchematicTestRunner('rocket', collectionPath);

  const workspaceOptions: WorkspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '6.0.0'
  };

  describe('with project', () => {
    const appOptions: ApplicationOptions = {
      name: 'bar',
      inlineStyle: false,
      inlineTemplate: false,
      routing: false,
      skipTests: false,
      skipPackageJson: false
    };

    let appTree: UnitTestTree;
    beforeEach(async () => {
      appTree = testRunner.runExternalSchematic('@schematics/angular', 'workspace', workspaceOptions);
      appTree = await testRunner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise();
    });

    it('works', (done) => {

      testRunner.runSchematicAsync('workshop', {name: 'example thing'}, appTree).toPromise().then(tree => {
        const expectedFiles = [
          '/projects/bar/src/app/things/example-thing.factory.ts',
        ];

        console.log(tree.files);
        expectedFiles.every((val) => {
          const fileFound = tree.files.includes(val);
          expect(fileFound).toBe(true, `FILE NOT PRESENT: ${val}`);
          return fileFound;
        });

        done();
      }, done.fail);
    });
  });
});
