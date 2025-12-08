import styles from "./page.module.css";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import RightSideNode from "./NodeTypes/RightHandle/RightHandleNode.jsx";
import LeftSideNode from "./NodeTypes/LeftHandle/LeftHandleNode.jsx";
import BothSideNode from "./NodeTypes/BothHandle/BothSideNode.jsx";

const nodeTypes = {
    rightSide: RightSideNode,
    leftSide: LeftSideNode,
    bothSide: BothSideNode
}

const Graph = ({words}) => {
  return (
    <div className={styles.graphContainer}>
      <ReactFlow nodes={words.nodes} edges={words.edges} nodeTypes={nodeTypes} fitView />
    </div>
  );
};

export default Graph;
