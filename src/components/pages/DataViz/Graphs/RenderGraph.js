import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const RenderGraph = props => {
  const [graph1, setGraph1] = useState({});
  const [graph2, setGraph2] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://btp-labs28-ds-e.eba-p8n7yppy.us-east-1.elasticbeanstalk.com/viz_nate3/{impact_score}?project_code=${props.data.project_code}`
      )
      .then(res => {
        setGraph1(JSON.parse(res.data));
      });
    axios
      .get(
        `http://btp-labs28-ds-e.eba-p8n7yppy.us-east-1.elasticbeanstalk.com/viz_noah/{knn_visualization}?project_code=${props.data.project_code}`
      )
      .then(res => {
        setGraph2(JSON.parse(res.data));
      });
  }, [props.data.project_code]);
  const data = graph1.data;
  let layout = graph1.layout;
  const data2 = graph2.data;
  let layout2 = graph2.layout;

  return (
    <div>
      <div>
        <Plot
          className="graph"
          data={data}
          layout={{
            layout,
            width: 600,
            height: 360,
            margin: {
              l: 250,
              r: 25,
              b: 75,
              t: 50,
            },
            title: 'Key Impact Metrics (Percentile)',
            xaxis: {
              title: 'Percentile',
            },
          }}
          config={{
            displayModeBar: false,
            responsive: true,
            fillFrame: true,
            dragMode: false,
          }}
        />
      </div>
      <div>
        <Plot
          className="graph"
          data={data2}
          layout={{
            layout2,
            width: 600,
            height: 360,
            margin: {
              l: 75,
              r: 50,
              b: 75,
              t: 50,
            },
            xaxis: {
              title: 'Unsuitable',
            },
            yaxis: {
              title: 'Suitable',
            },
            title: 'Nearest Neighbors',
          }}
          config={{
            displayModeBar: false,
            responsive: true,
            fillFrame: true,
            scrollZoom: true,
            dragMode: false,
          }}
        />
      </div>
    </div>
  );
};

export default RenderGraph;
