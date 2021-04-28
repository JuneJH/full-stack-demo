import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva:{
    
  },
  proxy:{
    '/api': {
      'target': 'http://121.36.51.141:1997/',
      'changeOrigin': true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
  
  fastRefresh: {},
});
