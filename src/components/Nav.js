import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CustomizedSwitches from '../UI/Switch'

const Nav = () => {

    const examinee = useSelector(state => state.examinee)

    const answers = useSelector(state => state.answers)

    const themeSlice = useSelector(state => state.theme)

    const dynamicText = themeSlice === false ? 'white' : 'black'

    const dynamicBack = themeSlice === false ? '#00044b' : '#4e54c8'

    const dynamicBar = themeSlice === false ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'

    return (
        <div style={{ color: dynamicText, backgroundColor: dynamicBack }} className='nav-design'>
            <div className='wrapperr'>
                <div className='firstt'>
                    {examinee.name !== '' && <h2>Hello {examinee.name}</h2>}
                </div>
                <div className='secondd'>
                    <CustomizedSwitches />
                </div>
            </div>
            <ProgressBar
                style={{ backgroundColor: dynamicBar, color: dynamicText }}
                variant="dark"
                animated
                label={`${answers.justCount}/${answers.total}`}
                now={answers.justCount / answers.total * 100} />
        </div>
    )
}

export default Nav
