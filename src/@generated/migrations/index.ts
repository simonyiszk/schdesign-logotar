import * as migration_20250615_124055_init from './20250615_124055_init';

export const migrations = [
  {
    up: migration_20250615_124055_init.up,
    down: migration_20250615_124055_init.down,
    name: '20250615_124055_init'
  },
];
