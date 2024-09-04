'use client';

import React, { useState } from 'react';

type AddTaskFormProps = {
    userId: number;
};

const AddTaskForm: React.FC<AddTaskFormProps> = ({ userId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, userId }),
        });
        setTitle('');
        setDescription('');
        // Optionally, trigger a refresh or update the task list
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="w-full p-2 border rounded-lg"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;
