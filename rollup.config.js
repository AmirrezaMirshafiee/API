import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/Api.js', // مسیر فایل اصلی کد شما
  output: {
    file: 'dist/index.js', // خروجی bundle شده در پوشه dist
    format: 'umd',         // فرمت UMD برای پشتیبانی هم در مرورگر و هم در Node.js
    name: 'API',           // نام global variable در مرورگر (برای استفاده از CDN)
    sourcemap: true,
  },
  plugins: [
    resolve(),   // حل وابستگی‌های ماژول
    commonjs(),  // تبدیل ماژول‌های CommonJS به ES6
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
  ],
};