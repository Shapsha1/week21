import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["ты не верь слезам", 9],
    ["все вернется", 6],
    ["после долгих ночей", 4],
    ["былью сладкий сон", 2],
    ["обернется", 7],
];

export const options = {
    title: "Ты не верь слезам",
};

function App() {
    return <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"400px"} />;
}

export default App;
