
import React, { useRef, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import DynamicButton from '../../UI/DynamicButton';

const word = ['3', '4', '5', '1','2']

const QuestionThree = ({ addToAnswers, indx }) => {

    const [characters, updateCharacters] = useState(word);

    const [err, setErr] = useState('')

    const inputRef = useRef('')

    const question = '(6 x 10 x 5 x (7 x 20 + 1)) + 15 = ?'

    const correct = ['4', '2', '3', '1', '5']

    const themeSlice = useSelector(state => state.theme)

    const dynamicText = themeSlice === false ? 'white' : 'black'

    const sendAnswer = () => addToAnswers({ question: question, user_answer: characters.join(''), correct_answer: correct.join('') })

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
    }

    const keysEvents = (e) => {
        if(e.key === 'Enter'){
            sendAnswer()
        }
    }
    return (
        <div tabIndex='0' onKeyDown={keysEvents} className=''>
            <div>
                <h2>Question no.{indx}</h2>
                <h4>Drag and drop</h4>
                <h5>{question}</h5>
                <p style={{ fontWeight: '600', color: 'red' }}>{err}</p>
                <div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable direction='horizonal' droppableId="things">
                            {(provided) => (
                                <div className='wrapper' {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map((name, index) => {
                                        return (
                                            <Draggable key={name} draggableId={name} index={index}>
                                                {(provided) => (
                                                    <div
                                                        style={{ border: `1px solid ${dynamicText}`, backgroundColor: dynamicText }}
                                                        className={themeSlice === false ? 'second dndItem' : 'second dndItemLight'}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}>
                                                        {name}
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
                {/* <DynamicButton func={sendAnswer} text='Previous' /> */}
                {inputRef.current.value !== '' && <DynamicButton func={sendAnswer} text='Next' />}

            </div>
        </div>
    );
}

export default QuestionThree;


