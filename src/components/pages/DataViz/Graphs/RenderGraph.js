import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const RenderGraph = props => {
  const [dummy, setDummy] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://btp-labs28-ds-e.eba-p8n7yppy.us-east-1.elasticbeanstalk.com/viz_nate1/{impact_score}?project_code=${props.data.project_code}`
      )
      .then(res => {
        setDummy(JSON.parse(res.data));
      });
  }, []);
  const data = dummy.data;
  let layout = dummy.layout;
  return (
    <Plot
      className="graph"
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
        fillFrame: true,
      }}
    />
  );
};

export default RenderGraph;
