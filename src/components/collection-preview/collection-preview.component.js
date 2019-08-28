import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, index) => index < 4)
                .map(( item) => (
                    <CollectionItem key={item.id} item={item} />
                    
                //data coming from shop.data
                //all these function calls will be called and re-rendered anytime the compoennt is used and re-rendered
                
           ))}
        </div>
    </div>
)


export default CollectionPreview;