import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileZipper } from '@fortawesome/free-solid-svg-icons';

import './ExampleComponent.css'
import styles from './ExampleComponent.module.css'

import examplePhoto from './example_photo.jpg'


interface ExampleComponentProps
{
    value: number,
    callback: ( n: number ) => void,
}

function ExampleComponent( props: ExampleComponentProps )
{
    return (
        <table>
            <thead className={ styles.tableHead }>
                <tr>
                    <th>CSS File</th>
                    <th>CSS Module</th>
                    <th>Local Image</th>
                    <th>Icon (SVG)</th>
                </tr>
            </thead>
            <tbody className={ styles.tableBody }>
                <tr>
                    <td>
                        <div className='css-file'>
                            { props.value }
                        </div>
                    </td>
                    <td>
                        <button className={ styles.cssModuleButton } onClick={ () => props.callback( props.value + 1 ) }>
                            Inc++
                        </button>
                    </td>
                    <td>
                        <img style={ { width: '4em' } } src={ examplePhoto } alt='' />
                    </td>
                    <td>
                        <FontAwesomeIcon icon={ faFileZipper } fontSize={ '4em' } />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExampleComponent;
