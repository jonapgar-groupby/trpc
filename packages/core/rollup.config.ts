import { RollupOptions } from 'rollup';
import { buildConfig } from '../../scripts/getRollupConfig';

export const input = [
  'src/index.ts',
  'src/http/index.ts',
  'src/rpc/index.ts',
  'src/observable/index.ts',
  'src/internals/index.ts',
  'src/shared/index.ts',
  'src/unstableInternalsExport.ts',
];

export default function rollup(): RollupOptions[] {
  return buildConfig({
    input,
    packageDir: __dirname,
  });
}
