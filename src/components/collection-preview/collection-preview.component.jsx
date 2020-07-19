import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                // Below takes the items props (via shop page and SHOP_DATA Collection) and firstly filters so only 4 items are displayed
                // at a time from the items props, from there it maps the items prop array and maps them by id to CollectionItem comp.
                
                items
                    .filter((item, idx) => idx < 4 )
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;