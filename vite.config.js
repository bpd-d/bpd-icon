import { resolve }  from  'path';
export default {
  build: {
    rollupOptions: {
      input: {
        cuiIcon: resolve(__dirname, './src/main.ts'),
        //cuiIconInit: resolve(__dirname, './src/init.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
}
