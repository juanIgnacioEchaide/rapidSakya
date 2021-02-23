import { Buttons } from "../atoms/buttons"

import Buttons from '../atoms/buttons';

const ButtonSet = ({firstOption, secondOption, thirdOption}) => {
    const { PrimaryButton, SecondaryButton, ReadMoreButton } = Buttons();

    return(
        <div>
            <PrimaryButton text={firstOption}/>
            <SecondaryButton text={secondOption}/>
            <ReadMoreButton text={thirdOption}/>
        </div>
    )
}