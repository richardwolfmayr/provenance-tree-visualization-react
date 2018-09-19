import TestRenderer from 'react-test-renderer';
import { ProvenanceTreeVisualizationReact } from '../src/provenance-tree-visualization-react';
import React from 'react';
import { ProvenanceGraph, ProvenanceTracker, ActionFunctionRegistry, ProvenanceGraphTraverser } from '@visualstorytelling/provenance-core';

class ProvenanceTreeVisualizationReactNoRender extends ProvenanceTreeVisualizationReact {
  componentDidMount() { }
}


describe('ProvenanceTreeVisualizationReact', () => {
  let graph: ProvenanceGraph;
  let tracker: ProvenanceTracker;
  let registry: ActionFunctionRegistry;
  let traverser: ProvenanceGraphTraverser;

  beforeEach(() => {
    graph = new ProvenanceGraph(
      { name: 'calculator', version: '1.0.0' },
      'test',
    );
    registry = new ActionFunctionRegistry();
    // registry.register('add', calculator.add, calculator);
    // registry.register('subtract', calculator.subtract, calculator);
    tracker = new ProvenanceTracker(registry, graph, 'test');
    traverser = new ProvenanceGraphTraverser(registry, graph, tracker);
  });

  test('should have application', () => {

    let a;
    try {
      a = TestRenderer.create(
        React.createElement(ProvenanceTreeVisualizationReactNoRender as any, { traverser })
      );
    } catch(e) {
      console.log(e);
    }
    console.log(a);
    expect(1).toBe(2);
  });
});
