import Image from 'next/image';
import Texts from '../atoms/text';
import Cards from '../atoms/cards';

const MenuItem = ({name, price, description, img, link})=>{
  
  const { LightCard } = Cards();

  const  { PrimaryTitle, 
            SecondaryTitle,  
            InfoParagraph, 
            PrimaryLink, 
            ParagraphLink, 
            SmallLink
        } = Texts();

return(<LightCard>    
            <PrimaryTitle text={name}/>
            <SecondaryTitle text={price}/>
            <InfoParagraph text={description}/>
{/*             <PrimaryLink text={link}/> */}
        </LightCard>)
}

export default MenuItem;