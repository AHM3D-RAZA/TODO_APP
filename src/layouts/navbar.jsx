import { useState } from "react"
import { NavLink, Outlet } from "react-router"

export const NavBar = () => {

    let [tasks, setTasks] = useState([])

    return (
        <div className="flex min-h-screen">
            <nav className="flex flex-col bg-gray-900 text-gray-200 w-56 p-4">
                <h1 className="text-xl font-bold text-white mb-6">TODO App</h1>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block w-full px-3 py-2 rounded-md mb-2 transition-colors 
                        ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}>
                        ➕ Add Task
                </NavLink>
                <NavLink
                    to="/tasks"
                    className={({ isActive }) =>
                        `block w-full px-3 py-2 rounded-md mb-2 transition-colors 
                        ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}>
                        📋 View Tasks
                </NavLink>
            </nav>
            <main className="flex-1 bg-gray-100">
                <Outlet context={{ tasks, setTasks }} />
            </main>
        </div>
    )}