const nodes = [
  { id: '물', type: 'bothSide', data: { label: '물', imgUrl: "https://img.hankyung.com/photo/202304/01.33148434.1.jpg" }, position: { x: 250, y: 125 } },
  { id: '컵', type: 'rightSide', data: { label: '컵', imgUrl: "https://img.freepik.com/free-vector/realistic-white-cup_1284-45598.jpg?semt=ais_hybrid&w=740&q=80" }, position: { x: 0, y: 100 } },
  { id: '바다', type: 'rightSide', data: { label: '바다', imgUrl: "https://gscaltexmediahub.com/wp-content/uploads/2023/05/the-day-of-ocean-2023_1.png" }, position: { x: 0, y: 200 } },
  { id: '욕조', type: 'rightSide', data: { label: '욕조', imgUrl: "https://octapi.lxzin.com/imageBlockProp/image/202206/27/720/0/aae5892d-0b4d-4c84-86e1-f2e91494ffe8.jpg" }, position: { x: 0, y: 0 } },
  { id: '마시다', type: 'leftSide', data: { label: '마시다', imgUrl: "https://m.health.chosun.com/site/data/img_dir/2020/07/17/2020071701483_0.jpg" }, position: { x: 500, y: 100 } },
  { id: '수영하다', type: 'leftSide', data: { label: '수영하다', imgUrl: "https://m.health.chosun.com/site/data/img_dir/2022/05/09/2022050901783_0.jpg" }, position: { x: 500, y: 200 } },
  { id: '얼음', type: 'leftSide', data: { label: '얼음', imgUrl: "https://www.sart.ac.kr/upload/20230807/2c6946203f5d5e8188a46c775d2833f6_1691383068_61.jpg" }, position: { x: 500, y: 0 } },
];

const edges = [
  { id: 'e1', source: '컵', target: '물' },
  { id: 'e2', source: '바다', target: '물' },
  { id: 'e3', source: '욕조', target: '물' },
  { id: 'e4', source: '물', target: '마시다' },
  { id: 'e5', source: '물', target: '수영하다' },
  { id: 'e6', source: '물', target: '얼음' },
];

const wordsData = {
  nodes: nodes,
  edges: edges
}

export default wordsData;