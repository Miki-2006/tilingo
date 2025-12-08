import styles from './graphtest.module.css'
import Graph from '../Graph/Graph.jsx'
import wordsData from './data.js'
import Options from './Options/Options.jsx'

const GraphTestPage = () => {
    const options = [
        { id: 'option1', label: '하얀색' },
        { id: 'correctoption', label: '물' },
        { id: 'option3', label: '물체' },
        { id: 'option4', label: '집' },
    ];

  return (
    <div className={styles.pageContainer}>
        <Graph words={wordsData} />
        <Options options={options} />
    </div>
  )
}

export default GraphTestPage