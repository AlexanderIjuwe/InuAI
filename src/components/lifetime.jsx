import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip,Area,} from "recharts";

const data = [{name: 'Dec', uv: 400, pv: 2400, amt: 2400},
              {name: 'Jan', uv: 300, pv: 2800, amt: 2000},
              {name: 'Feb', uv: 400, pv: 400},
              {name: 'Mar', uv: 220, pv: 2500},
              {name: 'Apr', uv: 100, pv: 1200},
              {name: 'May', uv: 350, pv: 800},
              {name: 'jun', uv: 200, pv: 1024},
];

const RenderAreaChart = () => (
    
        <AreaChart width={1200} height={200} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    
    
);
 export default RenderAreaChart;