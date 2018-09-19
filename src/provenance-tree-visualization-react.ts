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

  private provenanceTreeVisualization: ProvenanceTreeVisualization|null = null;

  public render() {
    return React.createElement('div');
  }

  public shouldComponentUpdate() {
    return false;
  }

  public componentWillReceiveProps(props: IProps) {
    (ReactDOM.findDOMNode(this) as HTMLDivElement).innerHTML = '';
    this.provenanceTreeVisualization = new ProvenanceTreeVisualization(
      this.props.traverser,
      ReactDOM.findDOMNode(this) as HTMLDivElement,
    );
  }

  public componentDidMount() {
     this.provenanceTreeVisualization = new ProvenanceTreeVisualization(
        this.props.traverser,
        ReactDOM.findDOMNode(this) as HTMLDivElement,
      );
  }
}
