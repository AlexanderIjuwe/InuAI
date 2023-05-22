import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: '1', uv: 10},
              {name: '12', uv: 12.28},
              {name: '15', uv: 13.30},
              {name: '18', uv: 50},
              {name: '22', uv: 160},
              {name: '26', uv: 55}

];
const RenderLineChart =()=> (
  <LineChart width={350} height={120} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default RenderLineChart;