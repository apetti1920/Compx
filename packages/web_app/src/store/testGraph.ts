import { v4 as uuidv4 } from 'uuid';

import { VisualGraphStorageType } from '@compx/common/Network/GraphItemStorage/GraphStorage';
import { VisualEdgeStorageType } from '@compx/common/Network/GraphItemStorage/EdgeStorage';
import { VisualBlockStorageType } from '@compx/common/Network/GraphItemStorage/BlockStorage';
import { PortStorageWithIDType } from '@compx/common/Network/GraphItemStorage/PortStorage';
import { PortTypes } from '@compx/common/Graph/Port';
import { Vector2D } from '@compx/common/Types';

function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function CreatePort(): PortStorageWithIDType<any> {
    return {
        id: uuidv4(),
        name: "",
        type: "NUMBER",
        initialValue: 0.0
    }
}

function CreateBlock(): VisualBlockStorageType<any, any> {
    return { id: uuidv4(), visualName: "", name: "",
        inputPorts: Array(getRandom(0, 5)).fill(0).map(() => CreatePort()),
        outputPorts: Array(getRandom(0, 5)).fill(0).map(() => CreatePort()),
        callbackString: "",
        tags: [], description: "", mirrored: false,
        position: new Vector2D(getRandom(-20.0, 20.0), getRandom(-20.0, 20.0)),
        size: new Vector2D(getRandom(10.0, 30.0), getRandom(10.0, 30.0)), shape: "rect",
        color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    }
}

export function MakeVisualGraph(numBlocks: number = 1): VisualGraphStorageType {
    const blocks = Array(numBlocks).fill(0).map(() => CreateBlock());

    return {
        blocks: blocks,
        edges: [] as VisualEdgeStorageType<keyof PortTypes>[]
    }
}