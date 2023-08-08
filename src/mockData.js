import { v4 as uuidv4 } from 'uuid';

export const mockData = [
    {
        id: uuidv4(),
        title: '📋 Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar React'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Node'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Mongo'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✏️ En progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar React'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Node'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Mongo'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '✔️ Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar React'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Node'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Mongo'
            },
        ]
    }
];
    