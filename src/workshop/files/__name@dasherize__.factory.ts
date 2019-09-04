// Copyright 2019 Dell Inc. or its subsidiaries. All Rights Reserved.

import { helpers, random } from 'faker';
import { FixtureFactory } from '../../core/fixture-factory/fixture-factory';
import { <%= classify(name) %> } from './<%= dasherize(name) %>.model';
import { v4 as uuid } from 'uuid';

export class <%= classify(name) %>FixtureFactory extends FixtureFactory<<%= classify(name) %>> {
  build(attributes?): <%= classify(name) %> {
    return {
      id: uuid(),
      ...attributes
    };
  }
}

export const <%= camelize(name) %>FixtureFactory = new <%= classify(name) %>FixtureFactory();
