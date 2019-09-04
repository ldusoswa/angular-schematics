# My scaffolding tool

Brief description of this scaffolding tool

# Developer quick guide (steps to take to generate and after generation)

1. In the consuming project navigate to where you want code to be generated.
2. run ng g workshop --name="thing"
3. subsequent setps

# Usage

Add the dev dependency to your project
`yarn add @workshop/schematics --dev`

To run, use 

```ng g @workshop/schematics:workshop --name="drive"```

If you want to make this command shorter, in your project, simply run 

```ng config cli.defaultCollection @workshop/schematics```

This allows you to simply do 

```ng g workshop --name="blah"```

or

```ng g workshop --name="my thing"```

or even

```ng g workshop --name="the-thing-that-i-care-about"```

If you wish to generate the files in a specific directory, either cd into that directory before running the above command or simply add the path param

```--path="<destination>"```

Generated files 

```
List of generated files
```

## dry run

Allows you to see a list of files that the schematic will generate

`--dry-run`

# Making changes to these schematics 

## Local development
1. Ensure that the tests pass: `npm run test` will run the unit tests, using Jasmine as a runner and test framework.
2. Link the schematics in your local yarn repo. In this project (angular-workshop-schematics) run: `yarn link`.
3. Now link schematics in your consuming ui. So go to your ui and run `yarn link @workshop/schematics`. Your node_modules/@workshop/schematics folder becomes a symbolic link. to unlink (go back to using the real workshop schematics), run `yarn unlink @workshop/schematics`. 
4. Make the changes you want to make to the schematics (workshop-schematics), then remember to run `yarn build`
5. In your consumer, run the generator and ensure that your changes work.

## Ready to PR?
1. Just create your PR and the pipeline will take care of everything. 
2. After your PR is merged, you'll need to pull the latest version into your consuming project. To do this just do:
`yarn upgrade @workshop/schematics` In your consumer

### Publishing
Publishing is handled by the pipeline

