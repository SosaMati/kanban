import './Kanban.scss'
import { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

import { Card } from "../card/Card"
import { mockData } from '../../mockData'



export const Kanban = () => {

    const [data, setData] = useState(mockData)

    const onDragEnd = (result) => {
        if(!result.destination) return
        const { source, destination } = result

        if(source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e=>e.id === source.droppableId) //busca el indice de la columna de origen
            const destColIndex = data.findIndex(e=>e.id === destination.droppableId) //busca el indice de la columna de destino
            const sourceCol = data[sourceColIndex] //es la columna de origen
            const destCol = data[destColIndex] //es la columna de destino

            const sourceTask = [...sourceCol.tasks] //copia de las tareas de la columna de origen 
            const destTask = [...destCol.tasks] //copia de las tareas de la columna de destino

            const [removed] = sourceTask.splice(source.index, 1) //remueve la tarea de la columna de origen
            destTask.splice(destination.index, 0, removed) //inserta la tarea en la columna de destino 

            data[sourceColIndex].tasks = sourceTask //actualiza la columna de origen
            data[destColIndex].tasks = destTask //actualiza la columna de destino

            setData(data) //actualiza el estado
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}> 
        <div className="kanban">
            {data.map((section) => (
                <Droppable key={section.id} droppableId={section.id}>
                    {(provided)=>(
                        <div {...provided.droppableProps}
                            className="kanban__section"
                            ref={provided.innerRef}
                        >
                            <div className="kanban__section__title">
                                {section.title}
                            </div>
                            <div className="kanban__section__content">
                                {section.tasks.map((task, index) => (
                                    <Draggable 
                                        key={task.id}
                                        draggableId={task.id} 
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div 
                                                ref={provided.innerRef} 
                                                {...provided.draggableProps} 
                                                {...provided.dragHandleProps}
                                                style={{...provided.draggableProps.style, opacity: snapshot.isDragging ? 0.5 : 1}}
                                            > 
                                                <Card>{task.title}</Card>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>                           
                        </div>
                    )}
                </Droppable>
            ))}
        </div>
        </DragDropContext>
    )
}
