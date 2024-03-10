// app/components/CreateTag.tsx
'use client'

import { useState } from 'react';

const CreateTag = () => {
    const [tagName, setTagName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/tags', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ name: tagName}),
            });

            if(response.ok) {
                // Tag created successfully
                setTagName('');
                console.log('Tag created successfully')
            } else {
                console.error('Failed to create tag');
            }
        } catch (error) {
            console.error('Error creating tag:', error); 
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={tagName}
                onChange={(e) => setTagName(e.target.value)}
                placeholder='Enter tag Name'
            />
            <button type="submit">Create Tag</button>
        </form>
    );
};

export default CreateTag

