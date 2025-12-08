import { Handle, Position } from "@xyflow/react"
import styles from './left.module.css'

const LeftSideNode = ({data}) => {
  return (
    <div className={styles.node} style={{backgroundImage: `url(${data.imgUrl})`}}>
        <Handle type="target" position={Position.Left}/>
        <div>{data.label}</div>
    </div>
  )
}

export default LeftSideNode