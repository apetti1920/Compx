import React from 'react';

import EdgeComponent, { StaticEdgeBlockType, EdgeComponentPropType } from './EdgeComponent';

import { VisualEdgeStorageType } from '@compx/common/Network/GraphItemStorage/EdgeStorage';
import { VisualBlockStorageType } from '@compx/common/Network/GraphItemStorage/BlockStorage';

export default (
  props: {
    blocks: VisualBlockStorageType<any, any>[];
    edge: VisualEdgeStorageType<any>;
  } & Omit<EdgeComponentPropType, 'mouse' | 'edge'>
) => {
  const outputBlock = props.blocks.find((b) => b.id === props.edge.output.blockID);
  const inputBlock = props.blocks.find((b) => b.id === props.edge.input.blockID);
  if (outputBlock === undefined || inputBlock === undefined) return <React.Fragment />;

  const outputPortInd = outputBlock.outputPorts.findIndex((p) => p.id === props.edge.output.portID);
  const inputPortInd = inputBlock.inputPorts.findIndex((p) => p.id === props.edge.input.portID);
  if (outputPortInd === -1 || inputPortInd === -1) return <React.Fragment />;

  const newEdge: StaticEdgeBlockType = {
    ...props.edge,
    output: { block: outputBlock, portInd: outputPortInd },
    input: { block: inputBlock, portInd: inputPortInd }
  };

  const EdgeComponentWrapper = () => EdgeComponent({ ...props, edge: newEdge });

  return <EdgeComponentWrapper />;
};
