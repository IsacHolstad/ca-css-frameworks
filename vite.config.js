import path from 'path';

export default {
    root: path.resolve(__dirname, 'src'),
    build:{
        rollupOptions:{
            input:{
                home:path.resolve(__dirname,'src/index.html'),
                profile: new URL('src/profile.html', import.meta.url).pathname,
                signup: new URL('src/signup.html', import.meta.url).pathname
            }
        }
    }
};