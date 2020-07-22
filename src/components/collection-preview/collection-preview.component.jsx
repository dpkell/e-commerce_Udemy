import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, match }) => (
    <div className="collection-preview">
        <Link className="title" to={`${match.path}/${title.toLowerCase()}`}>
            {title.toUpperCase()}
        </Link>
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

export default withRouter(CollectionPreview);