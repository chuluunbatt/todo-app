// "use client";

// import { use, useState } from "react";

// const Page = () => {
//     const [value, setValue] = useState("")
//     const [tasks, setTasks] = useState([]);

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     };


//     const handleClick = () => {
//         setTasks([...tasks, value]);
//         setValue("")
//     }
//     console.log(tasks)
//     const handleDelete = (idToDelete) => {
//         setTasks(tasks.filter(task => task.id !== idToDelete));

//     }
//     const toggleTask = (id) => {
//         setTasks(tasks.map(task =>
//             task.id === id ? { ...task, completed: !task.completed } : task
//         ));
//     };

//     return (<div>
//         <div className=" flex relative w-screem h-screen justify-center items-center bg-gray-100">

//             <div className=" w-130 flex-col gap-7 border absolute p-8 rounded-[10px] text-center  bg-white">todo
//                 <div className="flex gap-4 m-3">
//                     <input
//                         value={value}
//                         onChange={handleChange}
//                         placeholder="...add a task"
//                         className="w-full px-4 py- border rounded-[10px]"
//                     />
//                     <button onClick={handleClick} className="border px-3 py-1 rounded-[10px] bg-blue-400 text-white">add</button>

//                 </div>
//                 <div className=" flex gap-5 m-5">
//                     <button className="border px-2 py-1 rounded-[10px]">All</button>
//                     <button className="border px-2 py-1 rounded-[10px]">Active</button>
//                     <button className="border px-2 py-1 rounded-[10px]">Complete</button>
//                 </div>

//                 <div className=" ">
//                     <input
//                         type="checkbox"
//                         checked={item.completed}
//                         onChange={() => toggleTask(item.id)}
//                     />


//                     <div className="space-y-2 max-h-60 overflow-y-auto">
//                         {tasks.map((item, index) => {
//                             return <div key={index.id} className="border rounded-2xl p-3 justify-between  ">{item}

//                                 s<div key={item.id} className="flex justify-between items-center border rounded-2xl p-3 bg-gray-50 gap-2 shadow-sm">
//                                     <span className="break-all text-gray-800">{item.text}</span>
//                                     <button
//                                         onClick={() => handleDelete(item.id)}
//                                         className="px-2 py-1 text-sm bg-blue-300  rounded-md hover:bg-red-200 transition-colors shrink-0"
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div >

//     );
// };
// export default Page;
"use client";

import { useState } from "react";

const Page = () => {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        if (value.trim() === "") return;
        // Шинэ даалгавар нэмэхдээ completed: false төлөвтэй нэмнэ
        setTasks([...tasks, { id: Date.now(), text: value, completed: false }]);
        setValue("");
    };

    const handleDelete = (idToDelete) => {
        setTasks(tasks.filter(task => task.id !== idToDelete));
    };

    // Checkbox дээр дарахад төлөв солих функц
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-gray-100">
            <div className="w-full max-w-md flex flex-col gap-7 border p-8 rounded-[10px] bg-white shadow-lg">
                <h1 className="text-2xl font-bold text-center">Todo List</h1>

                <div className="flex gap-4">
                    <input
                        value={value}
                        onChange={handleChange}
                        placeholder="...add a task"
                        className="w-full px-4 py-2 border rounded-[10px] outline-none"
                    />
                    <button
                        onClick={handleClick}
                        className="px-4 py-2 rounded-[10px] bg-blue-400 text-white hover:bg-blue-500"
                    >
                        Add
                    </button>
                </div>

                <div className="flex gap-5 justify-center">
                    <button className="border px-3 py-1 rounded-[10px] hover:bg-gray-50">All</button>
                    <button className="border px-3 py-1 rounded-[10px] hover:bg-gray-50">Active</button>
                    <button className="border px-3 py-1 rounded-[10px] hover:bg-gray-50">Complete</button>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                    {tasks.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border rounded-2xl p-3 bg-gray-50 gap-3 shadow-sm">
                            <div className="flex items-center gap-3 flex-1">

                                <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={() => toggleTask(item.id)}
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <span className={`break-all ${item.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                                    {item.text}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 shrink-0"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
