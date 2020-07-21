import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                // Below takes the items props and firstly filters so only 4 items are displayed at a time from the items props.
                // From there it maps the item element from the items array it receives and maps them by id to CollectionItem component
                
                items
                    .filter((item, idx) => idx < 4 )
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;