# How to bundle single file React components

Support materials for the article 
[Integrate React Component into traditional websites and apps](https://medium.com/@cristian.dbr/integrate-react-components-into-traditional-websites-and-apps-83535a835a3c)

## CLI Usage 

Update the entry and output parameters for your desired component. 

```sh
npx webpack --config ./export/webpack.config.js \
    --entry ./src/ExampleComponent.tsx \
    --env output=ExampleComponent.production.min.js
```

