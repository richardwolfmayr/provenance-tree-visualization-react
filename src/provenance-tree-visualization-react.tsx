import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ProvenanceGraphTraverser } from '@visualstorytelling/provenance-core';
import { ProvenanceTreeVisualization } from '@visualstorytelling/provenance-tree-visualization';

export interface IProps {
  traverser: ProvenanceGraphTraverser;
}

export class ProvenanceTreeVisualizationReact extends React.Component<IProps> {
  public static propTypes = {
    traverser: PropTypes.object.isRequired,
  };

  private provenanceTreeVisualization: ProvenanceTreeVisualization | null = null;
  private element: HTMLDivElement | null = null;

  public elementRef = (element: HTMLDivElement) => {
    this.element = element;
    this.createTree(this.props.traverser);
  }

  public createTree(traverser: ProvenanceGraphTraverser) {
    if (this.element) {
      this.element.innerHTML = '';
      this.provenanceTreeVisualization = new ProvenanceTreeVisualization(
        traverser,
        this.element,
      );
    }
  }

  public render() {
    return <div ref={this.elementRef} />;
  }

  public shouldComponentUpdate(nextProps: IProps) {
    if (
      this.element &&
      this.provenanceTreeVisualization &&
      this.props.traverser !== nextProps.traverser
    ) {
      // A different traverser was passes in
      // overwrite element with new tree visualization
      this.createTree(nextProps.traverser);
    }
    return false;
  }
}
