import Image from 'next/image';
import Texts from '../atoms/text';

const MenuItem = ({name, price, description, img, link})=>{
  const  { PrimaryTitle, 
            SecondaryTitle,  
            InfoParagraph, 
            PrimaryLink, 
            ParagraphLink, 
            SmallLink
        } = Texts();
return(<div>    
            <PrimaryTitle text={name}/>
            <SecondaryTitle text={price}/>
            <InfoParagraph text={description}/>
            <PrimaryLink text={link}/>
        </div>)
}

export default MenuItem;