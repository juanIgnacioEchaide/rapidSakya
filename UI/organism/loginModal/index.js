import React from 'react'
import Cards from '../../atoms/cards'

export default function loginModal(props) {
    const { FocusCard } = Cards();
    const { PrimaryTitle } = Cards();

    return (
        <div>
            <FocusCard>
                <PrimaryTitle/>
                <InfoParagraph/>
            </FocusCard>   
        </div>
    )
}

loginModal.propTypes = {

}


