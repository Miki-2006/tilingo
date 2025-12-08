import { Handle, Position } from "@xyflow/react";
import styles from "./right.module.css";

const RightSideNode = ({ data }) => {
  return (
    <div className={styles.node} style={{backgroundImage: `url(${data.imgUrl})`}}>
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default RightSideNode;
