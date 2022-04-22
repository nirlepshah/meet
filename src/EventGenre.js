import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import './EventGenre.css'
export const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return { name: genre, value };
        });
        return data;
    };

    useEffect(() => { setData(() => getData()); }, [events]);

    return (
        <ResponsiveContainer className="container" height={400} >
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#1D4355"
                    dataKey="value"
                    label={({ name, percent }) => (name !== 0 && percent !== 0) ? `${name} ${(percent * 100).toFixed(0)}%` : ``}

                >
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}