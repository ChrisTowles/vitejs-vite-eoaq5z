# vitejs-vite-eoaq5z

Repo to reproduce solution to :  [Vite Issue 9445]( https://github.com/vitejs/vite/issues/9445)

Looking into this it appears to be with `aws-sdk`. It is not just related to `vite`. With some changes i was able to reproduce the issue and then solve it with configuration changes. 

Demonstrated loading `AWS-SDK@2.1188.0` and building with `vite@3.0.4`.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-eoaq5z)


## Found solutions at Solutions

Examples of the solution for `AWS-SDK`:

- <https://github.com/aws-amplify/amplify-js/issues/9639#issuecomment-1049158647>
- <https://github.com/aws/aws-sdk-js/issues/3673>
- <https://github.com/aws/aws-sdk-js-v3/issues/2478>

## Required Changes

Change in `vite.config.js`

```js

export default defineConfig({
 resolve: {
    alias: {
      // added for AWS-SDK with vite
      "./runtimeConfig": "./runtimeConfig.browser"
    },
  },
})
```

Change to `index.html`

```html

<script>
    
      // Add above `main.js` script for for AWS SDK.
      window.global = window;
    
</script>
```
