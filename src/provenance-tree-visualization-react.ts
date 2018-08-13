import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ProvenanceGraphTraverser } from '@visualstorytelling/provenance-core';
import { ProvenanceTreeVisualization } from '@visualstorytelling/provenance-tree-visualization';

export type IProps = {
  traverser: ProvenanceGraphTraverser
}

export class ProvenanceTreeVisualizationReact extends React.Component<IProps> {
  private provenanceTreeVisualization: ProvenanceTreeVisualization|null = null;

  render() {
    return React.createElement('div');
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
     this.provenanceTreeVisualization = new ProvenanceTreeVisualization(
        this.props.traverser,
        ReactDOM.findDOMNode(this) as HTMLDivElement,
      );
  }

  public static propTypes = {
    traverser: PropTypes.object
  }
}

