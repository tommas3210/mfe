const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ['components-lib']);


  const myMappings = sharedMappings.getDescriptors();
  // myMappings['components-lib'].eager = true;
  console.log('AAAA',myMappings);

module.exports = {
  output: {
    uniqueName: "container-module-federation"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        // For hosts (please adjust)
        remotes: {
            "mfe1": "mfe1@http://localhost:4201/remoteEntry.js",
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          ...myMappings
        }

        // shared: {
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.0.0-rc.1' },
        //   ...sharedMappings.getDescriptors()
        // }

    }),
    sharedMappings.getPlugin(),
  ],
};
