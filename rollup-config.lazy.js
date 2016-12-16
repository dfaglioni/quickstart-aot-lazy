import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';


export default {
  entry: 'app/lazy-dummy/lazy-dummy.module.main.js',
  dest: 'app/lazy-dummy/lazy-dummy.module.ngfactory',
  moduleName: 'LazyDummyModuleNgFactory',
  sourceMap: false,
  format: 'iife',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      commonjs({
        include: 'node_modules/rxjs/**',
      })
  ]
}
