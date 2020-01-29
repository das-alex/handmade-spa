import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';

export default {
    // input: ['regenerator-runtime/runtime', 'src/index.js'],
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        // commonjs - to get all dependences from node_modules
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};