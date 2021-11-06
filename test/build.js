import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['test/test.js'],
  outfile: 'test/dist.js',
  format: 'esm',
  platform: 'node',
  bundle: true,
})