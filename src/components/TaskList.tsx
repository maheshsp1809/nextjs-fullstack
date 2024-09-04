'use client';
import React from 'react';
type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    user: {
        name: string;
    };
    category?: {
        name: string;
    };
};

type TaskListProps = {
    tasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg bg-white shadow-md">
                    <h2 className="text-xl font-bold">{task.title}</h2>
                    <p>{task.description}</p>
                    <p className="text-sm text-gray-500">
                        Assigned to: {task.user.name} | Category: {task.category?.name || 'Uncategorized'}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
