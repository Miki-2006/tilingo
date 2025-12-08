import { Handle, Position } from "@xyflow/react";
import styles from "./both.module.css";

const BothSideNode = ({ data }) => {
  return (
    <div className={styles.node}>
      <Handle type="target" position={Position.Left} />
      <div>?</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default BothSideNode;
