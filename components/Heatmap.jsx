// src/components/Heatmap.js
import React, { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

const Heatmap = ({ clickData, scrollData }) => {
  const heatmapContainer = useRef(null);

  if(!clickData || !scrollData) {
    return;
  }

  const heatmapInstance = h337.create({
    container: heatmapContainer.current,
  });

  const heatmapData = [
    ...clickData?.map(d => ({ x: d.x, y: d.y, value: 1 })),
    ...scrollData?.map(d => ({ x: d.scrollX, y: d.scrollY, value: 1 }))
  ];

  heatmapInstance.setData({
    max: 10,
    data: heatmapData,
  });

  return <div ref={heatmapContainer} style={{ width: '600px', height: '400px' }} />;
};

export default Heatmap;