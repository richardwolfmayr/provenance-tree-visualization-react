# provenance-tree-visualization-react

## How to use
```javascript
import { ProvenanceTreeVisualizationReact } from '@visualstorytelling/provenance-tree-visualization-react';

class App extends React.Component {
  render() {
    return <ProvenanceTreeVisualizationReact traverser={traverser} />;
  }
}
```

Traverser should be of type [ProvenanceGraphTraverser](https://visualstorytelling.github.io/provenance-core/classes/provenancegraphtraverser.html).