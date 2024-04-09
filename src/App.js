//following the chart documentaion as (https://blog.logrocket.com/using-chart-js-react/)
//learning the char.js component in the react

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

import logo from "./images/logo.svg"

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
//registering all the char inbuilt documents
//it is used for making the char initallu

function App() {
  const state = {
    labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.78],
      },
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <article className="soft-red p-8 rounded-2xl shadow flex items-center justify-between">
          <h2 className="font-bold text-white text-3xl"><span className="block text-base font-normal">My balance</span>
          $921.48</h2>
          <img src={logo} alt="" />
        </article>

        <article className="bg-white mt-8 p-8 rounded-2xl shadow">
          <article className="mb-8">
          <h1 className="font-bold text-2xl md:text-3xl mb-5">Spending - Last 7 days</h1>
          <Bar data={state} />
          </article>

          <article className="pt-2 border-t flex items-center justify-between border-slate-200">
            <h2 className="font-bold text-4xl">
              <span className="text-base font-normal block opacity-75">Total this month</span>
              $478.33
            </h2>
            <h3 className="flex items-end justify-end flex-col text-base font-bold">
            +2.4%
              <span className="font-normal block opacity-75">
              last month
              </span>
            </h3>
          </article>
        </article>
        <h3 className="flex items-center justify-center flex-col text-base font-bold">By Chirag</h3>
      </div>
    </>
  );
}

export default App;
